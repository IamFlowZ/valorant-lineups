export const MAPS = [
    'any',
    'bind',
    'split',
    'fracture',
    'haven',
    'breeze',
    'icebox'
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
    ]
}

export const AGENTS = [
    'any',
    'jett',
    'sova',
    'viper',
    'kayo',
    'raze',
    'chamber'
]

export const ATKORDFND = [
    'either',
    'attack',
    'defense'
]

export const ROUND_STAGES = [
    'any',
    'early',
    'mid',
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
    ],
    'chamber': [
        ...abilityStarter,
    ]
}

export const ABILITIES = [
    'any',
    'shock-dart',
    'recon-dart',
    'boom-bot',
    'kayo-knife'
]

export const DIFFICULTY = [
    'any',1,2,3,4,5
]

export const USEFULNESS = [
    'any',1,2,3,4,5
]