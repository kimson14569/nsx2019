import React from 'react'
import Card from 'react-bootstrap/Card'
import {Form, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './login.scss'

class LoginPages extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="main-login">
                    <Card>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Email
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Password
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit" href="/home">Sign in</Button>
                            </Col>
                        </Form.Group>
                        </Form>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginPages