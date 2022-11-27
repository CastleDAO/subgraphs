import { store, BigInt } from "@graphprotocol/graph-ts";
import {
  DefiHeroes,
  Approval,
  ApprovalForAll,
  ExperienceGained,
  ExperienceSpent,
  LeveledUp,
  NFTCreated,
  OwnershipTransferred,
  Paused,
  Quest as QuestEvent,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer,
  Unpaused,
  WarriorCreated,
  SetXPPerQuestCall__Outputs,
} from "../generated/DefiHeroes/DefiHeroes";
import { Heroe, All, Owner, Quest } from "../generated/schema";

let zeroAddress = "0x0000000000000000000000000000000000000000";

export function handleApproval(event: Approval): void {
  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())
  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())
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
  // // Note: If a handler doesn't require existing field values, it is faster
  // // _not_ to load the entity from the store. Instead, create it fresh with
  // // `new Entity(...)`, set the fields that should be updated and save the
  // // entity back to the store. Fields that were not set or unset remain
  // // unchanged, allowing for partial updates to be applied.
  // // It is also possible to access smart contracts from mappings. For
  // // example, the contract that has emitted the event can be connected to
  // // with:
  // //
  // // let contract = Contract.bind(event.address)
  // //
  // // The following functions can then be called on this contract to access
  // // state variables and other data:
  // //
  // // - contract.DEFAULT_ADMIN_ROLE(...)
  // // - contract.GAME_ROLE(...)
  // // - contract.balanceOf(...)
  // // - contract.experience(...)
  // // - contract.experienceRequired(...)
  // // - contract.freeclaimed(...)
  // // - contract.getApproved(...)
  // // - contract.getCurrentTokenId(...)
  // // - contract.getRoleAdmin(...)
  // // - contract.hasRole(...)
  // // - contract.isApprovedForAll(...)
  // // - contract.maxLevelWarriors(...)
  // // - contract.merkleRoot(...)
  // // - contract.name(...)
  // // - contract.owner(...)
  // // - contract.ownerOf(...)
  // // - contract.paused(...)
  // // - contract.price(...)
  // // - contract.priceMultiple(...)
  // // - contract.supportsInterface(...)
  // // - contract.symbol(...)
  // // - contract.tokenByIndex(...)
  // // - contract.tokenOfOwnerByIndex(...)
  // // - contract.tokenURI(...)
  // // - contract.totalSupply(...)
  // // - contract.warriors(...)
  // // - contract.warriorsQuestLog(...)
  // // - contract.whiteListActive(...)
  // // - contract.xpPerQuest(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleExperienceGained(event: ExperienceGained): void {
  let tokenId = event.params.tokenId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let defiHero = Heroe.load(id);

  if (defiHero) {
    let newXp = event.params.xpGained;
    defiHero.experience = defiHero.experience.plus(newXp);
    defiHero.save();
  }
}

export function handleExperienceSpent(event: ExperienceSpent): void {
  let tokenId = event.params.tokenId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let defiHero = Heroe.load(id);

  if (defiHero) {
    let contract = DefiHeroes.bind(event.address);
    defiHero.experience = contract.experience(tokenId);
    defiHero.save();
  }
}

export function handleLeveledUp(event: LeveledUp): void {
  //here
  let tokenId = event.params.tokenId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let defiHero = Heroe.load(id);

  let contract = DefiHeroes.bind(event.address);

  if (defiHero) {
    const entity = contract.warriors(tokenId);
    defiHero.speed = entity.getSpeed();
    defiHero.intelligence = entity.getIntelligence();
    defiHero.strength = entity.getStrength();
    defiHero.abilityPower = entity.getAbilityPower();
    defiHero.defense = entity.getDefense();
    defiHero.agility = entity.getAgility();
    defiHero.magicResistance = entity.getAgility();
    defiHero.constitution = entity.getConstitution();
    defiHero.level = defiHero.level.plus(BigInt.fromI32(1));
    defiHero.experience = contract.experience(tokenId);
    defiHero.save();
  }
}

export function handleNFTCreated(event: NFTCreated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleQuest(event: QuestEvent): void {
  let tokenId = event.params.tokenId;
  let id = event.address.toHex() + "_" + tokenId.toString();

  let quest = new Quest(id);
  quest.tokenID = tokenId;
  quest.date = event.block.timestamp;
  quest.xpEarned = event.params.xpGained;

  let defiHero = Heroe.load(id);
  if (defiHero) {
    defiHero.experience = defiHero.experience.plus(quest.xpEarned);
    defiHero.save();
  }
  quest.save();
}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTransfer(event: Transfer): void {
  let tokenId = event.params.tokenId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let from = event.params.from.toHex();
  let to = event.params.to.toHex();

  let contract = DefiHeroes.bind(event.address);

  //all entity setup
  let all = All.load("all");
  if (all == null) {
    all = new All("all");
    all.numOwners = BigInt.fromI32(0);
    all.numTokens = BigInt.fromI32(0);
    all.minted = [];
    all.burned = [];
  }

  if (from != zeroAddress || to != zeroAddress) {
    //don't query transfert from nobody to nobody

    if (from != zeroAddress) {
      //if not minting
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
    }

    if (to != zeroAddress) {
      //if minting
      let newOwner = Owner.load(to);
      if (newOwner == null) {
        newOwner = new Owner(to);
        newOwner.numTokens = BigInt.fromI32(0);
      }

      let defiHero = Heroe.load(id);

      if (defiHero == null) {
        defiHero = new Heroe(id);
        defiHero.tokenID = tokenId;
        defiHero.mintTime = event.block.timestamp;
        defiHero.tokenURI = contract.tokenURI(tokenId);

        const entity = contract.warriors(tokenId);
        defiHero.speed = entity.getSpeed();
        defiHero.intelligence = entity.getIntelligence();
        defiHero.strength = entity.getStrength();
        defiHero.abilityPower = entity.getAbilityPower();
        defiHero.defense = entity.getDefense();
        defiHero.agility = entity.getAgility();
        defiHero.magicResistance = entity.getAgility();
        defiHero.constitution = entity.getConstitution();
        defiHero.level = BigInt.fromI32(0);
        defiHero.experience = contract.experience(tokenId);
      }

      if (from == zeroAddress) {
        // mint +1
        all.numTokens = all.numTokens.plus(BigInt.fromI32(1));

        // Store minted
        let minted = all.minted;
        minted.push(tokenId);
        all.minted = minted;
      }

      defiHero.owner = newOwner.id;
      defiHero.save();

      if (newOwner.numTokens.equals(BigInt.fromI32(0))) {
        all.numOwners = all.numOwners.plus(BigInt.fromI32(1));
      }

      newOwner.numTokens = newOwner.numTokens.plus(BigInt.fromI32(1));
      newOwner.save();
    } else {
      // burn
      store.remove("Heroe", id);
      all.numTokens = all.numTokens.minus(BigInt.fromI32(1));
      // Store burned
      let burned = all.burned;
      burned.push(tokenId);
      all.burned = burned;
    }
  }
  all.save();
}

export function handleUnpaused(event: Unpaused): void {}

export function handleWarriorCreated(event: WarriorCreated): void {}
