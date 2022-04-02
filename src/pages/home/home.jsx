import React from 'react';
import {withRouter, Link} from 'react-router-dom';


// const Home = () => {
//     return (
//         <div>
//             <h1>Home</h1>
//         </div>
//     );
// }


class Home extends React.Component {
    
    handleClick(){
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default withRouter(Home);