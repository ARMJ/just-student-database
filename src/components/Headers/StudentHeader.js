

// reactstrap components
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";

const StudentHeader = () => {
  const [username] = useState(localStorage.getItem('username') || "#");
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-7" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello {username}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page.
              </p>
              {/* <Button
                color="info"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default StudentHeader;
