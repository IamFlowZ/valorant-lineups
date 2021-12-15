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
    'b',
    'mid',
    'a-site',
    'b-site',
    'a-main',
    'b-main',
    'defense-spawn',
    'attack-spawn',
]

export const MAP_LOCATIONS = {
    'bind': [
        ...basicLocations,
        'a-site/triple-stack',
        'hooka',
    ],
    'split': [
        ...basicLocations,
        'heaven',
        'rafters',
        'hell',
        'vents',
        'sewers',
        'market',
    ],
    'fracture': [
      ...basicLocations,
      'canteen',
      'dish',
      'drop',
      'arcade',
      'sand',
    ],
    'haven': [
      ...basicLocations,
      'c',
      'garage',
      'a-link',
      'c-link'
    ],
    'breeze': [
      ...basicLocations,
      'double-doors',
      'elbow',
      'nest',
      'bridge'
    ],
    'icebox': [
      ...basicLocations,
      'kitchen',
      'danger',
      'snowman',
      'belt',
      'maze',
      'pipes',
    ],
    'ascent': [
      ...basicLocations,
      'tree',
      'tiles',
      'pizza',
      'market',
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
        'snake-bite',
        'toxic-screen',
        'viper-pit',
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