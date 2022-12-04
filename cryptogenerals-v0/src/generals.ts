import { BigInt } from "@graphprotocol/graph-ts";
import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  AssignedCastle as AssignedCastleEvent,
  BioChanged as BioChangedEvent,
  ExperienceGained as ExperienceGainedEvent,
  ExperienceSpent as ExperienceSpentEvent,
  GeneralCreated as GeneralCreatedEvent,
  LeveledUp as LeveledUpEvent,
  NameChanged as NameChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Quest as QuestEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Transfer as TransferEvent,
  Generals,
} from "../generated/Generals/Generals";

import { Owner, Quest, General } from "../generated/schema";

let zeroAddress = "0x0000000000000000000000000000000000000000";

export function handleApproval(event: ApprovalEvent): void {}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {}

export function handleAssignedCastle(event: AssignedCastleEvent): void {}

export function handleBioChanged(event: BioChangedEvent): void {
  let tokenId = event.params.generalId;
  let id = event.address.toHex() + "_" + tokenId.toString();

  let general = General.load(id);
  if (general) {
    general.bio = event.params.bio;
    general.save();
  }
}

export function handleExperienceGained(event: ExperienceGainedEvent): void {
  let tokenId = event.params.generalId;
  let id = event.address.toHex() + "_" + tokenId.toString();

  let general = General.load(id);
  if (general) {
    let contract = Generals.bind(event.address);

    general.experience = contract.experience(tokenId);
    general.save();
  }
}

export function handleExperienceSpent(event: ExperienceSpentEvent): void {
  let tokenId = event.params.generalId;
  let id = event.address.toHex() + "_" + tokenId.toString();

  let general = General.load(id);
  if (general) {
    let contract = Generals.bind(event.address);

    general.experience = contract.experience(tokenId);
    general.save();
  }
}

export function handleGeneralCreated(event: GeneralCreatedEvent): void {}

export function handleLeveledUp(event: LeveledUpEvent): void {
  let tokenId = event.params.generalId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let general = General.load(id);

  let contract = Generals.bind(event.address);

  if (general) {
    const entity = contract.generals(tokenId);
    general.speed = entity.getSpeed();
    general.intelligence = entity.getIntelligence();
    general.strength = entity.getStrength();
    general.abilityPower = entity.getAbilityPower();
    general.defense = entity.getDefense();
    general.agility = entity.getAgility();
    general.magicResistance = entity.getAgility();
    general.constitution = entity.getConstitution();
    general.charisma = entity.getCharisma();
    general.level = entity.getLevel();
    general.experience = contract.experience(tokenId);
    general.save();
  }
}

export function handleNameChanged(event: NameChangedEvent): void {
  let tokenId = event.params.generalId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let general = General.load(id);
  if (general) {
    general.name = event.params.name;
    general.save();
  }
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {}

export function handleQuest(event: QuestEvent): void {
  let entity = new Quest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.generalId;
  entity.xpGained = event.params.xpGained;
  entity.xpTotal = event.params.xpTotal;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {}

export function handleRoleGranted(event: RoleGrantedEvent): void {}

export function handleRoleRevoked(event: RoleRevokedEvent): void {}

export function handleTransfer(event: TransferEvent): void {
  let tokenId = event.params.tokenId;
  let id = event.address.toHex() + "_" + tokenId.toString();
  let from = event.params.from.toHex();
  let to = event.params.to.toHex();

  let contract = Generals.bind(event.address);

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

      let general = General.load(id);

      if (general == null) {
        general = new General(id);
        general.tokenID = tokenId;
        general.mintTime = event.block.timestamp;
        general.tokenURI = contract.tokenURI(tokenId);

        const entity = contract.generals(tokenId);
        general.speed = entity.getSpeed();
        general.intelligence = entity.getIntelligence();
        general.strength = entity.getStrength();
        general.abilityPower = entity.getAbilityPower();
        general.charisma = entity.getCharisma();
        general.defense = entity.getDefense();
        general.agility = entity.getAgility();
        general.magicResistance = entity.getAgility();
        general.constitution = entity.getConstitution();
        general.level = entity.getLevel();
        general.experience = contract.experience(tokenId);
        general.bio = '';
        general.name = entity.getName();
      }

      general.owner = newOwner.id;
      general.save();

      newOwner.numTokens = newOwner.numTokens.plus(BigInt.fromI32(1));
      newOwner.save();
    } else {
      // burn
      //store.remove("General", id);
    }
  }
}
