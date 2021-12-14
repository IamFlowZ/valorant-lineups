export const MAPS = [
    'any',
    'bind',
    'split',
    'fracture',
    'haven',
    'breeze',
    'icebox',
    'ascent',
]

const basicLocations = [
    'any',
    'a',
    'b'
]

export const MAP_LOCATIONS = {
    'bind': [
        ...basicLocations,
        'a-site/triple-stack',
        'b-site/hooka',
    ],
    'split': [
        ...basicLocations,
    ],
    'fracture': [
      ...basicLocations,
    ],
    'haven': [
      ...basicLocations,
      'c',
      'garage',
    ],
    'breeze': [
      ...basicLocations,
    ],
    'icebox': [
      ...basicLocations,
    ],
    'ascent': [
      ...basicLocations,
    ],
}

export const AGENTS = [
    'any',
    'jett',
    'sova',
    'viper',
    'kayo',
    'chamber',
    'astra',
    'skye',
    'cypher',
    'killjoy',
    'omen',
    'breach',
    'phoenix',
    'raze',
    'reyna',
    'sage',
    'brimstone',
    'yoru'
]

export const ATKORDFND = [
    'either',
    'attack',
    'defense'
]

export const ROUND_STAGES = [
    'any',
    'early-round',
    'mid-round',
    'post-plant'
]

export const UTIL_OR_WALLBANG = [
    'either',
    'utility',
    'wallbang'
]

export const UTILITY_TYPE = [
    'any',
    'smoke',
    'flash',
    'damage-dealing',
    'information-gathering'
]

const abilityStarter = [
    'any'
]

export const ABILITY_MAPPING = {
    'jett': [],
    'sova': [
        ...abilityStarter,
        'shock-dart',
        'recon-dart'
    ],
    'viper': [
        ...abilityStarter,
        'poison'
    ],
    'kayo': [
        ...abilityStarter,
        'molly'
    ],
    'raze': [
      ...abilityStarter,
      'boom-bot',
    ],
    'chamber': [
      ...abilityStarter,
    ],
    'astra': [
      ...abilityStarter,
    ],
    'skye': [
      ...abilityStarter,
    ],
    'cypher': [
      ...abilityStarter,
    ],
    'killjoy': [
      ...abilityStarter,
    ],
    'omen': [
      ...abilityStarter,
    ],
    'breach': [
      ...abilityStarter,
    ],
    'phoenix': [
      ...abilityStarter,
    ],
    'raze': [
      ...abilityStarter,
    ],
    'reyna': [
      ...abilityStarter,
    ],
    'sage': [
      ...abilityStarter,
    ],
    'brimstone': [
      ...abilityStarter,
    ],
    'yoru': [
      ...abilityStarter,
    ],
}

export const DIFFICULTY = [
    'any',1,2,3,4,5
]

export const USEFULNESS = [
    'any',1,2,3,4,5
]