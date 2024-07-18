import { useState } from 'react'
import Slider from "react-slick";
import image_two from '../assets/home2.jpg'
import image_three from '../assets/home3.jpg'
import image_four from '../assets/home4.jpg'
import image_five from '../assets/home5.jpg'
const SliderSection = () => {
    const [dotActive, setDotActive] = useState<number>(0)
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_prev: number, next: number) => {
            setDotActive(next)
        },
          customPaging: (i: number) => (
            <div
              style={
                i === dotActive 
                ? {
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    background: "#131921",
                    padding: "8px 0",
                    cursor: "pointer",
                    border: "1px solid #f3a847",
                  } 
                : {
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#232F3E",
                    color: "white",
                    padding: "8px 0",
                    cursor: "pointer",
                    border: "1px solid white",
                  }
              }
            >
              {i + 1}
            </div>
          ),
          responsive:[
            {
              breakpoint: 576,
              settings: {
                dots: false,

                customPaging: (i: number) => (
                  <div
                    style={
                      i === dotActive 
                      ? {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          background: "#131921",
                          padding: "8px 0",
                          cursor: "pointer",
                          border: "1px solid #f3a847",
                        } 
                      : {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#232F3E",
                          color: "white",
                          padding: "8px 0",
                          cursor: "pointer",
                          border: "1px solid white",
                        }
                    }
                  >
                    {i + 1}
                  </div>
                ),
              }
            }
          ]
      };
  return (
    <section className='w-full mt-[-20px] md:h-[600px]'>
        <article className='w-full'>
            <Slider {...settings}>
                <div className='w-full md:h-[600px] relative'>
                    <img src={image_five} alt="image_one" className='w-full' />
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full z-10'>
                        <h2 className='text-white text-xl sm:text-3xl md:text-6xl text-center font-bold'>
                        Reading a book is like
                        <br />
                        Re Writing it for yourself
                        </h2>
                    </div>
                </div>
                <div className='w-full md:h-[600px] relative'>
                    <img src={image_two} alt="image_one" className='w-full' />
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full z-10'>
                        <h2 className='text-black text-xl sm:text-3xl md:text-6xl text-center font-bold'>
                        Reading a book is like
                        <br />
                        Re Writing it for yourself
                        </h2>
                    </div>
                </div>
                <div className='w-full md:h-[600px] relative'>
                    <img src={image_three} alt="image_one" className='w-full' />
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full z-10'>
                        <h2 className='text-black text-xl sm:text-3xl md:text-6xl text-center font-bold'>
                        Reading a book is like
                        <br />
                        Re Writing it for yourself
                        </h2>
                    </div>
                </div>
                <div className='w-full md:h-[600px] relative'>
                    <img src={image_four} alt="image_one" className='w-full' />
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full z-10'>
                        <h2 className='text-white text-xl sm:text-3xl md:text-6xl text-center font-bold'>
                        Reading a book is like
                        <br />
                        Re Writing it for yourself
                        </h2>
                    </div>
                </div>
            </Slider>
        </article>
    </section>
  )
}

export default SliderSection