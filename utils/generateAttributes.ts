import { Investigator } from "@/types/Investigator";

/**
 * This function will generate the attributes, and update the investigator object with the new values.
 * @param investigator reference to the investigator object
 */
export default function generateAttributes(investigator: Investigator) {
    const { STR, CON, SIZ, DEX, APP, INT, POW, EDU } = investigator.characteristics;
    const age = investigator.details.age;

    const hitPoints = Math.floor((SIZ + CON) / 10);
    const magicPoints = Math.floor(POW / 5);
    const sanity = POW;
    const luck = (age <= 19) ? Math.max(roll3d6(), roll3d6())*5 : roll3d6()*5;

    let move: number;
    if (STR < SIZ && DEX < SIZ) {
        move = 7;
    }
    else if (STR > SIZ && DEX > SIZ) {
        move = 9;
    }
    else {
        move = 8;
    }
    move -= moveDeduction(age);
    const { db, build } = combatValues(STR, SIZ);

    // save the new values to the investigator object
    investigator.attributes = {
        hitPoints,
        maxHitPoints: hitPoints,
        magicPoints,
        maxMagicPoints: magicPoints,
        luck,
        startingLuck: luck,
        sanity,
        startingSanity: sanity,
        maxSanity: 99,
        tempInsanity: false,
        indefInsanity: false,
        majorWound: false,
        unconscious: false,
        dying: false,
        move,
        build,
        damageBonus: db,
    };
}

const roll3d6 = () => {
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total += Math.floor(Math.random() * 6) + 1;
    }
    return total;
}

const moveDeduction = (age: number) => {
    if (age >= 80) {
        return 5;
    }
    else if (age >= 70) {
        return 4;
    }
    else if (age >= 60) {
        return 3;
    }
    else if (age >= 50) {
        return 2;
    }
    else if (age >= 40) {
        return 1;
    }
    else {
        return 0;
    }
}

const combatValues = (STR: number, SIZ: number) => {
    const total = STR + SIZ;
    let db: string, build: number;
    if (total <= 64) {
        db = "-2";
        build = -2;
    }
    else if (total <= 84) {
        db = "-1";
        build = -1;
    }
    else if (total <= 124) {
        db = "0";
        build = 0;
    }
    else if (total <= 164) {
        db = "+1d4";
        build = 1;
    }
    else {
        db = "+1d6";
        build = 2;
    }
    return { db, build };
}