import FooterCustom from "./FooterCustom"
import { useEffect } from "react"
import { getContacts } from "../../redux/reducers/contactsReducer"
import { connect } from "react-redux"
import { getContacts as getContactsSelector } from "../../redux/selectors";

const FooterCustomContainer = ({ getContacts, ...props }) => {
    useEffect(() => {
        getContacts()
    }, [])

    return <FooterCustom { ...props }/>
}

const mapStateToProps = (state) => ({
    contacts: getContactsSelector(state)
})

export default connect(mapStateToProps, { getContacts })(FooterCustomContainer)