import { createSelector } from "reselect"

export const getInitialized = (state) => (state.appReducer.initialized)

const getPerson = (state) => (state.personReducer.person)
export const getFirstNamePerson = createSelector(getPerson, (person) => {
    return person.first_name
})
export const getLastNamePerson = createSelector(getPerson, (person) => {
    return person.last_name
})
export const getPhotoPerson = createSelector(getPerson, (person) => {
    return person.photo
})
export const getAboutPerson = createSelector(getPerson, (person) => {
    return person.about
})

const getEducation = (state) => (state.educationReducer.education)
export const getStartYearEducation = createSelector(getEducation, (education) => {
    return education.start_year
})
export const getEndYearEducation = createSelector(getEducation, (education) => {
    return education.end_year
})
export const getInstituteEducation = createSelector(getEducation, (education) => {
    return education.institute
})
export const getDepartmentEducation = createSelector(getEducation, (education) => {
    return education.department
})

const getCategories = (state) => (state.categoriesReducer.categories)
const getProfessions = (state) => (state.professionsReducer.professions)
const getSkills = (state) => (state.skillsReducer.skills)
export const getMapSkills = createSelector(getCategories, getProfessions, getSkills, (categories, professions, skills) => {
    return professions.map(p =>
        [p, categories.map(c => [c, skills.filter(s => s.profession === p.id && s.category === c.pk)])]
    ).sort((a, b) => (a[0].id > b[0].id) ? 1 : ((b[0].id > a[0].id) ? -1 : 0))
})

export const getExperience = (state) => (state.experienceReducer.experience)

export const getContacts = (state) => (state.contactsReducer.contacts)