import { useRouter } from 'next/router'
import { AGENTS, MAPS } from '../components/enums'

export default function Map() {
    const router = useRouter()
    const { map } = router.query

    console.log(map)

    return (<p>map</p>)
}

export function getStaticPaths() {
    const paths = MAPS.map((map) => AGENTS.map((agent) => `${map}/${agent}`));
    return {paths, fallback: false}
}

export async function getStaticProps() {
    const dynamo = new aws.DynamoDB({region: 'us-east-1'});
    const params = {
      "KeyConditionExpression": "#mapAgent = :mapAgent",
      "ExpressionAttributeValues": {
        ":mapAgent": {
          "S": "bind/sova"
        }
      },
      "ExpressionAttributeNames": {
        "#mapAgent": "mapAgent"
      },
      TableName: 'lineupsV4'
    }
  
    const result = await dynamo.query(params).promise()
  
    return {
      props: {data: result.Items.length ? result.Items : []}
    };
  }