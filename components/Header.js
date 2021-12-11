export default function Header() {
    return (
        <div style={{
            backgroundColor: 'rgb(var(--primary-color))',
            marginBottom: '0.5rem',
            borderRadius: '1rem',
            padding: '1rem 2.5rem',

            width: 'calc(100% - 15rem)',
        }}>
            <a onClick={() => router.push('/')}>
                <h1 className={styles.title}>
                    Valorant-Lineups.gg
                </h1>
            </a>
            <div>
            <form style={{display: 'flex', flexDirection: 'column'}} className="pure-form">
                <section style={{display: 'flex'}}>
                <Select item='map' itemState={map} setItemState={setMap} selectOptions={MAPS} />
                {/* add some logic to include locations based on map selection */}
                <Select item='agent' itemState={agent} setItemState={setAgent} selectOptions={AGENTS} />
                </section>
                { map !== 'any' && agent !== 'any' ?
                <>
                <section style={{display: 'flex'}}>
                    <Select item='attack' itemState={attack} setItemState={setAttack} selectOptions={ATKORDFND} />
                    <Select item='stage' itemState={stage} setItemState={setStage} selectOptions={ROUND_STAGES} />
                    { map !== 'any' ?
                    <Select item='location' itemState={location} setItemState={setLocation} selectOptions={mapLocations} />
                    : null
                    }
                </section>
                <section style={{display: 'flex'}}>
                    <Select item='utility' itemState={utilityOrWallbang} setItemState={setUtilOrWallbang} selectOptions={UTIL_OR_WALLBANG} />
                    { utilityOrWallbang !== 'wallbang' ?
                    <>
                    <Select item='utilityType' itemState={utilityType} setItemState={setUtilType} selectOptions={UTILITY_TYPE} />
                    { agent !== 'all' && abilities.length > 0 ? 
                        <Select item='ability' itemState={ability} setItemState={setAbility} selectOptions={abilities} />
                        : null
                    }
                    </>
                    : null
                    }
                </section>
                <section style={{display: 'flex'}}>
                    <Select item='difficulty' itemState={difficulty} setItemState={setDifficulty} selectOptions={DIFFICULTY} />
                    <Select item='usefulness' itemState={usefulness} setItemState={setUsefulness} selectOptions={USEFULNESS} />
                </section>
                </>
                : null}
            </form>
            </div>
        </div>
    )
}