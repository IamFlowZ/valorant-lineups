import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import aws from 'aws-sdk';
import Head from 'next/head'
import Image from 'next/image'
// import sqlite from 'better-sqlite3'
import styles from '../styles/Home.module.css'
import Lineup from '../components/Lineup'
import Select from '../components/Select'
import { 
  ABILITY_MAPPING,
  AGENTS,
  ATKORDFND,
  MAPS,
  MAP_LOCATIONS,
  ROUND_STAGES,
  UTILITY_TYPE,
  UTIL_OR_WALLBANG,
  DIFFICULTY,
  USEFULNESS,
} from '../components/enums';

export default function Home({data}) {
  console.log(data);
  const router = useRouter();
  const [ourData, setOurData] = useState({});
  const [map, setMap] = useState('any');
  const [agent, setAgent] = useState('any');
  const [location, setLocation] = useState('any');
  const [mapLocations, setMapLocations] = useState([]);
  const [attack, setAttack] = useState('either');
  const [stage, setStage] = useState('any');
  const [utilityOrWallbang, setUtilOrWallbang] = useState('either');
  const [utilityType, setUtilType] = useState('any');
  const [ability, setAbility] = useState('any');
  const [abilities, setAbilities] = useState([]);
  const [difficulty, setDifficulty] = useState(0);
  const [usefulness, setUsefulness] = useState(0);

  // handle setting any value that isn't map/agent as url query params
  // handle setting map/agent as path params.
  // with both it's arguable that you could do them inside onChange, but maybe inside useEffect leads to less duplication?
  useEffect(() => {
    if (agent !== 'any') {
      setAbilities(ABILITY_MAPPING[agent]);
    } else {
      setAbilities([]);
    }
    console.log(map)
    if (map !== 'any') {
      setMapLocations(MAP_LOCATIONS[map]);
    } else {
      setMapLocations([]);
    }
    if (map !== 'any' || agent !== 'any') {
      router.push(`${map}/${agent}`)
    }
  }, [agent, map, ourData, router])

  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Valorant Lineups</title>
        <meta name="description" content="Valorant Lineup Guides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{
          backgroundColor: 'rgb(var(--primary-color))',
          marginBottom: '0.5rem',
          borderRadius: '1rem',
          padding: '1rem 2.5rem',

          width: 'calc(100% - 15rem)',
        }}>
          <h1 className={styles.title}>
            Valorant-Lineups.gg
          </h1>
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

        {/* <hr className="solid" style={{width: 'calc(100% - 15rem)'}} /> */}
        
        {data.map((lineup, i) => <Lineup key={i} lineup={lineup} />)}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://dakotalewallen.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* switch this to my logo */}
          Built by 
            <Image src="/PageLogo.svg" alt="Dakota Lewallen's Logo" width={48} height={32} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const dynamo = new aws.DynamoDB({region: 'us-east-1'});
  const params = {
    "KeyConditionExpression": "#mapAgent = :mapAgent",
    "ExpressionAttributeValues": {
      ":mapAgent": {
        "S": "bind/sova"
      }
    },
    "ExpressionAttributeNames": {
      "#mapAgent": "mapAgent"
    },
    TableName: 'lineupsV4'
  }

  const result = await dynamo.query(params).promise()

  return {
    props: {data: result.Items.length ? result.Items : []}
  };
}