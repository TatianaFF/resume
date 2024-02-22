import { Typography, Divider, Row, Col, Card } from 'antd'
import { ContentWrapper } from "../common/contentWrapper/ContentWrapper";

const { Title, Text } = Typography

const Skills = ({ mapSkills }) => {

    const cardSkills = mapSkills.map(pcs => {

        const nameProfession = pcs[0].name
        const categorySkills = pcs[1].map(cs => {

            const nameCategory = cs[0].name
            const titlesSkills = cs[1].map(s => s.title)

            return (
                <p><Text className={ "contentText" }>{ titlesSkills.join(', ') }</Text></p>
            )
        })

        return (
            <Col span={ 12 }>
                <Card
                    style={ { margin: 16, height: 300 } }
                    title={ nameProfession }
                >
                    { categorySkills }
                </Card>
            </Col>
        )
    })

    return <ContentWrapper title={ "Технические навыки" } content={ <Row>{ cardSkills }</Row> }/>
}

export default Skills