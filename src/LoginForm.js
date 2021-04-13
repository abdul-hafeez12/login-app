import React,{useState} from 'react'
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from  'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
function LoginForm({Login,error}) {
     
       const [details,setDetails] = useState({name: "", email: "" ,password: ""}); 

       const submitHandler = e => {
           e.preventDefault();
           Login(details);
       }

    return (
        <Container>
             <h2 className="text-center mt-5"> Simple Login Form App</h2>
        <Form onSubmit={submitHandler}>
               {(error !="") ? (<div className="text-danger text-center my-3">{error}</div>) : ""}  

               <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" onChange={e =>setDetails({...details,name: e.target.value})} value={details.name}/>
                </Form.Group>  
               <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={e =>setDetails({...details,email: e.target.value})} value={details.email}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e =>setDetails({...details,password: e.target.value})} value={details.password} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
       </Form>
      </Container>
      
    );
}

export default LoginForm;
