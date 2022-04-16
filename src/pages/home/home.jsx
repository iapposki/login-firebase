import React from 'react';
import {useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {Link} from 'react-router-dom';
import urls from '../../constants/urls';
import {useAuth} from '../../context/AuthContext'

// const Home = () => {
//     return (
//         <div>
//             <h1>Home</h1>
//         </div>
//     );
// }

const Home = () => {
    const history = useHistory();
    const useAuthHelper = useAuth();
    
    const handleClick = () => {
        history.push(urls.login);
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>Login</button>
            {useAuthHelper.currentUser && <p> Signed in as : {useAuthHelper.currentUser.email}</p>}
        </div>
    );

}


// class Home extends React.Component {
//     handleClick(){
//         this.props.history.push('/login');
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Home</h1>
//                 <Link to={urls.login}>Login</Link>
//             </div>
//         );
//     }
// }

export default Home;