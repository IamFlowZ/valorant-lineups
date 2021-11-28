import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faStar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { cleanHyphens } from './utils';

export default function Lineup({lineup}) {
    const diffStars = []
    // find more 'js' way of doing this that doesn't involve for?
    for (let i = 0; i < lineup.difficulty; i++) {
        diffStars.push(<FontAwesomeIcon icon={faStar} style={{height: '16px', width: '16px', marginRight: '5px'}}/>);
    }
    const usefulStars = []
    for (let i = 0; i < lineup.usefulness; i++) {
        usefulStars.push(<FontAwesomeIcon icon={faStar} style={{height: '16px', width: '16px', marginRight: '5px'}}/>);
    }
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
            }} 
            className='btn-glow'
        >
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
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p>Difficulty: {diffStars} </p>
                    <p>Usefulness: {usefulStars} </p>
                </div>
                <i><p>
                    {/* see if you can prepend instead of template string */}
                    {`${cleanHyphens(lineup.agent)}`} / 
                    {` ${cleanHyphens(lineup.map)}` } / 
                    {` ${cleanHyphens(lineup.stage)}`} / 
                    {` ${cleanHyphens(lineup.location)}`} / 
                    {lineup.attack ? ' attack' : ' defense'} / 
                    {` ${cleanHyphens(lineup.utility_type)}`} / 
                    {` ${cleanHyphens(lineup.ability)}`} 
                </p></i>
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