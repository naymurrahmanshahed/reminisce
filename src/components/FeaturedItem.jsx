import { forwardRef } from "react";
import { Link } from "react-router-dom";

const FeaturedItem = forwardRef(({ item }, ref) => {
  return (
    <div ref={ref} key={item.id} className="featured-item">
      <div className="featured-image ">
        <img
          src={item.imgurl}
          className="w-full h-full object-cover"
          alt={`Featured ${item.id}`}
        />
      </div>
      <div className="featured-content ">
        <h3 className="text-[2rem]">{item.title}</h3>
        <Link className="featured-link text-[1rem]">Explore More</Link>
      </div>
    </div>
  );
});
FeaturedItem.displayName = "FeaturedItem";
export default FeaturedItem;
