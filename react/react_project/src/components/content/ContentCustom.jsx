import {
    Routes,
    Route
} from "react-router-dom"
import MainContainer from "../main/MainContainer"
import SkillsContainer from "../skills/SkillsContainer"
import EducationContainer from "../education/EducationContainer"
import ExperienceContainer from "../experience/ExperienceContainer"


const ContentCustom = (props) => {
    const routes = [
        {
            path: "/",
            component: <MainContainer/>
        },
        {
            path: "/education",
            component: <EducationContainer/>
        },
        {
            path: "/skills",
            component: <SkillsContainer/>
        },
        {
            path: "/experience",
            component: <ExperienceContainer/>
        }
    ]

    const routeComponents = routes.map(({ path, component }, key) => <Route path={ path } element={ component }
                                                                            key={ key }/>)

    return <Routes>{ routeComponents }</Routes>
}

export default ContentCustom;