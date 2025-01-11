import { Investigator } from '@/types/Investigator';

const occupationData = (occupation: string, investigator: Investigator) => {
    const { STR, CON, SIZ, DEX, APP, INT, POW, EDU } = investigator.characteristics;
    switch (occupation) {
        case "Antiquarian":
            return {
                skillPoints: (EDU*2),
                creditRating: [30, 70],
                fixedSkills: [
                    "Appraise",
                    "Art/Craft (any)",
                    "History",
                    "Library Use",
                    "Other Language",
                    "Spot Hidden",
                ],
                selectSkills: [
                    {
                        count: 1,
                        from: [
                            "Charm",
                            "Fast Talk",
                            "Intimidate",
                            "Persuade"
                        ]
                    },
                    {
                        count: 1,
                        from: "ANY"
                    }
                ]
            };
        case "Artist":
            return {
                skillPoints: (EDU*2 + Math.max(POW*2, DEX*2)),
                creditRating: [9, 50],
                fixedSkills: [
                    "Art/Craft (any)",
                    "Other Language",
                    "Psychology",
                    "Spot Hidden",
                ],
                selectSkills: [
                    {
                        count: 1,
                        from: [
                            "History",
                            "Natural World",
                        ]
                    },
                    {
                        count: 1,
                        from: [
                            "Charm",
                            "Fast Talk",
                            "Intimidate",
                            "Persuade"
                        ]
                    },
                    {
                        count: 1,
                        from: "ANY"
                    }
                ]
            };
        case "Athlete":
            return {
                skillPoints: (EDU*2 + Math.max(DEX*2, STR*2)),
                creditRating: [9, 70],
                fixedSkills: [
                    "Climb",
                    "Jump",
                    "Fighting (Brawl)",
                    "Ride",
                    "Swim",
                    "Throw"
                ],
                selectSkills:[
                    {
                        count: 1,
                        from: [
                            "Dodge",
                            "Drive Auto",
                            "Navigate",
                            "Pilot (any)"
                        ]
                    },
                    {
                        count: 1,
                        from: "ANY"
                    }
                ]
            };
        case "Author":
            return {
                skillPoints: (EDU*4),
                creditRating: [9, 70],
                fixedSkills: [
                    "Art/Craft (Literature)",
                    "History",
                    "Library Use",
                    "Other Language",
                    "Own Language",
                    "Psychology"
                ],
                selectSkills: [
                    {
                        count: 1,
                        from: [
                            "Natural World",
                            "Occult"
                        ]
                    },
                    {
                        count: 1,
                        from: "ANY"
                    }
                ]
            };
        case "Clergy":
            return {
                skillPoints: (EDU*4),
                creditRating: [9, 60],
                fixedSkills: [
                    "Accounting",
                    "History",
                    "Library Use",
                    "Listen",
                    "Other Language",
                    "Psychology"
                ],
                selectSkills: [
                    {
                        count: 1,
                        from: [
                            "Charm",
                            "Fast Talk",
                            "Intimidate",
                            "Persuade"
                        ]
                    },
                    {
                        count: 1,
                        from: "ANY"
                    }
                ]
            };
        case "Criminal":
            return {
                skillPoints: (EDU*2 + Math.max(DEX*2, STR*2)),
                creditRating: [5, 65],
                fixedSkills: [
                    "Psychology",
                    "Spot Hidden",
                    "Stealth",
                ],
                selectSkills: [
                    {
                        count: 1,
                        from: [
                            "Charm",
                            "Fast Talk",
                            "Intimidate",
                            "Persuade"
                        ]
                    },
                    {
                        count: 4,
                        from: [
                            "Appraise",
                            "Disguise",
                            "Fighting",
                            "Firearms",
                            "Locksmith",
                            "Mechanical Repair",
                            "Sleight of Hand",
                        ]
                    }
                ]
            };
        default:
            return {error: "Occupation not found"};
    }
}

export default occupationData;

