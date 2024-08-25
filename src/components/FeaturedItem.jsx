import { forwardRef } from "react";
import { Link } from "react-router-dom";

const FeaturedItem = forwardRef(({ item }, ref) => {
  return (
    <div
      ref={ref}
      key={item.id}
      className="flex-shrink-0 w-full flex gap-5 md:gap-10 items-center justify-center"
    >
      <div className="featured-image w-[30%] overflow-hidden">
        <img src={item.imgurl} className="w-full" alt={`Featured ${item.id}`} />
      </div>
      <div className="featured-content flex flex-col w-[40%]">
        <h3 className="text-[3vw]">{item.title}</h3>
        <Link className="featured-link text-xl">Explore More</Link>
      </div>
    </div>
  );
});
FeaturedItem.displayName = "FeaturedItem";
export default FeaturedItem;
