import { Divider, Space, Layout, message } from 'antd'
import { Contact } from "../common/contact/Contact"
const { Footer } = Layout

const FooterCustom = ({ contacts }) => {
    const [messageApi, contextHolder] = message.useMessage()

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Скопировано',
        })
    }

    const onClickIconCopy = (info) => {
        navigator.clipboard.writeText(info)
        success()
    }

    const onClickIconRedirect = (to) => {
        window.location.href = to
    }

    const contactsElements = contacts.map(c => {
        const onClickContact = () => {
            switch (c.title) {
                case 'Git':
                case 'Vk':
                    return onClickIconRedirect(c.info)
                case 'Gmail':
                    return onClickIconRedirect("mailto:" + c.info)
                case 'Skype':
                case 'Phone':
                    return onClickIconCopy(c.info)
            }
        }

        return <Contact info={ c.info } logo={ c.logo } onClickContact={ onClickContact }/>
    })

    return (
        <Footer style={ {
            background: 'white',
            height: "calc(25vh - 55px)",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30
        } }>
            { contextHolder }
            <Divider>
                <Space>
                    { contactsElements }
                </Space>
            </Divider>
        </Footer>
    )
}

export default FooterCustom