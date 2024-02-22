import { Typography, Divider, Descriptions } from 'antd'
import { ContentWrapper } from "../common/contentWrapper/ContentWrapper";

const { Title, Text } = Typography


const Education = ({ startYear, endYear, institute, department }) => {
    const educationDict = [
        { key: 1, label: 'Период', children: <Text className={ "contentText" }>{ startYear + '-' + endYear }</Text> },
        { key: 2, label: 'Институт', children: <Text className={ "contentText" }>{ institute }</Text> },
        { key: 3, label: 'Направление', children: <Text className={ "contentText" }>{ department }</Text> }
    ]

    return (
        <ContentWrapper title={ "Образование" } content={ <Descriptions layout="vertical" items={ educationDict }/> }/>
    )
}

export default Education