export const MAPS = [
    'any',
    'ascent',
    'bind',
    'breeze',
    'fracture',
    'haven',
    'icebox',
    'split',
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
    'astra',
    'breach',
    'brimstone',
    'chamber',
    'cypher',
    'jett',
    'kayo',
    'killjoy',
    'omen',
    'phoenix',
    'raze',
    'reyna',
    'sage',
    'skye',
    'sova',
    'viper',
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
    'astra': [
      ...abilityStarter,
      'nova-pulse',
      'nebula',
      'gravity-well',
      'astral-form/cosmic-divide'
    ],
    'breach': [
      ...abilityStarter,
      'flashpoint',
      'fault-line',
      'aftershock',
      'rolling-thunder',
    ],
    'brimstone': [
      ...abilityStarter,
      'incendiary',
      'sky-smoke',
      'stim-beacon',
      'orbital-strike'
    ],
    'chamber': [
      ...abilityStarter,
      'headhunter',
      'rendezvous',
      'trademark',
      'tour-de-force'
    ],
    'cypher': [
      ...abilityStarter,
      'cyber-cage',
      'spy-cam',
      'trapwire',
      'neural-theft'
    ],
    'jett': [
      ...abilityStarter,
      'updraft',
      'tailwind',
      'cloudburst',
      'blade-storm'
    ],
    'kayo': [
        ...abilityStarter,
        'flash/drive',
        'zero/point',
        'frag/ment',
        'null/cmd'
    ],
    'killjoy': [
      ...abilityStarter,
      'alarmbot',
      'turret',
      'nanoswarm',
      'lockdown',
    ],
    'omen': [
      ...abilityStarter,
      'paranoia',
      'dark-cover',
      'shrouded-step',
      'from-the-shadows'
    ],
    'phoenix': [
      ...abilityStarter,
      'curveball',
      'hot-hands',
      'blaze',
      'run-it-back'
    ],
    'raze': [
      ...abilityStarter,
      'blast-pack',
      'paint-shells',
      'boom-bot',
      'show-stopper'
    ],
    'reyna': [
      ...abilityStarter,
      'devour',
      'dismiss',
      'leer',
      'empress'
    ],
    'sage': [
      ...abilityStarter,
      'slow-orb',
      'healing-orb',
      'barrier-orb',
      'resurrection'
    ],
    'skye': [
      ...abilityStarter,
      'trailblazer',
      'guiding-light',
      'regrowth',
      'seekers'
    ],
    'sova': [
      ...abilityStarter,
      'shock-bolt',
      'recon-bolt',
      'owl-drone',
      'hunters-fury'
    ],
    'viper': [
      ...abilityStarter,
      'poison-cloud',
      'snake-bite',
      'toxic-screen',
      'viper-pit',
    ],
    'yoru': [
      ...abilityStarter,
      'blindside',
      'gatecrash',
      'fakeout',
      'dimensional-drift'
    ],
}

export const DIFFICULTY = [
    'any',1,2,3,4,5
]

export const USEFULNESS = [
    'any',1,2,3,4,5
]