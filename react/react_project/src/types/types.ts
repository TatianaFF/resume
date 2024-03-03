export type Person = {
    id: number
    first_name: string
    last_name: string
    patronymic: string
    birthday: string
    city: string
    country: string
    about: string
    photo: string
}

export type Profession = {
    id: number
    name: string
}

export type Category = {
    pk: number
    name: string
}

export type Contact = {
    id: number
    title: string
    info: string
    logo: string
}

export type Skill = {
    id: number
    title: string
    description: string
    logo: string
    category: number
    profession: number
}

export type Experience = {
    id: number
    start_date: string
    end_date: string
    company: string
    description: string
}

export type Education = {
    id: number
    start_year: string
    end_year: string
    institute: string
    department: string
}