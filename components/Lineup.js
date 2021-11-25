export default function Lineup({lineup}) {
    return (
        <>
        <div style={{
            marginRight: '10rem',
            marginLeft: '10rem',
            width: 'calc(100% - 20rem)'
            }}>
            <h2>{lineup.title}</h2>
            <i><p>{lineup.agent} / {lineup.map} / Early Round / a site / attacking / utility / shock dart</p></i>
            <div style={{display: 'flex'}}>
                <div>img</div>
                <div>video</div>
            </div>
            <p>{lineup.description}</p>
        </div>
        <hr className="solid" style={{width: 'calc(100% - 15rem)'}} />
        </>
    )
}