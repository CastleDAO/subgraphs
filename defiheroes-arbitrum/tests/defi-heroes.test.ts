import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
  createMockedFunction,
} from "matchstick-as/assembly/index";
import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { Heroes } from "../generated/schema";
import { Approval } from "../generated/DefiHeroes/DefiHeroes";
import { handleApproval, handleTransfer } from "../src/defi-heroes";
import { createApprovalEvent, createTransferEvent } from "./defi-heroes-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

const contractAddress = Address.fromString(
  "0x8ec75bc963181489d7fc1d892f687b8b0987d9ec"
);

describe("Defi heroes", () => {
  beforeAll(() => {
    let owner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let to = Address.fromString("0x0000000000000000000000000000000000000002");
    let tokenId = BigInt.fromI32(234);
    let newTransferEvent = createTransferEvent(owner, to, tokenId);
    handleTransfer(newTransferEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Heroes created and stored", () => {
    assert.entityCount("Heroes", 1);
    let bigIntParam = BigInt.fromString("1");

    // Mock functions
    createMockedFunction(
      contractAddress,
      "tokenURI",
      "tokenURI(uint256):(string)"
    )
      .withArgs([ethereum.Value.fromSignedBigInt(bigIntParam)])
      .returns([ethereum.Value.fromString("Test")]);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Heroes",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "owner",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "Heroes",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "approved",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "Heroes",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "tokenId",
      "234"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
