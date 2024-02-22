import axios from 'axios'

export const API_STATIC_MEDIA = 'http://127.0.0.1:8000/'
const instanceAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})

export const personApi = {
    getPerson() {
        return instanceAxios.get('person')
    },

    getContacts() {
        return instanceAxios.get('contacts')
    },

    getEducation() {
        return instanceAxios.get('education')
    },

    getExperience() {
        return instanceAxios.get('experience')
    },

    getCategories() {
        return instanceAxios.get('categories')
    },

    getSkills() {
        return instanceAxios.get('skills')
    },

    getProfessions() {
        return instanceAxios.get('professions')
    },

    sendFeedback(email, message) {
        return instanceAxios.post('feedback', { email, message })
    }
}