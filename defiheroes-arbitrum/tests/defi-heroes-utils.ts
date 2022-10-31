import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  ExperienceGained,
  ExperienceSpent,
  LeveledUp,
  NFTCreated,
  OwnershipTransferred,
  Paused,
  Quest,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer,
  Unpaused,
  WarriorCreated
} from "../generated/DefiHeroes/DefiHeroes"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createExperienceGainedEvent(
  tokenId: BigInt,
  xpGained: BigInt,
  xpRemaining: BigInt
): ExperienceGained {
  let experienceGainedEvent = changetype<ExperienceGained>(newMockEvent())

  experienceGainedEvent.parameters = new Array()

  experienceGainedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  experienceGainedEvent.parameters.push(
    new ethereum.EventParam(
      "xpGained",
      ethereum.Value.fromUnsignedBigInt(xpGained)
    )
  )
  experienceGainedEvent.parameters.push(
    new ethereum.EventParam(
      "xpRemaining",
      ethereum.Value.fromUnsignedBigInt(xpRemaining)
    )
  )

  return experienceGainedEvent
}

export function createExperienceSpentEvent(
  tokenId: BigInt,
  xpSpent: BigInt,
  xpRemaining: BigInt
): ExperienceSpent {
  let experienceSpentEvent = changetype<ExperienceSpent>(newMockEvent())

  experienceSpentEvent.parameters = new Array()

  experienceSpentEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  experienceSpentEvent.parameters.push(
    new ethereum.EventParam(
      "xpSpent",
      ethereum.Value.fromUnsignedBigInt(xpSpent)
    )
  )
  experienceSpentEvent.parameters.push(
    new ethereum.EventParam(
      "xpRemaining",
      ethereum.Value.fromUnsignedBigInt(xpRemaining)
    )
  )

  return experienceSpentEvent
}

export function createLeveledUpEvent(
  leveler: Address,
  tokenId: BigInt,
  level: BigInt
): LeveledUp {
  let leveledUpEvent = changetype<LeveledUp>(newMockEvent())

  leveledUpEvent.parameters = new Array()

  leveledUpEvent.parameters.push(
    new ethereum.EventParam("leveler", ethereum.Value.fromAddress(leveler))
  )
  leveledUpEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  leveledUpEvent.parameters.push(
    new ethereum.EventParam("level", ethereum.Value.fromUnsignedBigInt(level))
  )

  return leveledUpEvent
}

export function createNFTCreatedEvent(tokenId: BigInt): NFTCreated {
  let nftCreatedEvent = changetype<NFTCreated>(newMockEvent())

  nftCreatedEvent.parameters = new Array()

  nftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftCreatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createQuestEvent(
  tokenId: BigInt,
  xpGained: BigInt,
  xpTotal: BigInt
): Quest {
  let questEvent = changetype<Quest>(newMockEvent())

  questEvent.parameters = new Array()

  questEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  questEvent.parameters.push(
    new ethereum.EventParam(
      "xpGained",
      ethereum.Value.fromUnsignedBigInt(xpGained)
    )
  )
  questEvent.parameters.push(
    new ethereum.EventParam(
      "xpTotal",
      ethereum.Value.fromUnsignedBigInt(xpTotal)
    )
  )

  return questEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createWarriorCreatedEvent(
  tokenId: BigInt,
  warriorCreated: ethereum.Tuple
): WarriorCreated {
  let warriorCreatedEvent = changetype<WarriorCreated>(newMockEvent())

  warriorCreatedEvent.parameters = new Array()

  warriorCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  warriorCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "warriorCreated",
      ethereum.Value.fromTuple(warriorCreated)
    )
  )

  return warriorCreatedEvent
}
