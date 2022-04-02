import Login from '../login/login';
import Home from '../home/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
            </Switch>
        </Router>
    )
}

export default Routes;