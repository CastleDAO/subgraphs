// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CastlesLootGenOne extends ethereum.SmartContract {
  static bind(address: Address): CastlesLootGenOne {
    return new CastlesLootGenOne("CastlesLootGenOne", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCapacity(tokenId: BigInt): BigInt {
    let result = super.call("getCapacity", "getCapacity(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBigInt();
  }

  try_getCapacity(tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCapacity",
      "getCapacity(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCastleType(tokenId: BigInt): string {
    let result = super.call(
      "getCastleType",
      "getCastleType(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toString();
  }

  try_getCastleType(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getCastleType",
      "getCastleType(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getDefense(tokenId: BigInt): BigInt {
    let result = super.call("getDefense", "getDefense(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBigInt();
  }

  try_getDefense(tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getDefense", "getDefense(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGoldGeneration(tokenId: BigInt): BigInt {
    let result = super.call(
      "getGoldGeneration",
      "getGoldGeneration(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getGoldGeneration(tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getGoldGeneration",
      "getGoldGeneration(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getName(tokenId: BigInt): string {
    let result = super.call("getName", "getName(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_getName(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getName", "getName(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getRarity(tokenId: BigInt): string {
    let result = super.call("getRarity", "getRarity(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_getRarity(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getRarity", "getRarity(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getRarityNumber(tokenId: BigInt): BigInt {
    let result = super.call(
      "getRarityNumber",
      "getRarityNumber(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getRarityNumber(tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRarityNumber",
      "getRarityNumber(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSkillAmount(tokenId: BigInt): BigInt {
    let result = super.call(
      "getSkillAmount",
      "getSkillAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getSkillAmount(tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSkillAmount",
      "getSkillAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSkillType(tokenId: BigInt): string {
    let result = super.call("getSkillType", "getSkillType(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_getSkillType(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getSkillType",
      "getSkillType(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getWarrior(tokenId: BigInt): string {
    let result = super.call("getWarrior", "getWarrior(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_getWarrior(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getWarrior", "getWarrior(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getWarriorName(tokenId: BigInt): string {
    let result = super.call(
      "getWarriorName",
      "getWarriorName(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toString();
  }

  try_getWarriorName(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getWarriorName",
      "getWarriorName(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lockedForLooters(): boolean {
    let result = super.call(
      "lockedForLooters",
      "lockedForLooters():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_lockedForLooters(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "lockedForLooters",
      "lockedForLooters():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lootAddress(): Address {
    let result = super.call("lootAddress", "lootAddress():(address)", []);

    return result[0].toAddress();
  }

  try_lootAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("lootAddress", "lootAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lootContract(): Address {
    let result = super.call("lootContract", "lootContract():(address)", []);

    return result[0].toAddress();
  }

  try_lootContract(): ethereum.CallResult<Address> {
    let result = super.tryCall("lootContract", "lootContract():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lootersPrice(): BigInt {
    let result = super.call("lootersPrice", "lootersPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lootersPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lootersPrice", "lootersPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  price(): BigInt {
    let result = super.call("price", "price():(uint256)", []);

    return result[0].toBigInt();
  }

  try_price(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("price", "price():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  traitsOf(tokenId: BigInt): string {
    let result = super.call("traitsOf", "traitsOf(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_traitsOf(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("traitsOf", "traitsOf(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class FlipLockedForLootersCall extends ethereum.Call {
  get inputs(): FlipLockedForLootersCall__Inputs {
    return new FlipLockedForLootersCall__Inputs(this);
  }

  get outputs(): FlipLockedForLootersCall__Outputs {
    return new FlipLockedForLootersCall__Outputs(this);
  }
}

export class FlipLockedForLootersCall__Inputs {
  _call: FlipLockedForLootersCall;

  constructor(call: FlipLockedForLootersCall) {
    this._call = call;
  }
}

export class FlipLockedForLootersCall__Outputs {
  _call: FlipLockedForLootersCall;

  constructor(call: FlipLockedForLootersCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintWithLootCall extends ethereum.Call {
  get inputs(): MintWithLootCall__Inputs {
    return new MintWithLootCall__Inputs(this);
  }

  get outputs(): MintWithLootCall__Outputs {
    return new MintWithLootCall__Outputs(this);
  }
}

export class MintWithLootCall__Inputs {
  _call: MintWithLootCall;

  constructor(call: MintWithLootCall) {
    this._call = call;
  }

  get lootId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintWithLootCall__Outputs {
  _call: MintWithLootCall;

  constructor(call: MintWithLootCall) {
    this._call = call;
  }
}

export class OwnerClaimCall extends ethereum.Call {
  get inputs(): OwnerClaimCall__Inputs {
    return new OwnerClaimCall__Inputs(this);
  }

  get outputs(): OwnerClaimCall__Outputs {
    return new OwnerClaimCall__Outputs(this);
  }
}

export class OwnerClaimCall__Inputs {
  _call: OwnerClaimCall;

  constructor(call: OwnerClaimCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class OwnerClaimCall__Outputs {
  _call: OwnerClaimCall;

  constructor(call: OwnerClaimCall) {
    this._call = call;
  }
}

export class OwnerWithdrawCall extends ethereum.Call {
  get inputs(): OwnerWithdrawCall__Inputs {
    return new OwnerWithdrawCall__Inputs(this);
  }

  get outputs(): OwnerWithdrawCall__Outputs {
    return new OwnerWithdrawCall__Outputs(this);
  }
}

export class OwnerWithdrawCall__Inputs {
  _call: OwnerWithdrawCall;

  constructor(call: OwnerWithdrawCall) {
    this._call = call;
  }
}

export class OwnerWithdrawCall__Outputs {
  _call: OwnerWithdrawCall;

  constructor(call: OwnerWithdrawCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get newBaseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetLootersPriceCall extends ethereum.Call {
  get inputs(): SetLootersPriceCall__Inputs {
    return new SetLootersPriceCall__Inputs(this);
  }

  get outputs(): SetLootersPriceCall__Outputs {
    return new SetLootersPriceCall__Outputs(this);
  }
}

export class SetLootersPriceCall__Inputs {
  _call: SetLootersPriceCall;

  constructor(call: SetLootersPriceCall) {
    this._call = call;
  }

  get newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetLootersPriceCall__Outputs {
  _call: SetLootersPriceCall;

  constructor(call: SetLootersPriceCall) {
    this._call = call;
  }
}

export class SetPublicPriceCall extends ethereum.Call {
  get inputs(): SetPublicPriceCall__Inputs {
    return new SetPublicPriceCall__Inputs(this);
  }

  get outputs(): SetPublicPriceCall__Outputs {
    return new SetPublicPriceCall__Outputs(this);
  }
}

export class SetPublicPriceCall__Inputs {
  _call: SetPublicPriceCall;

  constructor(call: SetPublicPriceCall) {
    this._call = call;
  }

  get newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPublicPriceCall__Outputs {
  _call: SetPublicPriceCall;

  constructor(call: SetPublicPriceCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
