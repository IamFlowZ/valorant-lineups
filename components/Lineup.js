import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'

export default function Lineup({lineup}) {
    const urlCompTitle = lineup.title.split(' ').join('-')
    return (
        <>
        <div style={{
            marginRight: '10rem',
            marginLeft: '10rem',
            width: 'calc(100% - 20rem)'
            }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <a href={`#${urlCompTitle}`}><FontAwesomeIcon icon={faAnchor} style={{height: '24px', width: '24px', marginRight: '5px'}}/></a>
                <h2 id={urlCompTitle}>{lineup.title}</h2>
            </div>
            <i><p>{lineup.agent} / {lineup.map} / {lineup.stage} / {lineup.location} / {lineup.attack ? 'attack' : 'defense'} / {lineup.utility_type} / {lineup.ability} </p></i>
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
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
            </div>
            <p>{lineup.description}</p>
        </div>
        <hr className="solid" style={{width: 'calc(100% - 15rem)'}} />
        </>
    )
}