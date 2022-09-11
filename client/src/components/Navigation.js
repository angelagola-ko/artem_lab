import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavBar from "react-bootstrap/Navbar"
import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import Auth from "../utils/auth";

const Navigation = (props) => {


return (
    <NavBar>
        <Container>
            <NavBar.Brand as={Link} to="/">
                Artem Lab
            </NavBar.Brand>

            <Nav.Link href="#home" as={Link} to="/">
                Home
            </Nav.Link>

            {Auth.loggedIn() ? (
                <>
                <Nav.Link href="#draw" as={Link} to="/draw">
                    Draw
                </Nav.Link>
                </>
            ) : (
                <>
                <Nav.Link href="#login" as={Link} to="/login">
                    Login
                </Nav.Link>
                <Nav.Link href="#signup" as={Link} to="/signup">
                    Sign Up
                </Nav.Link>
                </>
            )}
        </Container>
    </NavBar>
)

}

export default Navigation;