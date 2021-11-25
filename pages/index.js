import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import sqlite from 'better-sqlite3'
import styles from '../styles/Home.module.css'
import Lineup from '../components/Lineup'

const column = {display: 'flex', flexDirection: 'column'}

export default function Home({data}) {
  const map = useState();
  const agent = useState();
  const location = useState();
  const attack = useState();
  const stage = useState();
  const utilityOrWallbang = useState();
  const utilityType = useState();
  const ability = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>Valorant Lineups</title>
        <meta name="description" content="Valorant Lineup Guides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <h1 className={styles.title}>
          Valorant-Lineups.gg
        </h1>
        <div>
          <form style={{display: 'flex'}}>
            <section style={column}>
              <label htmlFor="map">Map</label>
              <select id="map">
                <option>All</option>
                <option>bind</option>
              </select>
            </section>
            <section style={column}>
              <label htmlFor="agent">Agent</label>
              <select id="agent">
                <option>All</option>
                <option>Sova</option>
              </select>
            </section>
            <section style={column}>
              <label htmlFor="attack">Attack or Defend</label>
              <select id="attack">
                <option>Either</option>
                <option>Attack</option>
                <option>Defense</option>
              </select>
            </section>
            <section style={column}>
              <label htmlFor="stage">Stage</label>
              <select id="stage">
                <option>Any</option>
                <option>Early Round</option>
                <option>Mid Round</option>
                <option>Post Plant</option>
              </select>
            </section>
            <section style={column}>
              <label htmlFor="utility">Utility or Wallbang</label>
              <select id="utility">
                <option>Either</option>
                <option>Utility</option>
                <option>Wallbang</option>
              </select>
            </section>
            <section style={column}>
              <label htmlFor="utilityType">Utility Type</label>
              <select id="utilityType">
                <option>Any</option>
                <option>Smoke</option>
                <option>Flash</option>
                <option>Molly</option>
                <option>Information</option>
              </select>
            </section>
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