import React from "react";

const BlogCard = ({ img, headlines }) => {
  return (
    <div className="manual-blog w-full lg:w-1/4 cursor-pointer hover:scale-105 transition duration-300 ease-in-out for_custom-blog">
      <img
        className=" h-64 md:h-96 lg:h-40 w-full"
        src={img}
        alt="img"
      />
      <h2 className="text-lg text-center font-light">{headlines}</h2>
      <p className=" text-center text-sm font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        repellendus suscipit. Rerum consequatur magni expedita.
      </p>
    </div>
  );
};

export default BlogCard;