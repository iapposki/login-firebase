import React from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// const Login = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//     </div>
//   );
// };

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            loading: false
        }
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();
        console.log(`email: ${this.emailRef.current.value}`);
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4"> Log In</h2>

                        {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={this.emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={this.passwordRef} required />
                            </Form.Group>
                            <Button disabled={this.state.loading} className="w-100 mt-4" type="submit">Log In</Button>
                        </Form>

                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>

                    </Card.Body>
                </Card>

                <div className="w-100 text-center mt-2">
                    Need an account ? <Link to="/signup">Sign Up</Link>
                </div>
            </>
        );
    }
}

export default Login;