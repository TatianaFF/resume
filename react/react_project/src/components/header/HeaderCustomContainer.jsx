import HeaderCustom from "./HeaderCustom"
import { connect } from "react-redux"
import { getContacts } from "../../redux/reducers/contactsReducer"
import { getContacts as getContactsSelector } from "../../redux/selectors"
import { useEffect } from "react"

const HeaderCustomContainer = ({ getContacts, ...props }) => {
    useEffect(() => {
        getContacts()
    }, [])

    return <HeaderCustom { ...props }/>
}

const mapStateProps = (state) => ({
    contacts: getContactsSelector(state)
})

export default connect(mapStateProps, { getContacts })(HeaderCustomContainer)