import Experience from "./Experience"
import { connect } from "react-redux"
import { useEffect } from "react"
import { getExperience } from "../../redux/reducers/experienceReducer"
import { getExperience as getExperienceSelector } from "../../redux/selectors"

const ExperienceContainer = ({ getExperience, experience, ...props }) => {
    useEffect(() => {
        getExperience()
    }, [experience])

    return <Experience experience={experience} { ...props }/>
}

const mapStateToProps = (state) => ({
    experience: getExperienceSelector(state)
})

export default connect(mapStateToProps, { getExperience })(ExperienceContainer)