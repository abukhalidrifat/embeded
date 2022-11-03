import styles from "../styles/Banner.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img1 from "../public/images/1.jpg";
import img2 from "../public/images/2.jpg";
import img3 from "../public/images/3.jpg";
import Slider from "../Components/Slider";
import FAQ from "./../Components/FAQ";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Banner() {
  return (
    <>
      <div>
        <Navbar/>
        <Carousel
          autoPlay={true}
          renderArrowNext={() => false}
          renderArrowPrev={() => false}
        >
          <div>
            <div className={styles.imgovertxt}>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
                optio, id eligendi animi architecto eius cupiditate cum
                asperiores sequi! Ullam tenetur dicta officia, nulla totam
                expedita? Eaque, fugiat cum.
              </p>
            </div>
            <Image src={img1} style={{ height: "100vh" }} />
          </div>
          <div>
            <div className={styles.imgovertxt}>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
                optio, id eligendi animi architecto eius cupiditate cum
                asperiores sequi! Ullam tenetur dicta officia, nulla totam
                expedita? Eaque, fugiat cum.
              </p>
            </div>
            <Image src={img2} style={{ height: "100vh" }} />
          </div>
          <div>
            <div className={styles.imgovertxt}>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
                optio, id eligendi animi architecto eius cupiditate cum
                asperiores sequi! Ullam tenetur dicta officia, nulla totam
                expedita? Eaque, fugiat cum.
              </p>
            </div>
            <Image src={img3} style={{ height: "100vh" }} />
          </div>
        </Carousel>
      </div>
      <Slider
        BannerSliderStyle={{
          width: "85%",
          margin: "auto",
          position: "absolute",
          left: "10%",
          bottom: "-36px",
        }}
      />

      {/* START HERE */}
      <div style={{ width: "90%", margin: "auto", marginTop: "230px" }}>
        <h2 style={{ color: "white", marginBottom: "40px" }}>Start Here</h2>
        <Slider />
      </div>
      {/* Expert */}
      <div style={{ width: "90%", margin: "auto", marginTop: "150px" }}>
        <h2 style={{ color: "white", marginBottom: "40px" }}>Expert</h2>
        <Slider />
      </div>
      {/* Expert */}
      <div style={{ width: "90%", margin: "auto", marginTop: "150px" }}>
        <h2 style={{ color: "white", marginBottom: "40px" }}>Expert</h2>
        <Slider />
      </div>
      {/* Expert */}
      <div style={{ width: "90%", margin: "auto", marginTop: "150px" }}>
        <h2 style={{ color: "white", marginBottom: "40px" }}>Expert</h2>
        <Slider />
      </div>

      <div style={{ width: "85%", margin: "auto", marginTop: "150px" }}>
        <h2 style={{ color: "white", marginBottom: "40px" }}>
          Frequently Asked Questions
        </h2>
        <FAQ
          qs={"How long do I have access in this course?"}
          ans={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nesciunt blanditiis, ipsam consequuntur praesentium minus voluptates quaerat sint dolorum odit autem ut! Facilis nulla doloremque praesentium hic modi ipsam nesciunt?"
          }
        />
        <FAQ
          qs={"How long do I have access in this course?"}
          ans={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nesciunt blanditiis, ipsam consequuntur praesentium minus voluptates quaerat sint dolorum odit autem ut! Facilis nulla doloremque praesentium hic modi ipsam nesciunt?"
          }
        />
      </div>
      <Footer/>
    </>
  );
}
export default Banner;
