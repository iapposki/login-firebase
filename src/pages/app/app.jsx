import React from "react";
import { Container } from "react-bootstrap";
import Routes from "./router";
import AuthProvider from "../../context/AuthContext";

// const App = () => {
//     return(
//         <Container>
//             <Routes />
//         </Container>
//     )
// };

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: "",
    //         password: "",
    //     };
    // }

    // setEmail(email){
    //     this.setState({
    //         email: email
    //     })
    // }

    // setPassword(password){
    //     this.setState({
    //         password: password
    //     })
    // }

    render() {
        return (
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                <div className='w-75'>
                    <AuthProvider>
                        <Routes />
                    </AuthProvider>
                </div>
            </Container>
        );
    }
}


export default App;
