
import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import './App.css';
import Card from 'react-bootstrap/Card'
import LoginForm from './LoginForm';

function App() {
    const admin = {
      email:'admin@admin.com',
      password:'admin123'
    }

    const [user ,setUser] = useState({name: "", email: ""});
    const [error ,setError] = useState("");

    const Login = details => {
  
      if(details.email == admin.email && details.password == admin.password){
        setUser({
          name: details.name,
          email:details.email
        });
      }

      else{
         setError("Your Credentials Are Incorrect");
      }
    }

    const GoBack = () =>{
     setUser({name: "", email: ""});
    }
  return (
   <>
    {(user.email != "") ? (
       <Card className="text-center">
       <Card.Header>Welcome to the React Login App</Card.Header>
       <Card.Body>
         <Card.Title className="text-success"><h1>Welcome ,  {user.name}</h1></Card.Title>
         <Button variant="outline-info my-4" onClick={GoBack}>Go Back</Button>
       </Card.Body>
       <Card.Footer className="text-muted">Get Your Gift Now!!</Card.Footer>
       </Card>
    ) : (
      <LoginForm Login={Login} error={error}/>
    )}
   </>
  );
}

export default App;
