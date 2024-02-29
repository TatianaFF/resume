import { useEffect } from 'react'
import Education from "./Education"
import { connect } from "react-redux"
import {
    getDepartmentEducation,
    getEndYearEducation,
    getInstituteEducation,
    getStartYearEducation
} from "../../redux/selectors";
import { getEducation } from "../../redux/reducers/educationReducer";

const EducationContainer = ({ getEducation, ...props }) => {
    useEffect(() => {
        getEducation()
    }, [])

    return <Education { ...props }/>
}

const mapStateToProps = (state) => ({
    startYear: getStartYearEducation(state),
    endYear: getEndYearEducation(state),
    institute: getInstituteEducation(state),
    department: getDepartmentEducation(state)
})

export default connect(mapStateToProps, { getEducation })(EducationContainer)

