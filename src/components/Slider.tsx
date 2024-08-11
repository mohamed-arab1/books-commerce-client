import { useState } from "react";
import ReactSlider from "react-slick";

import dotsStyle from "./Slider.module.css";

const pagingStyle = (active: boolean) => ({
  borderRadius: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: active ? "black" : "white",
  background: active ? "#f3a847" : "#556170a4",
  padding: "8px",
  cursor: "pointer",
  // border: "1px solid #f3a847",
});

type SliderSectionProps = {
  dots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  infinite?: boolean;
  autoplay?: boolean;
  children: React.ReactNode[];
};

export const Slider = ({
  dots = false,
  slidesToShow = 1,
  slidesToScroll = 1,
  arrows = false,
  infinite = true,
  autoplay = true,
  children,
}: SliderSectionProps) => {
  const [dotActive, setDotActive] = useState<number>(0);
  const calcNewSlidesCount = (value: number) =>
    slidesToShow > value ? value : slidesToShow;
  const settings = {
    slidesToScroll,
    slidesToShow,
    infinite,
    autoplay,
    arrows,
    dots,
    beforeChange: (_prev: number, next: number) => {
      setDotActive(next / slidesToScroll);
    },
    customPaging: (i: number) => (
      <div style={pagingStyle(i === dotActive)}></div>
    ),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: calcNewSlidesCount(2),
          slidesToScroll: calcNewSlidesCount(2),
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: calcNewSlidesCount(1),
          slidesToScroll: calcNewSlidesCount(1),
          dots: false,
        },
      },
    ],
  };
  return (
    <article className="w-full mt-[-20px] md:h-[600px]">
      <ReactSlider className={dotsStyle.container} {...settings}>
        {children}
      </ReactSlider>
    </article>
  );
};
