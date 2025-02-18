import { useState } from "react";

function Sponsors() {
  const [images, setImages] = useState([
    { img: "cl1.png" },
    { img: "cl2.png" },
    { img: "cl3.png" },
    { img: "cl4.png" },
    { img: "cl5.png" },
    { img: "cl6.png" },
  ]);
  return (
    <section className="w-[85%] mx-auto mb-15 ">
      <div className=" flex md:flex-row justify-around items-center  flex-wrap">
        {images.map((item) => (
          <img
            className="mx-[23px] my-[10px] grayscale cursor-pointer"
            key={item}
            src={`${item.img}`}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

export default Sponsors;
