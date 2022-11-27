import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
  beforeEach,
  logStore,
  createMockedFunction,
} from "matchstick-as/assembly/index";
import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { Heroe, Quest } from "../generated/schema";
import { Approval } from "../generated/DefiHeroes/DefiHeroes";
import {
  handleApproval,
  handleExperienceGained,
  handleLeveledUp,
  handleQuest,
  handleTransfer,
} from "../src/defi-heroes";
import {
  createExperienceGainedEvent,
  createLeveledUpEvent,
  createQuestEvent,
  createTransferEvent,
} from "./defi-heroes-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Handle Experience Gained", () => {
  beforeAll(() => {
    const eventAddress = Address.fromString(
      "0x8ec75bc963181489d7fc1d892f687b8b0987d9ec"
    );
    const hexAddress = eventAddress.toHex();
    const heroId = hexAddress + "_1";

    let hero = new Heroe(heroId);

    hero.tokenID = BigInt.fromI32(1);
    hero.owner = "0x0";
    hero.mintTime = BigInt.fromI32(1);
    hero.tokenURI = "xxx";
    hero.level = BigInt.fromI32(1);
    hero.speed = BigInt.fromI32(5);
    hero.intelligence = BigInt.fromI32(5);
    hero.strength = BigInt.fromI32(5);
    hero.abilityPower = BigInt.fromI32(5);
    hero.defense = BigInt.fromI32(5);
    hero.agility = BigInt.fromI32(5);
    hero.magicResistance = BigInt.fromI32(5);
    hero.constitution = BigInt.fromI32(5);
    hero.experience = BigInt.fromI32(10);

    hero.save();
  });

  test("Update Hero experience", () => {
    const eventAddress = Address.fromString(
      "0x8ec75bc963181489d7fc1d892f687b8b0987d9ec"
    );
    const hexAddress = eventAddress.toHex();
    const heroId = hexAddress + "_1";

    //logStore();

    let newExperienceGainedEvent = createExperienceGainedEvent(
      BigInt.fromI32(1),
      BigInt.fromI32(20),
      BigInt.fromI32(100),
      eventAddress
    );

    //logStore();

    handleExperienceGained(newExperienceGainedEvent);
    assert.fieldEquals("Heroe", heroId, "speed", "5");
    assert.fieldEquals("Heroe", heroId, "experience", "30");
  });
});

describe("Hero level up", () => {
  beforeAll(() => {
    const eventAddress = Address.fromString(
      "0x8ec75bc963181489d7fc1d892f687b8b0987d9ec"
    );
    const hexAddress = eventAddress.toHex();
    const heroId = hexAddress + "_1";

    let hero = new Heroe(heroId);

    hero.tokenID = BigInt.fromI32(1);
    hero.owner = "0x0";
    hero.mintTime = BigInt.fromI32(1);
    hero.tokenURI = "xxx";
    hero.level = BigInt.fromI32(1);
    hero.speed = BigInt.fromI32(5);
    hero.intelligence = BigInt.fromI32(5);
    hero.strength = BigInt.fromI32(5);
    hero.abilityPower = BigInt.fromI32(5);
    hero.defense = BigInt.fromI32(5);
    hero.agility = BigInt.fromI32(5);
    hero.magicResistance = BigInt.fromI32(5);
    hero.constitution = BigInt.fromI32(5);
    hero.experience = BigInt.fromI32(10);

    hero.save();
  });

  test("Update Hero level", () => {
    const eventAddress = Address.fromString(
      "0x8ec75bc963181489d7fc1d892f687b8b0987d9ec"
    );
    const hexAddress = eventAddress.toHex();
    const heroId = hexAddress + "_1";

    let newLevelUp = createLeveledUpEvent(
      Address.fromString("0x8ec75bc963181489d7fc1d892f687b8b0987d9ec"),
      BigInt.fromI32(1),
      BigInt.fromI32(2),
      eventAddress
    );
    
    // We need to mock the "warriors" function since is called by handleLevelUp function
    const ethValueBigInt = ethereum.Value.fromSignedBigInt(BigInt.fromI32(2));
    const tupleValue = ethereum.Tuple.from([
      ethValueBigInt,
      ethValueBigInt,
      ethValueBigInt,
      ethValueBigInt,
      ethValueBigInt,
      ethValueBigInt,
      ethValueBigInt,
      ethValueBigInt,
      ethValueBigInt,
      ethValueBigInt,
    ]);

    // We use tuple to try to create the object struct returned by the warriors call
    // It's not compiling right now, please see: https://github.com/LimeChain/matchstick/issues/380
    createMockedFunction(
      Address.fromString("0x8ec75bc963181489d7fc1d892f687b8b0987d9ec"),
      "warriors",
      "warriors(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)"
    ).returns([ethereum.Value.fromTuple(tupleValue)]);

    assert.fieldEquals("Heroe", heroId, "level", "1");
    logStore();
    handleLeveledUp(newLevelUp);
    assert.fieldEquals("Heroe", heroId, "level", "2");
  });
});

describe("Handle Quest", () => {
  beforeAll(() => {
    let quest = new Quest("1");

    quest.tokenID = BigInt.fromI32(1);
    quest.date = BigInt.fromI32(1);
    quest.xpEarned = BigInt.fromI32(20);

    quest.save();
  });

  test("Create Quest", () => {
    let newQuest = createQuestEvent(
      BigInt.fromI32(2), //token id
      BigInt.fromI32(10), //xp gained
      BigInt.fromI32(20) //xp total
    );

    handleQuest(newQuest);

    logStore();
    assert.fieldEquals("Quest", "2", "xpEarned", "0");
    assert.fieldEquals("Quest", "2", "xpEarned", "20");
  });
});

describe("Handle transfer", () => {
  test("Hero creation", () => {
    let newHeroTransfer = createTransferEvent(
      Address.fromString("0x0000000000000000000000000000000000000000"),
      Address.fromString("0x44E8DEd5ba74356a42fE4FA6C698499309a08589"),
      BigInt.fromI32(10)
    );

    assert.notInStore("Heroe", "10");
    handleTransfer(newHeroTransfer);
    assert.fieldEquals("Heroe", "10", "id", "10");
  });

  test("Update Hero experience", () => {
    let newExperienceGainedEvent = createExperienceGainedEvent(
      BigInt.fromI32(1),
      BigInt.fromI32(20),
      BigInt.fromI32(100),
      Address.fromString("0x8ec75bc963181489d7fc1d892f687b8b0987d9ec")
    );

    assert.fieldEquals(
      "Heroe",
      "0x8ec75bc963181489d7fc1d892f687b8b0987d9ec_1",
      "experience",
      "10"
    );
    handleExperienceGained(newExperienceGainedEvent);
    assert.fieldEquals(
      "Heroe",
      "0x8ec75bc963181489d7fc1d892f687b8b0987d9ec_1",
      "experience",
      "30"
    );
  });
});
