import ContentCustom from "./ContentCustom"
import { connect } from "react-redux"

const ContentCustomContainer = (props) => {

    return (
        <ContentCustom { ...props }/>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(ContentCustomContainer)