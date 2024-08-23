const GalleryItem = ({ item }) => {
  return (
    <div className={`item${item.id}`}>
      <span>{item.title}</span>
      <img src={item.src} alt={item.title} />
    </div>
  );
};

export default GalleryItem;
