import React, {SyntheticEvent} from "react";
import {AuthService} from "../Services/AuthService";

interface LoginProps {
    authService: AuthService
}
interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSuccessful: boolean
}
//ponad komponentem tworzymy typ state(LoginState) oraz typ props(LoginProps) ktory przekazujemy do komponentu(zawsze najpierw typ props,
//następnie typ state)

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSuccessful: false
        //powyżej stan początkowy komponentu. Żaden użytkownik nie próbował się jeszcze zalogować i nie mamy żadnych danych
    }

    private setUsername(event: CustomEvent){
        this.setState({userName: event.target.value});
    }
    private setPassword(event: CustomEvent){
        this.setState({password: event.target.value})
    }
    private async submit(event: SyntheticEvent) {
        event.preventDefault();
        this.setState({loginAttempted: true}) //destrukturyzacja obiektu state
        const result = await this.props.authService.login(
            this.state.userName,
            this.state.password
        )
        if(result) {
            this.setState({loginSuccessful: true})
        }else {
            this.setState({loginSuccessful: false})
        }

    }

    render() {
        let loginMessage : any;
        if (this.state.loginAttempted) {
            if (this.state.loginSuccessful) {
                loginMessage = <label>Login successful</label>
            } else {
                loginMessage = <label>Login failed</label>
            }
        }

        return (
            <div>
                <h2>Please login</h2>
                <form action="" onSubmit={e => this.submit(e)}>
                    <input type="text" value={this.state.userName} onChange={e => this.setUsername(e)}/><br/>
                    <input type="password" value={this.state.password} onChange={e => this.setPassword(e)}/><br/>
                    <button>Login</button>
                </form>
                {loginMessage}
            </div>
        )
    }
}