import { Card, Divider, Typography } from "antd"

const { Title } = Typography

export const ContentWrapper = ({ title, content }) => {
    return (
        <Card style={ { marginLeft: 50, width: '100%', height: '100%', paddingLeft: 30, paddingRight: 30 } }>
            <Typography>
                <Title>{ title.toString() }</Title>
                <Divider style={ { backgroundColor: "#EDEEF0" } }/>
                { content }
            </Typography>
        </Card>
    )
}