import { Slider } from "./Slider";
import image_two from "../assets/home2.jpg";
import image_three from "../assets/home3.jpg";
import image_four from "../assets/home4.jpg";
import image_five from "../assets/home5.jpg";
type Slide = {
  id: number;
  image: string;
  title: string;
};
const slides: Slide[] = [
  {
    id: 1,
    image: image_two,
    title: "Reading a book is like Re Writing it for yourself",
  },
  {
    id: 2,
    image: image_three,
    title: "Unlock the Secrets Hidden in Every Story",
  },
  {
    id: 3,
    image: image_four,
    title: "Dive into Worlds Beyond Imagination",
  },
  {
    id: 4,
    image: image_five,
    title: "Discover Yourself in the Heart of a Book",
  },
];

const HeroSectionSlider = () => {
  return (
    <Slider slidesToShow={1}>
      {slides.map((slide) => (
        <div key={slide.id} className="w-full md:h-[600px] relative">
          <img src={slide.image} alt={slide.title} className="w-full" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full z-10">
            <h2 className="text-gray-50 bg-opacity-25 p-4 rounded-lg bg-black text-xl sm:text-3xl md:text-6xl text-center font-bold">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSectionSlider;
