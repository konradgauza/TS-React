import {User} from "../Model/Model";

export class AuthService {
    public async login(userName: string, password: string) : Promise<User | undefined> {
        if (userName === 'user' && password === '1234') {
            return {
                userName: userName,
                email: 'something@something.com'
            }
        } else {
            return undefined
        }
    }
}