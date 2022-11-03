import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img1 from "../public/images/1.jpg";
import img2 from "../public/images/2.jpg";
import img3 from "../public/images/3.jpg";
import img7 from "../public/images/7.jpg";
import img10 from "../public/images/10.jpg";

function Banner({BannerSliderStyle}) {
  return (
    <>
      <div style={BannerSliderStyle}>
        <Carousel
          autoPlay={true}
          centerMode={true}
          centerSlidePercentage={20}
          emulateTouch={true}
          showIndicators={false}
          
        >
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img1} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img2} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img3} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img7} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img10} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img1} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img2} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img3} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img7} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img10} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img1} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img2} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img3} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img7} />
          </div>
          <div style={{ marginRight: "30px", objectFit:'cover', height:'160px' }}>
            <Image src={img10} />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Banner;
