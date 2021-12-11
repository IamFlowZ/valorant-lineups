import Lineup from './Lineup';

export default function LineupWrapper({data}) {
    // console.log(data)
    return data.map((lineup, i) => <Lineup key={i} lineup={lineup} />)
}