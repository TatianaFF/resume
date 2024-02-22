import { Typography, Divider } from 'antd'
import { ContentWrapper } from "../common/contentWrapper/ContentWrapper";

const { Title, Paragraph, Text } = Typography

const Main = ({ about }) => {
    const aboutElement = String(about).split('.').map(str => <Paragraph><Text className={ "contentText" }>{ str }</Text></Paragraph>)

    return <ContentWrapper title={ "Обо мне" } content={ aboutElement }/>
}

export default Main