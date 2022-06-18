import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

function HeaderMenu() {
  console.log("loadded");
  return (
    <Navbar container="md" color="light" expand="md" light>
      <NavbarBrand href="/">Graphql Example</NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <NavLink href="/new">New Post</NavLink>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
}

export default HeaderMenu;
