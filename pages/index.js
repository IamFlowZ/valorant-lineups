import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
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
  const router = useRouter();
  const [map, setMap] = useState('any');
  const [agent, setAgent] = useState('any');

  // handle setting any value that isn't map/agent as url query params
  // handle setting map/agent as path params.
  // with both it's arguable that you could do them inside onChange, but maybe inside useEffect leads to less duplication?
  useEffect(() => {
    if (map !== 'any' || agent !== 'any') {
      router.push(`${map}/${agent}`)
    }
  }, [agent, map, router])

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
          <h2 style={{textAlign: 'center'}}>The best lineup study tool</h2>
          <div>
            <form style={{display: 'flex', flexDirection: 'column'}} className="pure-form">
              <section style={{display: 'flex', alignItems: 'center'}}>
                <Select item='map' itemState={map} setItemState={setMap} selectOptions={MAPS} />
                <Select item='agent' itemState={agent} setItemState={setAgent} selectOptions={AGENTS} />
                <FontAwesomeIcon icon={faArrowLeft} style={{heigh: '24px', width: '24px'}}/>
                <p>get started here...</p>
              </section>
            </form>
          </div>
        </div>
        
        <div style={{
          backgroundColor: 'rgb(var(--primary-color))',
          marginBottom: '0.5rem',
          borderRadius: '1rem',
          padding: '1rem 2.5rem',

          width: 'calc(100% - 15rem)',
        }}>
          <h1>Welcome!</h1>
          <p>This is Valorant Lineups.gg</p>
        </div>
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

// export async function getStaticProps() {
//   const dynamo = new aws.DynamoDB({region: 'us-east-1'});
//   const params = {
//     "KeyConditionExpression": "#mapAgent = :mapAgent",
//     "ExpressionAttributeValues": {
//       ":mapAgent": {
//         "S": "bind/sova"
//       }
//     },
//     "ExpressionAttributeNames": {
//       "#mapAgent": "mapAgent"
//     },
//     TableName: 'lineupsV4'
//   }

//   const result = await dynamo.query(params).promise()

//   return {
//     props: {data: result.Items.length ? result.Items : []}
//   };
// }