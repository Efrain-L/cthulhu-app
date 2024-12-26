export interface Investigator {
    details: {
      name: string;
      occupation: string;
      age: number;
      pronouns: string;
      residence: string;
      birthplace: string;
      imagePath: string;
    };
    characteristics: {
      STR: number;
      CON: number;
      SIZ: number;
      DEX: number;
      APP: number;
      INT: number;
      POW: number;
      EDU: number;
    };
    attributes: {
      hitPoints: number;
      maxHitPoints: number;
      magicPoints: number;
      maxMagicPoints: number;
      luck: number;
      startingLuck: number;
      sanity: number;
      startingSanity: number;
      maxSanity: number;
      tempInsanity: boolean;
      indefInsanity: boolean;
      majorWound: boolean;
      unconscious: boolean;
      dying: boolean;
      move: number;
      build: number;
      damageBonus: string;
    };
    skills: {
      accounting: number;
      anthropology: number;
      appraise: number;
      archaeology: number;
      artCraft: {
        [key: string]: number;
      };
      charm: number;
      climb: number;
      creditRating: number;
      cthulhuMythos: number;
      disguise: number;
      dodge: number;
      driveAuto: number;
      electricalRepair: number;
      fastTalk: number;
      fighting: {
        [key: string]: number;
      };
      firearms: {
        [key: string]: number;
      };
      firstAid: number;
      history: number;
      intimidate: number;
      jump: number;
      languageOther: {
        [key: string]: number;
      };
      languageOwn: number;
      law: number;
      libraryUse: number;
      listen: number;
      locksmith: number;
      mechanicalRepair: number;
      medicine: number;
      naturalWorld: number;
      navigate: number;
      occult: number;
      persuade: number;
      pilot: {
        [key: string]: number;
      };
      psychoanalysis: number;
      psychology: number;
      ride: number;
      science: {
        [key: string]: number;
      };
      sleightOfHand: number;
      spotHidden: number;
      stealth: number;
      survival: {
        [key: string]: number;
      };
      swim: number;
      throw: number;
      track: number;
    };
    combat: {
      weapon: string;
      skill: number;
      damage: string;
      numAttacks: number;
      range?: number;
      ammo?: number;
      malfunction?: number;
    }[];
    backstory: {
      personalDescription: string;
      ideologyBeliefs: string;
      significantPeople: string;
      meaningfulLocations: string;
      treasuredPossessions: string;
      traits: string;
      injuriesScars: string;
      phobiasManias: string;
      arcaneTomesSpells: string;
      encountersWithStrangeEntities: string;
    };
    gearPossessions: string[];
    wealth: {
      spendingLevel: number;
      cash: number;
      monetaryAssets: number;
      assets: string;
    };
  }
  