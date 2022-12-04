import { BigInt } from "@graphprotocol/graph-ts";
import {
  Dudes,
  Approval,
  ApprovalForAll,
  ArbiDudeCreated,
  NameChanged,
  OwnershipTransferred,
  Paused,
  Transfer,
  Unpaused,
} from "../generated/Dudes/Dudes";
import { Dude, Owner } from "../generated/schema";

let zeroAddress = "0x0000000000000000000000000000000000000000";

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleArbiDudeCreated(event: ArbiDudeCreated): void {}

export function handleNameChanged(event: NameChanged): void {
  let tokenId = event.params.tokenId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let dude = Dude.load(id);
  if (dude) {
    dude.name = event.params.name;
    dude.save();
  }
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleTransfer(event: Transfer): void {
  let tokenId = event.params.tokenId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let from = event.params.from.toHex();
  let to = event.params.to.toHex();

  let contract = Dudes.bind(event.address);

  if (from != zeroAddress || to != zeroAddress) {
    //don't query transfert from nobody to nobody

    if (from != zeroAddress) {
      //if not minting
      let currentOwner = Owner.load(from);
      if (currentOwner != null) {
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

      let dude = Dude.load(id);

      if (dude == null) {
        dude = new Dude(id);
        dude.tokenID = tokenId;
        dude.mintTime = event.block.timestamp;
        dude.tokenURI = contract.tokenURI(tokenId);
        dude.name = contract.getDudeName(tokenId);
        dude.souls = [];
      }

      dude.owner = newOwner.id;
      dude.save();

      newOwner.numTokens = newOwner.numTokens.plus(BigInt.fromI32(1));
      newOwner.save();
    } else {
      // burn
      //store.remove("General", id);
    }
  }
}

export function handleUnpaused(event: Unpaused): void {}
