import Sidebar from "./Sidebar"
import { getFirstNamePerson, getLastNamePerson, getPhotoPerson } from "../../redux/selectors"
import { connect } from "react-redux"

const SidebarContainer = (props) => {
    return <Sidebar { ...props }/>
}

const mapStateToProps = (state) => ({
    firstName: getFirstNamePerson(state),
    lastName: getLastNamePerson(state),
    photo: getPhotoPerson(state)
})

export default connect(mapStateToProps)(SidebarContainer)