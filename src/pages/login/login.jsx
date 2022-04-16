import React, {useState} from 'react';
// import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Layout, Input, Row, Col, Card, Form, Button, Checkbox, Typography } from "antd";
// import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
// import auth from '../../firebase';
import urls from '../../constants/urls';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css'
import {useAuth} from '../../context/AuthContext';



const { Content } = Layout;
const { Text } = Typography;


const Login = () => {
    let useAuthHelper = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
  
    const onFinish = async (values) => {
        try {
            setLoading(true);
            setError("")
            // const auth = await getAuth();
            useAuthHelper.login(values.email, values.password).then((userCredential) => { 
                const user = userCredential.user;
                console.log(user);
                history.push(urls.home);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode)
                console.log(errorCode, errorMessage);
            });
            // signInWithEmailAndPassword(auth, values.email, values.password).then((userCredential) => { 
            //         const user = userCredential.user;
            //         console.log(user);
            //         history.push(urls.home);
            //     }).catch((error) => {
            //         const errorCode = error.code;
            //         const errorMessage = error.message;
            //         setError(errorCode)
            //         console.log(errorCode, errorMessage);
            //     });

        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }

    const onFinishFailed = (errorInfo) => {
        setError(errorInfo)
        console.log('Failed:', errorInfo);
    }



    // const onFinish = async (values) => {
    //   try {
    //       setError("")
    //       setLoading(true)
    //       await login(values.email, values.password)
    //       navigate("/")
    //     } catch {
    //       setError("Failed to log in")
    //     }
    
    //     setLoading(false)
    // };
  
    // const onFinishFailed = (errorInfo) => {
    //   console.log("Failed:", errorInfo);
    // };
  
    return (
      <Content>
        <Row justify="center" align="middle" className="full-height">
          <Col>
            <Card headStyle={{textAlign:"center", fontSize:"23px"}} title={<span>LOGIN</span>}>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>
  
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
  
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item  >
                
                <span className='error' style={{display:"flex", alignContent:"center", justifyContent:"center", textAlign:"center"}}><Text hidden={error === ""} type="danger">{error}</Text></span>
                
                <Form.Item>
                </Form.Item>
  
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
                <div className="w-100 text-center mt-3">
                    <Link to={urls.forgot}>Forgot Password?</Link>
                    <br></br>
                    <Link to={urls.home}>Homepage</Link>
                </div>
            </Card>
          </Col>
        </Row>
      </Content>
    );
  };
  
  export default Login;



// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: "",
//             loading: false
//         }
//         this.emailRef = React.createRef();
//         this.passwordRef = React.createRef();

//         // this.handleSubmit = this.handleSubmit.bind(this);
//         this.onFinish = this.onFinish.bind(this);
//     }

//     // async handleSubmit(e){
//     //     e.preventDefault();
//     //     const auth = await getAuth();
//     //     // console.log(`email: ${this.emailRef.current.value}`);0.

//     // }

//     onFinish = async (values) => {
//         try {
//             this.setState({ loading: true });
//             this.setState({ error: "" });
//             // const auth = await getAuth();
//             signInWithEmailAndPassword(auth, values.email, values.password).then((userCredential) => { 
//                     const user = userCredential.user;
//                     console.log(user);
//                     History(urls.home);
//                 }).catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     this.setState({ error: error.code });
//                     console.log(errorCode, errorMessage);
//                 });

//         } catch {
//             this.setState({ error: "Invalid email or password" });
//         }
//         this.setState({ loading: false });
//     }

//     onFinishFailed = (errorInfo) => {
//         this.setState({ error: errorInfo });
//         console.log('Failed:', errorInfo);
//     }

//     render() {
        
//         return (
//             // <>
//             //     <Card>
//             //         <Card.Body>
//             //             <h2 className="text-center mb-4"> Log In</h2>

//             //             {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}

//             //             <Form onSubmit={this.handleSubmit}>
//             //                 <Form.Group id="email">
//             //                     <Form.Label>Email</Form.Label>
//             //                     <Form.Control type="email" ref={this.emailRef} required />
//             //                 </Form.Group>
//             //                 <Form.Group id="password">
//             //                     <Form.Label>Password</Form.Label>
//             //                     <Form.Control type="password" ref={this.passwordRef} required />
//             //                 </Form.Group>
//             //                 <Button disabled={this.state.loading} className="w-100 mt-4" type="submit">Log In</Button>
//             //             </Form>

//             //             <div className="w-100 text-center mt-3">
//             //                 <Link to="/forgot-password">Forgot Password?</Link>
//             //             </div>

//             //         </Card.Body>
//             //     </Card>

//             //     <div className="w-100 text-center mt-2">
//             //         Need an account ? <Link to="/signup">Sign Up</Link>
//             //     </div>
//             // </>

//             <Content>
//                 <Row justify="center" align="middle" className="full-height">
//                     <Col>
//                         <Card headStyle={{textAlign:"center", fontSize:"23px"}} title={<span>LOGIN</span>}>
//                             <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} autoComplete="off">
//                                 <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" },]}>
//                                     <Input />
//                                 </Form.Item>

//                                 <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" },]}>
//                                     <Input.Password />
//                                 </Form.Item>

//                                 <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
//                                     <Checkbox>Remember me</Checkbox>
//                                 </Form.Item>
                                

//                                 <Form.Item style={{alignContent:"center", justifyContent:"center", textAlign:"center"}}>
//                                     <Text type="danger">{this.state.error}</Text>
//                                 </Form.Item>
                                
//                                 <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//                                     <Button type="primary" htmlType="submit" loading={this.state.loading}>
//                                         Submit
//                                     </Button>
//                                 </Form.Item>
//                             </Form>
//                         </Card>
//                         <div className="w-100 text-center mt-2">
//                             <Link to={urls.home}>Homepage</Link>
//                         </div>
//                     </Col>
//                 </Row>
//             </Content>

//         );
//     }
// }

// export default Login;