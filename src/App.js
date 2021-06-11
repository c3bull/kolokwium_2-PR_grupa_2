import './App.css';
import {Route, Switch} from "react-router-dom";
import Posts from "./components/posts";
import JCnavbar from "./components/JCnavbar";
import JChome from "./components/JChome";

function App() {

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="content">
                    <div className="container-fluid">
                        <JCnavbar/>
                    </div>
                    <Switch>
                        <Route path="/" exact component={Posts}/>
                        <Route path="/home" exact component={JChome}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
