/**
 * This file contains the list of available occupations to choose from.
 */

export const occupations = [
  {
    name: 'Antiquarian',
    occupationSkillPoints: [
      { operation: 'MUL', operands: ["EDU", 4] }
    ],
    creditRating: [30, 70],
    occupationSkills: [
      "Appraise",
      "Art/Craft (any)",
      "History",
      "Library Use",
      "Other Language",
      "Spot Hidden",
      {
        "count": 1,
        "skills": [
          "Charm",
          "Fast Talk",
          "Intimidate",
          "Persuade"
        ],
      },
      {
        "count": 1,
        "skills": "ANY"
      }
    ],
  },
  {
    name: "Artist",
    occupationSkillPoints: [
      {
        operation: "ADD",
        operands: [
          { operation: "MUL", operands: ["EDU", 2] },
          {
            operation: "OR",
            operands: [
              { operation: "MUL", operands: ["POW", 2] },
              { operation: "MUL", operands: ["DEX", 2] }
            ]
          }
        ]
      }
    ],
    creditRating: [9, 50],
    occupationSkills: [
      "Art/Craft (any)",
      "Psychology",
      "Spot Hidden",
      {
        "count": 1,
        "skills": [
          "History",
          "Natural World",
        ]
      },
      {
        "count": 1,
        "skills": [
          "Charm",
          "Fast Talk",
          "Intimidate",
          "Persuade"
        ],
      },
      {
        "count": 2,
        "skills": "ANY"
      }
    ]
  },
  {

  },
];