import {  useEffect } from 'react'
import { connect } from "react-redux"
import Skills from "./Skills"
import { getMapSkills } from "../../redux/selectors"
import { getSkills } from "../../redux/reducers/skillsReducer"

const SkillsContainer = ({ getSkills, ...props }) => {
    useEffect(() => {
        getSkills()
    }, [])

    return <Skills { ...props }/>
}

const mapStateToProps = (state) => ({
    mapSkills: getMapSkills(state)
})

export default connect(mapStateToProps, { getSkills })(SkillsContainer)