import React, { useEffect, useState } from "react";
const names = [
  "WIN_20230707_20_36_32_Pro.jpg",
  "WIN_20230707_20_36_35_Pro.jpg",
  "WIN_20231124_10_35_23_Pro.jpg",
  "WIN_20240207_21_22_03_Pro.jpg",
  "WIN_20240408_19_12_06_Pro.jpg",
];
//TOdo :change names whenever change in gallery
function Gallery() {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    const func = async () => {
      let __pics = [];
      for (let name of names) {
        let x =await import("../../assets/gallery/" + name)
        __pics.push(x.default);
      }
      setPics(__pics);
    };
    func();
  }, []);
  return (
    <div className="w-full h-full d-center d-ends stack bg-black text-white">
      <h1 className="d-center">Gallery</h1>
      <div className="d-center stack gap-4 p-3 m-3">
        {pics.map((e) => (
          <img src={e} alt={e}/>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
