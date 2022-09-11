import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavBar from "react-bootstrap/Navbar"
import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"

const Navigation = (props) => {


return (
    <NavBar>
        <Container>
            <NavBar.Brand as={Link} to="/login">
                Artem Lab
            </NavBar.Brand>
        </Container>
    </NavBar>
)

}

export default Navigation;