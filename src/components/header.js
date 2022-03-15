import {Navbar,Nav} from 'react-bootstrap'
export default function Header() {
        return (
            <div>
                <Navbar expand="lg" className="nav-bar">
                    <div className="container">
                        <Navbar.Brand href="#home" className="py-0">
                        <img src="https://www.svgrepo.com/show/349301/authy.svg" alt="logo" class="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" className="px-lg-5 py-3 active">Home</Nav.Link>
                            <Nav.Link href="#link" className="px-lg-5 py-3">Products</Nav.Link>
                            <Nav.Link href="#link" className="px-lg-5 py-3">Sales</Nav.Link>
                            <Nav.Link href="#link" className="px-lg-5 py-3">News</Nav.Link>
                            <Nav.Link href="#link" className="px-lg-5 py-3">About us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </div>
                    </Navbar>
            </div>
        )
}
