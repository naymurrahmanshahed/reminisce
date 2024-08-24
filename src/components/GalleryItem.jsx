const GalleryItem = ({ item }) => {
  return (
    <div className={`item${item.id} w-full h-full overflow-hidden`}>
      <span className="text-xl font-semibold text-primary">{item.title}</span>
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default GalleryItem;
