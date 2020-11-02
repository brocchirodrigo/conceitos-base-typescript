interface techObject {
    title: string
    expirience: number
}

interface CreateUserData {
    name?: string,
    email: string,
    password: string
    techs?: Array<string | techObject>
}

export default function CreateUser({name, email, password, techs}: CreateUserData) {
    const user = {
        name,
        email,
        password,
        techs
    }
    return user
}