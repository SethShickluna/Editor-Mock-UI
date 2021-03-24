//npm installs 
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//react components 
import MenuPage from "./MenuPage"; 
import Editor from "./Editor";
import Export from "./Export"; 

//styles
import './App.css';






function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/editor" component={Editor}/>
                    <Route path="/export" component={Export}/>
                    <Route path="*" component={MenuPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
