import React from 'react';
import './header-component.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {FormControl, Form} from 'react-bootstrap'

class HeaderComp extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/farms">Farms</Nav.Link>
                        <Nav.Link href="/lienhe">Lien He</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info" href="/login">Login</Button>
                    </Form>
                </Navbar>
                </div>
            </React.Fragment>
        )
    }
}
export default HeaderComp