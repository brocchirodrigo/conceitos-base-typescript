import {Request, Response} from 'express'
import CreateUser from './services/CreateUser'

export function HelloWorld (request: Request, response: Response) {
    const user = CreateUser({
        name: 'Rodrigo', 
        email: 'rodrigo.brocchi@gmail.com', 
        password: '123456',
        techs: ['nodeJS', 'reactJS', 'react native', {title: 'python', expirience: 100}]
    })
    
    return response.json({ message: 'Hello World' })
}