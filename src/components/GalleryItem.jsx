import { forwardRef } from "react";

const GalleryItem = forwardRef(({ item }, ref) => {
  return (
    <div
      ref={ref}
      className={`item${item.id} w-full h-full overflow-hidden relative`}
    >
      <span className="text-xl font-semibold text-primary">{item.title}</span>
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
});
GalleryItem.displayName = "GalleryItem";

export default GalleryItem;
