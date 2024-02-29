import { Typography } from 'antd'
import { ContentWrapper } from "../common/contentWrapper/ContentWrapper";

const { Paragraph, Text } = Typography

const Main = ({ about }) => {
    const aboutElement = String(about).split('.').map(str => <Paragraph key={ crypto.randomUUID() }><Text
        className={ "contentText" }>{ str }</Text></Paragraph>)

    return <ContentWrapper title={ "Обо мне" } content={ aboutElement }/>
}

export default Main