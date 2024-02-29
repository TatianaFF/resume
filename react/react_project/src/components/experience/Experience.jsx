import { Typography, Table } from 'antd'
import { ContentWrapper } from "../common/contentWrapper/ContentWrapper";

const { Text } = Typography

const Experience = ({ experience }) => {

    const experienceDict = experience.map(exp => {
        return {
            key: exp.id,
            company: <Text className={ "contentText" }>{ exp.company }</Text>,
            description: <Text className={ "contentText" }>{ exp.description }</Text>,
            period: <Text className={ "contentText" }>{ exp.start_date } - { exp.end_date }</Text>
        }
    })

    const columns = [
        { title: 'Компания', dataIndex: 'company', key: 'company' },
        { title: 'Должность', dataIndex: 'description', key: 'description' },
        { title: 'Период', dataIndex: 'period', key: 'period' }
    ]

    return <ContentWrapper title={ "Опыт работы" }
                           content={ <Table pagination={ false } columns={ columns } dataSource={ experienceDict }/> }/>
}

export default Experience