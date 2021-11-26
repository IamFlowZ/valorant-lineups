import { useState } from 'react'
import purecss from 'purecss';
import Head from 'next/head'
import Image from 'next/image'
import sqlite from 'better-sqlite3'
import styles from '../styles/Home.module.css'
import Lineup from '../components/Lineup'
import Select from '../components/Select'
import { ABILITIES, AGENTS, ATKORDFND, MAPS, ROUND_STAGES, UTILITY_TYPE, UTIL_OR_WALLBANG } from './enums';

const column = {display: 'flex', flexDirection: 'column'}

export default function Home({data}) {65
  const [map, setMap] = useState('any');
  const [agent, setAgent] = useState('all');
  const [location, setLocation] = useState('any');
  const [attack, setAttack] = useState('either');
  const [stage, setStage] = useState('any');
  const [utilityOrWallbang, setUtilOrWallbang] = useState('either');
  const [utilityType, setUtilType] = useState('any');
  const [ability, setAbility] = useState('any');

  console.log(map);

  return (
    <div className={styles.container}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Valorant Lineups</title>
        <meta name="description" content="Valorant Lineup Guides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <h1 className={styles.title}>
          Valorant-Lineups.gg
        </h1>
        <div>
          <form style={{display: 'flex'}} className="pure-form">
            <Select item='map' itemState={map} setItemState={setMap} selectOptions={MAPS} />
            {/* add some logic to include locations based on map selection */}
            <Select item='agent' itemState={agent} setItemState={setAgent} selectOptions={AGENTS} />
            <Select item='attack' itemState={attack} setItemState={setAttack} selectOptions={ATKORDFND} />
            <Select item='stage' itemState={stage} setItemState={setStage} selectOptions={ROUND_STAGES} />
            <Select item='utility' itemState={utilityOrWallbang} setItemState={setUtilOrWallbang} selectOptions={UTIL_OR_WALLBANG} />
            <Select item='utilityType' itemState={utilityType} setItemState={setUtilType} selectOptions={UTILITY_TYPE} />
            <Select item='ability' itemState={ability} setItemState={setAbility} selectOptions={ABILITIES} />
          </form>
        </div>

        <hr className="solid" style={{width: 'calc(100% - 15rem)'}} />
        
        {data.map(lineup => <Lineup key={lineup.id} lineup={lineup} />)}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://dakotalewallen.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* switch this to my logo */}
          Built by Dakota Lewallen
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const db = sqlite('sqlite.db');
  const rows = db.prepare('select * from lineups').all();
  console.log(rows);
  return {
    props: {data: rows}
  };
}