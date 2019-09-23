import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import {Button, Form, Row, Container, Col} from 'react-bootstrap';
import {HashRouter, Route, Switch} from 'react-router-dom';

//import GiraffeStore from "./stores/GiraffeStore";
import './App.css';

//const giraffeStore = new GiraffeStore();

function App() {
  return (
  <HashRouter>
      <Switch>
          <Route path={"/about"} component={About}/>
          <Route path={"/about/:text"} component={About}/>
          <Route render={()=> <h1>404</h1>}/>
      </Switch>

      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HelloDevOps React</h1>
        <p>Kursus - Kompleksesystemer og DevOps</p>
        <p>Lesson 03 - React app</p>
        <p>23. September 2019</p>
      </header>
        <body className="App-body">
          <Container>
              <div>
                  <Row>
                      <Col xs={6}><Form.Group controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter name here" />
                      </Form.Group></Col>
                      <Col xs={6}><Button variant="primary">Enter</Button></Col>
                  </Row>

              </div>
      </Container>
        </body>
    </div>
  </HashRouter>
  );
}

const About = ({match})=> {
    console.log(match)
    return <div>
        <h1>About {match.params.text}</h1>
        <Button onClick={()=> window.history.pushState("/", "Modified browser entry", "about:blank")} variant="secondary">Modify browser history</Button>
    </div>
}

export default App;
