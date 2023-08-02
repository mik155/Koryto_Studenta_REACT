import Navbar from './Navbar.js'
import Home from './Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/navbar.css';
import './css/index.css';

const App = () =>
{
    return(
        <Router>
            <div className="base-container">
            
                <Navbar/>
                   
                <Switch>
                    <Route  path = '/'>
                        <Home></Home>
                     </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;