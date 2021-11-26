import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Lineup({lineup}) {
    const urlCompTitle = lineup.title.split(' ').join('-')
    return (
        <>
        <div style={{
            marginRight: '10rem',
            marginLeft: '10rem',
            width: 'calc(100% - 15rem)',
            padding: '1rem 2.5rem',
            borderRadius: '1rem',
            backgroundColor: 'rgb(var(--primary-color))',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            filter: 'drop-shadow(1px 1px 1px rgb(var(--primary-color)))',
            transition: 'all ease 0.5s'
            }} className='btn-glow'>
            <div style={{marginBottom: '0.75rem'}}>
                <div style={{
                    display: 'flex', 
                    alignItems: 'center',
                    textShadow: '0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)',
                }}>
                    <a href={`#${urlCompTitle}`} style={{display: 'flex'}}>
                        <FontAwesomeIcon icon={faAnchor} style={{height: '24px', width: '24px', marginRight: '5px'}}/>
                        <h2 id={urlCompTitle}>{lineup.title}</h2>
                    </a>
                </div>
                <i><p>{lineup.agent} / {lineup.map} / {lineup.stage} / {lineup.location} / {lineup.attack ? 'attack' : 'defense'} / {lineup.utility_type} / {lineup.ability} </p></i>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <img
                    src={lineup.picture}
                    width='47.5%'
                    height={315}
                />
                <iframe
                    src={lineup.video}
                    width='47.5%'
                    height={315}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
            <p style={{margin: '0.75rem 0'}}>{lineup.description}</p>
        </div>
        {/* <hr className="solid" style={{width: 'calc(100% - 15rem)'}} /> */}
        </>
    )
}