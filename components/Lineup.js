import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faStar } from '@fortawesome/free-solid-svg-icons'
import ImageGallery from 'react-image-gallery';
import Image from 'next/image'
import { cleanHyphens } from './utils';

export default function Lineup({lineup}) {
    const diffStars = []
    const agent = lineup.mapAgent.S.split('/')[1]
    const map = lineup.mapAgent.S.split('/')[0]
    const stage = lineup.stage?.S ?? ''
    const location = lineup.location?.S ?? ''
    const utilType = lineup.utilType?.S ?? ''
    const ability = lineup.ability?.S ?? ''

    // find more 'js' way of doing this that doesn't involve for?
    for (let i = 0; i < lineup.difficulty.N; i++) {
        diffStars.push(<FontAwesomeIcon key={i} icon={faStar} style={{height: '16px', width: '16px', marginRight: '5px'}}/>);
    }
    const usefulStars = []
    for (let i = 0; i < lineup.usefulness.N; i++) {
        usefulStars.push(<FontAwesomeIcon key={i} icon={faStar} style={{height: '16px', width: '16px', marginRight: '5px'}}/>);
    }
    const urlCompTitle = lineup.title.S.split(' ').join('-')

    const renderVideo = (lineup) => (
        <iframe
            src={lineup.embedUrl}
            width='100%'
            height={315}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
        />
    )
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
                            <h2 id={urlCompTitle}>{lineup.title.S}</h2>
                        </a>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <p>Difficulty: {diffStars} </p>
                        <p>Usefulness: {usefulStars} </p>
                    </div>
                    <i><p>
                        {cleanHyphens(agent)} /
                        {/* see if you can prepend instead of template string */}
                        {/* {`${cleanHyphens(lineup.mapAgent.S.split('/')[1])}`} /  */}
                        {cleanHyphens(map).padStart(map.length + 1, ' ')} / 
                        {cleanHyphens(stage).padStart(stage.length + 1, ' ')} / 
                        {cleanHyphens(location).padStart(location.length + 1, ' ')} / 
                        {lineup.attack.BOOL ? ' attack' : ' defense'}
                        {utilType.length  ? cleanHyphens(utilType).padStart(utilType.length + 3, ' / ') : null }
                        {ability.length ? cleanHyphens(ability).padStart(ability.length + 3, ' / ') : null}
                    </p></i>
                </div>
                
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <ImageGallery
                        items={lineup.picture.L.map((pic) => ({
                          original: pic.S,
                        }))}
                    />
                    <ImageGallery
                        items={lineup.video.L.map((vid) => ({
                          embedUrl: vid.S, 
                          renderItem: renderVideo,
                          fullscreen: false,
                        }))}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                </div>
                <p style={{margin: '0.75rem 0'}}>{lineup.description.S}</p>
            </div>
        {/* <hr className="solid" style={{width: 'calc(100% - 15rem)'}} /> */}
        </>
    )
}