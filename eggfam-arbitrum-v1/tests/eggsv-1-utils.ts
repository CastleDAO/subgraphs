import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  EGGSV1Approval,
  EGGSV1ApprovalForAll,
  MintEgg,
  OwnershipTransferred,
  EGGSV1Transfer
} from "../generated/EGGSV1/EGGSV1"

export function createEGGSV1ApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): EGGSV1Approval {
  let eggsv1ApprovalEvent = changetype<EGGSV1Approval>(newMockEvent())

  eggsv1ApprovalEvent.parameters = new Array()

  eggsv1ApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  eggsv1ApprovalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  eggsv1ApprovalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return eggsv1ApprovalEvent
}

export function createEGGSV1ApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): EGGSV1ApprovalForAll {
  let eggsv1ApprovalForAllEvent = changetype<EGGSV1ApprovalForAll>(
    newMockEvent()
  )

  eggsv1ApprovalForAllEvent.parameters = new Array()

  eggsv1ApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  eggsv1ApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  eggsv1ApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return eggsv1ApprovalForAllEvent
}

export function createMintEggEvent(wallet: Address, tokenId: BigInt): MintEgg {
  let mintEggEvent = changetype<MintEgg>(newMockEvent())

  mintEggEvent.parameters = new Array()

  mintEggEvent.parameters.push(
    new ethereum.EventParam("wallet", ethereum.Value.fromAddress(wallet))
  )
  mintEggEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return mintEggEvent
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

export function createEGGSV1TransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): EGGSV1Transfer {
  let eggsv1TransferEvent = changetype<EGGSV1Transfer>(newMockEvent())

  eggsv1TransferEvent.parameters = new Array()

  eggsv1TransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  eggsv1TransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  eggsv1TransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return eggsv1TransferEvent
}
