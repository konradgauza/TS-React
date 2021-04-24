import React from 'react';
import '../App.scss';
import { User } from "../Model/Model";
import { AuthService } from "../Services/AuthService";
import { Login } from "./Login";

interface AppState {
    user: User | undefined //User może być określonym przez nas typem, bądź może być niezdefiniowany jeśli nikt sie jeszcze nie zalogował
}
//powyżej stworzyliśmy typ state dla naszego komponentu App i zawarliśmy w nim usera, ponieważ będzie on nam potrzebny globalnie

class App extends React.Component<{}, AppState> { //mozemy zdefiniowac jakiego typu propsy/state będzie przyjmował komponent

    state : AppState = {
        user: undefined
    }

    private authService : AuthService = new AuthService();
    //tutaj dopiero tworzymy nowy obiekt authService na bazie klasy AuthService która jest jednocześnie typem jak i klasą bazową

    render(){
        return (
            <div className="App">
                PUSIA
                <Login authService={this.authService}/>
            </div>
        )
    }
}


// function App() {
//   return (
//     <div className="App">
//       PUSIA
//     </div>
//   );
// }

export default App;
