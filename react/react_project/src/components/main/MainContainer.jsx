import { connect } from "react-redux"
import { getAboutPerson } from "../../redux/selectors"
import Main from "./Main"

const MainContainer = (props) => {
    return <Main { ...props }/>
}

const mapStateToProps = (state) => ({
    about: getAboutPerson(state)
})

export default connect(mapStateToProps)(MainContainer)