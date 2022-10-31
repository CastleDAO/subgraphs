import { store, BigInt } from "@graphprotocol/graph-ts";
import {
  CastlesArbiGenOne,
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer,
} from "../generated/CastlesArbiGenOne/CastlesArbiGenOne";
import { Castle, All, Owner } from "../generated/schema";
let zeroAddress = "0x0000000000000000000000000000000000000000";

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = Castle.load(event.transaction.from.toHex())
  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new Castle(event.transaction.from.toHex())
  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }
  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)
  // // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner
  // entity.approved = event.params.approved
  // // Entities can be written to the store with `.save()`
  // entity.save()
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.
  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balanceOf(...)
  // - contract.getApproved(...)
  // - contract.getCapacity(...)
  // - contract.getCastleType(...)
  // - contract.getDefense(...)
  // - contract.getGoldGeneration(...)
  // - contract.getName(...)
  // - contract.getRarity(...)
  // - contract.getRarityNumber(...)
  // - contract.getSkillAmount(...)
  // - contract.getSkillType(...)
  // - contract.getWarrior(...)
  // - contract.getWarriorName(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.price(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
  // - contract.traitsOf(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {
  let tokenId = event.params.tokenId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let contractId = event.address.toHex();
  let from = event.params.from.toHex();
  let to = event.params.to.toHex();

  let contract = CastlesArbiGenOne.bind(event.address);

  let all = All.load("all");
  if (all == null) {
    all = new All("all");
    all.numOwners = BigInt.fromI32(0);
    all.numTokens = BigInt.fromI32(0);
    all.minted = [];
    all.burned = [];
  }

  if (from != zeroAddress || to != zeroAddress) {
    // skip if from zero to zero

    if (from != zeroAddress) {
      // existing token is a transfer between users or contracts
      let currentOwner = Owner.load(from);
      if (currentOwner != null) {
        if (currentOwner.numTokens.equals(BigInt.fromI32(1))) {
          all.numOwners = all.numOwners.minus(BigInt.fromI32(1));
        }
        currentOwner.numTokens = currentOwner.numTokens.minus(
          BigInt.fromI32(1)
        );
        currentOwner.save();
      }
    } // else minting

    if (to != zeroAddress) {
      // transfer
      let newOwner = Owner.load(to);
      if (newOwner == null) {
        //  new owner does not exist, create entity
        newOwner = new Owner(to);
        newOwner.numTokens = BigInt.fromI32(0);
      }

      let castle = Castle.load(id);
      if (castle == null) {
        castle = new Castle(id);
        castle.tokenID = tokenId;
        castle.mintTime = event.block.timestamp;
        castle.capacity = contract.getCapacity(tokenId);
        castle.defense = contract.getDefense(tokenId);
        castle.goldGeneration = contract.getGoldGeneration(tokenId);
        castle.castleType = contract.getCastleType(tokenId);
        castle.warrior = contract.getWarrior(tokenId);
        castle.warriorName = contract.getWarriorName(tokenId);
        castle.name = contract.getName(tokenId);
        castle.rarity = contract.getRarity(tokenId);
        castle.rarityNumber = contract.getRarityNumber(tokenId);
        castle.skillType = contract.getSkillType(tokenId);
        castle.skillAmount = contract.getSkillAmount(tokenId);
        castle.tokenURI = contract.tokenURI(tokenId);
      }

      if (from == zeroAddress) {
        // mint +1
        all.numTokens = all.numTokens.plus(BigInt.fromI32(1));

        // Store minted
        let minted = all.minted;
        minted.push(tokenId);
        all.minted = minted;
      }

      castle.owner = newOwner.id;
      castle.save();

      if (newOwner.numTokens.equals(BigInt.fromI32(0))) {
        all.numOwners = all.numOwners.plus(BigInt.fromI32(1));
      }

      newOwner.numTokens = newOwner.numTokens.plus(BigInt.fromI32(1));
      newOwner.save();
    } else {
      // burn
      store.remove("Token", id);
      all.numTokens = all.numTokens.minus(BigInt.fromI32(1));
      // Store burned
      let burned = all.burned;
      burned.push(tokenId);
      all.burned = burned;
    }
  }

  all.save();
}
