import { useState } from "react";
import ServiceBox from "./ServiceBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Services() {
  const [service, setService] = useState([
    {
      title: "Search engine optimization",
      titlebg: "#B9FF66",
      arrow: "greenArrow",
      bgcolor: "#F3F3F3",
      learnMore: "Learn More",
      image: "Illustration1",
    },
    {
      title: "Pay-per-click advertizing",
      titlebg: "#F3F3F3",
      arrow: "greenArrow",
      bgcolor: "#B9FF66",
      learnMore: "Learn More",
      image: "Illustration2",
    },
    {
      title: "Social Media Marketing",
      titlebg: "#F3F3F3",
      arrow: "whiteArrow",
      bgcolor: "#191A23",
      learnMore: "Learn More",
      image: "Illustration3",
    },
    {
      title: "EmaIl Marketing",
      titlebg: "#B9FF66",
      arrow: "greenArrow",
      bgcolor: "#F3F3F3",
      learnMore: "Learn More",
      image: "Illustration4",
    },
    {
      title: "Content Creation",
      titlebg: "white",
      arrow: "greenArrow",
      bgcolor: "#B9FF66",
      learnMore: "Learn More",
      image: "Illustration5",
    },
    {
      title: "Analytics and Tracking",
      titlebg: "#B9FF66",
      arrow: "whiteArrow",
      bgcolor: "#191A23",
      learnMore: "Learn More",
      image: "Illustration6",
    },
  ]);
  return (
    <section>
      <div className="w-[80%]  mx-auto gap-5 ">
        <Slider {...settings}>
          {service.map((item) => (
            <ServiceBox
              key={item}
              title={item.title}
              titlebg={item.titlebg}
              arrow={item.arrow}
              bgcolor={item.bgcolor}
              learnMore={item.learnMore}
              image={item.image}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Services;
