//npm installs 
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//react components 
import MenuPage from "./MenuPage"; 
import Editor from "./Editor";
//styles
import './App.css';






function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/editor" component={Editor}/>
                    <Route path="*" component={MenuPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
