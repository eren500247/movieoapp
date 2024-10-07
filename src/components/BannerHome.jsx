import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageUrl = useSelector((state) => state.movieoData.imageUrl);
  const [currentImage, setCurrentImage] = useState(0);
  // console.log(bannerData)
  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };
  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(()=>{
    const interval = setInterval(()=>{
      if (currentImage < bannerData.length - 1) {
        handleNext()
      }
      else{
        // alert("Complete All Image")
        setCurrentImage(0)
      }
    },5000)

    return ()=> clearInterval(interval)
  },[bannerData,imageUrl,currentImage])
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              key={data.id+"bannerHome"+index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative transition-all group"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div>
                <img
                  src={imageUrl + data.backdrop_path}
                  alt="image"
                  className="h-full w-full  "
                />
              </div>

              {/* next and previous button  */}
              <div className="absolute top-0 w-full h-full hidden group-hover:lg:flex items-center justify-between px-4">
                <button
                  onClick={handlePrevious}
                  className="z-10 bg-white p-1 rounded-full text-xl text-black"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="z-10 bg-white p-1 rounded-full text-xl text-black"
                >
                  <FaAngleRight />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mx-auto ">
                <div className="w-full absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                    {data?.title || data?.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View : {Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <Link to={"/"+data?.media_type+"/"+data.id} className="bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                    Play Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
