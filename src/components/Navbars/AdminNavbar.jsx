import React from "react";

// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  NavLink,
  Nav,
  Container,
  Media
} from "reactstrap";

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <a
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              href="./index.html"
            >
              Dashboard
            </a>

            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>

            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <NavLink
                  aria-expanded={false}
                  aria-haspopup={true}
                  className="pr-0"
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  role="button"
                >
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </span>

                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        Jessica Jones
                      </span>
                    </Media>
                  </Media>
                </NavLink>

                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>

                  <DropdownItem href="./examples/profile.html">
                    <i className="ni ni-single-02" />

                    <span>My profile</span>
                  </DropdownItem>

                  <DropdownItem href="./examples/profile.html">
                    <i className="ni ni-settings-gear-65" />

                    <span>Settings</span>
                  </DropdownItem>

                  <DropdownItem href="./examples/profile.html">
                    <i className="ni ni-calendar-grid-58" />

                    <span>Activity</span>
                  </DropdownItem>

                  <DropdownItem href="./examples/profile.html">
                    <i className="ni ni-support-16" />

                    <span>Support</span>
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-user-run" />

                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;