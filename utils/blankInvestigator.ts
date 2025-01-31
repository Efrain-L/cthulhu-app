import { Investigator } from "@/types/Investigator";

export function getBlankInvestigator(): Investigator {
  return {
    fileName: '',
    details: {
      name: '',
      occupation: '',
      age: 0,
      pronouns: '',
      residence: '',
      birthplace: '',
      imagePath: ''
    },
    characteristics: {
      STR: 0,
      CON: 0,
      SIZ: 0,
      DEX: 0,
      APP: 0,
      INT: 0,
      POW: 0,
      EDU: 0
    },
    attributes: {
      hitPoints: 0,
      maxHitPoints: 0,
      magicPoints: 0,
      maxMagicPoints: 0,
      luck: 0,
      startingLuck: 0,
      sanity: 0,
      startingSanity: 0,
      maxSanity: 0,
      tempInsanity: false,
      indefInsanity: false,
      majorWound: false,
      unconscious: false,
      dying: false,
      move: 0,
      build: 0,
      damageBonus: ''
    },
    skills: {
      accounting: 1,
      anthropology: 1,
      appraise: 5,
      archaeology: 1,
      artCraft: {
        Default: 5
      },
      charm: 15,
      climb: 20,
      creditRating: 0,
      cthulhuMythos: 0,
      disguise: 5,
      dodge: 0,
      driveAuto: 20,
      electricalRepair: 10,
      fastTalk: 5,
      fighting: {
        Brawl: 25
      },
      firearms: {
        Handgun: 20,
        RifleShotgun: 25
      },
      firstAid: 30,
      history: 5,
      intimidate: 15,
      jump: 20,
      languageOther: {
        Default: 1
      },
      languageOwn: 0,
      law: 5,
      libraryUse: 20,
      listen: 20,
      locksmith: 1,
      mechanicalRepair: 10,
      medicine: 1,
      naturalWorld: 10,
      navigate: 10,
      occult: 5,
      persuade: 10,
      pilot: {
        Default: 1
      },
      psychoanalysis: 1,
      psychology: 10,
      ride: 5,
      science: {
        Default: 1
      },
      sleightOfHand: 10,
      spotHidden: 25,
      stealth: 20,
      survival: {
        Default: 10
      },
      swim: 20,
      throw: 20,
      track: 10
    },
    combat: [
      {
        weapon: 'Brawl',
        skill: 0,
        damage: '1d3+db',
        numAttacks: 1
      }
    ],
    backstory: {
      personalDescription: '',
      ideologyBeliefs: '',
      significantPeople: '',
      meaningfulLocations: '',
      treasuredPossessions: '',
      traits: '',
      injuriesScars: '',
      phobiasManias: '',
      arcaneTomesSpells: '',
      encountersWithStrangeEntities: ''
    },
    gearPossessions: [],
    wealth: {
      spendingLevel: 0.0,
      cash: 0.0,
      monetaryAssets: 0.0,
      assets: ''
    }
  };
}
