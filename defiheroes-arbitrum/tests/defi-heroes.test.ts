import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
  beforeEach,
  logStore
} from "matchstick-as/assembly/index";
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Heroe, Quest } from "../generated/schema";
import { Approval } from "../generated/DefiHeroes/DefiHeroes";
import {
  handleApproval,
  handleExperienceGained,
  handleLeveledUp,
  handleQuest,
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
    let hero = new Heroe("1");

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
    let newExperienceGainedEvent = createExperienceGainedEvent(
      BigInt.fromI32(1),
      BigInt.fromI32(20),
      BigInt.fromI32(100)
    );

    
    
    // logStore()
    assert.fieldEquals("Heroe", "1", "experience", "10");
    handleExperienceGained(newExperienceGainedEvent);
    assert.fieldEquals("Heroe", "1", "experience", "30");
  });
});

describe("Hero level up", () => {
  beforeAll(() => {
    let hero = new Heroe("1");

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
    let newLevelUp = createLeveledUpEvent(
      Address.fromString("0xAfd1520D472dE239A182cb71625B2e3af6CA67Eb"),
      BigInt.fromI32(1),
      BigInt.fromI32(2)
    );

    logStore()
    handleLeveledUp(newLevelUp);
    logStore()
    
    
    assert.fieldEquals("Heroe", "1", "level", "1");
    assert.fieldEquals("Heroe", "1", "level", "2");
  });
});

describe("Handle Quest", () => {
  beforeAll(() => {
    let quest = new Quest("1");

    quest.tokenID = BigInt.fromI32(1);
    quest.date = BigInt.fromI32(1)
    quest.xpEarned = BigInt.fromI32(20)

    quest.save();
  });

  test("Create Quest", () => {
    let newQuest = createQuestEvent(
      BigInt.fromI32(1),
      BigInt.fromI32(10),
      BigInt.fromI32(20)
    );

    
    handleQuest(newQuest);
    
    // logStore()
    assert.fieldEquals("Quest", "1", "xpEarned", "0");
    assert.fieldEquals("Quest", "1", "xpEarned", "20");
  });
});

describe("Handle transfer", () => {
  

  test("Update Hero experience", () => {
    let newExperienceGainedEvent = createExperienceGainedEvent(
      BigInt.fromI32(1),
      BigInt.fromI32(20),
      BigInt.fromI32(100)
    );

    
    
    // logStore()
    assert.fieldEquals("Heroe", "1", "experience", "10");
    handleExperienceGained(newExperienceGainedEvent);
    assert.fieldEquals("Heroe", "1", "experience", "30");
  });
});

