import React from "react";
import { Container } from "react-bootstrap";
import Routes from "./router";


// const App = () => {
//     return(
//         <Container>
//             <Routes />
//         </Container>
//     )
// };

class App extends React.Component {
    render() {
        return (
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                <div className='w-75'>
                    {/* <AuthProvider>
                    <Routes />
                </AuthProvider> */}
                    <Routes />
                </div>
            </Container>
        );
    }
}


export default App;
