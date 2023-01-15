import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CountryList from "./CountryList";

function App() {
    return (
        <Router>
            <div className="App">
                {}
                <Switch>
                    <Route path="/">
                        <CountryList/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
