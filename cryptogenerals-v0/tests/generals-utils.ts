import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  AssignedCastle,
  BioChanged,
  ExperienceGained,
  ExperienceSpent,
  GeneralCreated,
  LeveledUp,
  NameChanged,
  OwnershipTransferred,
  Quest,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer
} from "../generated/Generals/Generals"

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

export function createAssignedCastleEvent(
  generalId: BigInt,
  castleId: BigInt
): AssignedCastle {
  let assignedCastleEvent = changetype<AssignedCastle>(newMockEvent())

  assignedCastleEvent.parameters = new Array()

  assignedCastleEvent.parameters.push(
    new ethereum.EventParam(
      "generalId",
      ethereum.Value.fromUnsignedBigInt(generalId)
    )
  )
  assignedCastleEvent.parameters.push(
    new ethereum.EventParam(
      "castleId",
      ethereum.Value.fromUnsignedBigInt(castleId)
    )
  )

  return assignedCastleEvent
}

export function createBioChangedEvent(
  generalId: BigInt,
  bio: string
): BioChanged {
  let bioChangedEvent = changetype<BioChanged>(newMockEvent())

  bioChangedEvent.parameters = new Array()

  bioChangedEvent.parameters.push(
    new ethereum.EventParam(
      "generalId",
      ethereum.Value.fromUnsignedBigInt(generalId)
    )
  )
  bioChangedEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )

  return bioChangedEvent
}

export function createExperienceGainedEvent(
  generalId: BigInt,
  xpGained: BigInt,
  xpRemaining: BigInt
): ExperienceGained {
  let experienceGainedEvent = changetype<ExperienceGained>(newMockEvent())

  experienceGainedEvent.parameters = new Array()

  experienceGainedEvent.parameters.push(
    new ethereum.EventParam(
      "generalId",
      ethereum.Value.fromUnsignedBigInt(generalId)
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
  generalId: BigInt,
  xpSpent: BigInt,
  xpRemaining: BigInt
): ExperienceSpent {
  let experienceSpentEvent = changetype<ExperienceSpent>(newMockEvent())

  experienceSpentEvent.parameters = new Array()

  experienceSpentEvent.parameters.push(
    new ethereum.EventParam(
      "generalId",
      ethereum.Value.fromUnsignedBigInt(generalId)
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

export function createGeneralCreatedEvent(
  name: string,
  generalId: BigInt,
  generalCreated: ethereum.Tuple
): GeneralCreated {
  let generalCreatedEvent = changetype<GeneralCreated>(newMockEvent())

  generalCreatedEvent.parameters = new Array()

  generalCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  generalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "generalId",
      ethereum.Value.fromUnsignedBigInt(generalId)
    )
  )
  generalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "generalCreated",
      ethereum.Value.fromTuple(generalCreated)
    )
  )

  return generalCreatedEvent
}

export function createLeveledUpEvent(
  leveler: Address,
  generalId: BigInt,
  level: BigInt
): LeveledUp {
  let leveledUpEvent = changetype<LeveledUp>(newMockEvent())

  leveledUpEvent.parameters = new Array()

  leveledUpEvent.parameters.push(
    new ethereum.EventParam("leveler", ethereum.Value.fromAddress(leveler))
  )
  leveledUpEvent.parameters.push(
    new ethereum.EventParam(
      "generalId",
      ethereum.Value.fromUnsignedBigInt(generalId)
    )
  )
  leveledUpEvent.parameters.push(
    new ethereum.EventParam("level", ethereum.Value.fromUnsignedBigInt(level))
  )

  return leveledUpEvent
}

export function createNameChangedEvent(
  generalId: BigInt,
  name: string
): NameChanged {
  let nameChangedEvent = changetype<NameChanged>(newMockEvent())

  nameChangedEvent.parameters = new Array()

  nameChangedEvent.parameters.push(
    new ethereum.EventParam(
      "generalId",
      ethereum.Value.fromUnsignedBigInt(generalId)
    )
  )
  nameChangedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return nameChangedEvent
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

export function createQuestEvent(
  generalId: BigInt,
  xpGained: BigInt,
  xpTotal: BigInt
): Quest {
  let questEvent = changetype<Quest>(newMockEvent())

  questEvent.parameters = new Array()

  questEvent.parameters.push(
    new ethereum.EventParam(
      "generalId",
      ethereum.Value.fromUnsignedBigInt(generalId)
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
