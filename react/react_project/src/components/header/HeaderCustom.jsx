import { Layout } from 'antd'
import { Contact } from "../common/contact/Contact"

const { Header } = Layout

const HeaderCustom = ({ contacts }) => {

    const onClickIconRedirect = (to) => {
        window.location.href = to
    }

    const contactsElements = contacts.map(c => {
        const onClickContact = () => {
            switch (c.title) {
                case 'Git':
                    return onClickIconRedirect(c.info)
                case 'Gmail':
                    return onClickIconRedirect("mailto:" + c.info)
                case 'Telegram':
                    return onClickIconRedirect("https://telegram.me/" + c.info)
            }
        }

        return <Contact info={ c.info } logo={ c.logo } onClickContact={ onClickContact }/>
    })

    return (
        <Header style={ {
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
        } }>
            { contactsElements }
        </Header>
    )
}

export default HeaderCustom