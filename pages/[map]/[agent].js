import {useState, useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import aws from 'aws-sdk';
import Select from '../../components/Select'
import LineupWrapper from '../../components/LineupWrapper'
import styles from '../../styles/Home.module.css'
import { capitalizeFirstLetter } from '../../components/utils';
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
} from '../../components/enums';

export default function({data}) {
    const router = useRouter();
    const [ourData, setOurData] = useState({});
    const [map, setMap] = useState(router.query.map);
    const [agent, setAgent] = useState(router.query.agent);
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

    useEffect(() => {
      if (agent !== 'any') {
        setAbilities(ABILITY_MAPPING[agent]);
      } else {
        setAbilities([]);
      }

      if (map !== 'any') {
        setMapLocations(MAP_LOCATIONS[map]);
      } else {
        setMapLocations([]);
      }
      
      if ((map !== 'any' && agent !== 'any') && (map !== router.query.map || agent !== router.query.agent)) {
        router.push(`/${map}/${agent}`)
      }

      if(map === 'any' && agent === 'any') {
        setMap(router.query.map);
        setAgent(router.query.agent);
      }
    }, [agent, map, ourData, router])

    // console.log(map, agent)
    return (
      <main className={styles.main}>

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Valorant Lineups - {capitalizeFirstLetter(router.query.map)}/{capitalizeFirstLetter(router.query.agent)}</title>
            <meta name="description" content="Valorant Lineup Guides" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{
            backgroundColor: 'rgb(var(--primary-color))',
            marginBottom: '0.5rem',
            borderRadius: '1rem',
            padding: '1rem 2.5rem',

            width: 'calc(100% - 15rem)',
        }}>
            <a onClick={() => router.push('/')} style={{cursor: 'pointer'}}>
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

      {/* <hr className="solid" style={{width: 'calc(100% - 15rem)'}} /> */}
      <LineupWrapper data={data}/>
    </main>
    )
}

export function getStaticPaths() {
    const paths = MAPS.map((map) => 
                AGENTS.map((agent) => ({
                    params: {map, agent}
                })
            )
        )
        .reduce((accu, curr) => {
            curr.map(path => 
                accu.push(path)
            )
            return accu;
        }, []);

    return {paths, fallback: false}
}

export async function getStaticProps(context) {
    // console.log(context)
    const dynamo = new aws.DynamoDB({region: 'us-east-1'});
    const params = {
      "KeyConditionExpression": "#mapAgent = :mapAgent",
      "ExpressionAttributeValues": {
        ":mapAgent": {
          "S": `${context.params.map}/${context.params.agent}`
        }
      },
      "ExpressionAttributeNames": {
        "#mapAgent": "mapAgent"
      },
      TableName: 'lineupsV4'
    }
  
    const result = await dynamo.query(params).promise()
    // console.log(result)
    return {
      props: {data: result.Items.length ? result.Items : []}
    };
  }