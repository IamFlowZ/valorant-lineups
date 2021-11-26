export default function Lineup({lineup}) {
    return (
        <>
        <div style={{
            marginRight: '10rem',
            marginLeft: '10rem',
            width: 'calc(100% - 20rem)'
            }}>
            <h2>{lineup.title}</h2>
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