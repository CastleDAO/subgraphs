import {
  EGGSV1Approval as EGGSV1ApprovalEvent,
  EGGSV1ApprovalForAll as EGGSV1ApprovalForAllEvent,
  MintEgg as MintEggEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  EGGSV1Transfer as EGGSV1TransferEvent
} from "../generated/EGGSV1/EGGSV1"
import {
  EGGSV1Approval,
  EGGSV1ApprovalForAll,
  MintEgg,
  OwnershipTransferred,
  EGGSV1Transfer
} from "../generated/schema"

export function handleEGGSV1Approval(event: EGGSV1ApprovalEvent): void {
  let entity = new EGGSV1Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEGGSV1ApprovalForAll(
  event: EGGSV1ApprovalForAllEvent
): void {
  let entity = new EGGSV1ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintEgg(event: MintEggEvent): void {
  let entity = new MintEgg(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.wallet = event.params.wallet
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEGGSV1Transfer(event: EGGSV1TransferEvent): void {
  let entity = new EGGSV1Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
