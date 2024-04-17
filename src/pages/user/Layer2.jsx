import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../assets/images/Carousel1.jpg";
import Carousel2 from "../../assets/images/Carousel2.jpg";
import Carousel3 from "../../assets/images/Carousel3.jpg";
import NavScrollExample from "./NavscrollExample";
import TimingContact from "./TimingContact";

function Layer2() {
  return (
    <div>
      <NavScrollExample />
      <TimingContact />

      <div className="container">
        <Carousel>
          <Carousel.Item interval={5000}>
            <img src={Carousel1} height={560} width={900}></img>
            <Carousel.Caption>
              <h3>
                A university is just a group of buildings gathered around a
                library.”.
              </h3>
              <h6>― Shelby Foote</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            {/* <ExampleCarousel.Image text="Second slide" /> */}
            <img src={Carousel2}></img>
            <Carousel.Caption>
              <h3>
                Libraries always remind me that there are good things in this
                world.
              </h3>
              <h6>― Lauren Ward</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img src={Carousel3}></img>
            <Carousel.Caption>
              <h3>
                Google can bring you back 100,000 answers, a librarian can bring
                you back the right one.
              </h3>

              <h6>― Neil Gaiman</h6>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="sideTitle1">
          <div style={{ display: "grid", gap: "20px" }}>
            <h2
              style={{
                color: "#F72798",
                fontWeight: "bold",
                textShadow: "1px 1px 1px black",
              }}
            >
              Library Management
            </h2>
            <div
              style={{
                fontSize: "16.5px",
                display: "grid",
                gap: "20px",
                textAlign: "justify",
              }}
            >
              Easily catalog, track, and manage your library's resources with
              our user-friendly interface.Our comprehensive library management
              system allows you to effortlessly organize your collection of
              books, periodicals, multimedia materials, and more.
              <div style={{ fontSize: "20px" }}>FIND YOUR CURIOSITY</div>
              <div>
                Manage your inventory with ease, knowing exactly where each item
                is located within your library. Our interface is designed to be
                user-friendly, ensuring that librarians of all skill levels can
                navigate the system effortlessly, saving time and increasing
                productivity.
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: "9px" }}>
        Web designed by <b style={{ color: "#37B5B6" }}> @TECH WIZARD'S</b>
      </p>
    </div>
  );
}

export default Layer2;
