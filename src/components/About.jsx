const About = () => {
  return (
    <section className="min-h-screen container mx-auto py-10">
      <div className=" flex flex-col  ">
        <div className="about-container flex gap-10 justify-between  border-t-4 border-b-4 border-b-primary py-4 border-t-primary">
          <div className="image-container-left w-[30%] h-[15rem]">
            <img
              src="../../images/about-1.webp"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="about-content w-[66%] text-[1.5rem] text-justify">
            Growing up, life was filled with simple joys and endless
            possibilities. The days were long, and the summers even longer, as
            we explored the world with wide-eyed wonder. From the first light of
            dawn to the setting sun, our childhood was a canvas painted with
            laughter, mischief, and endless adventures.
          </p>
        </div>
        <div className="about-container flex justify-between border-b-4 border-b-primary py-4 ">
          <p className="about-content w-[66%] text-[1.5rem] text-justify">
            Growing up, life was filled with simple joys and endless
            possibilities. The days were long, and the summers even longer, as
            we explored the world with wide-eyed wonder. From the first light of
            dawn to the setting sun, our childhood was a canvas painted with
            laughter, mischief, and endless adventures.
          </p>
          <div className="image-container-right  w-[30%]  h-[15rem]">
            <img
              src="../../images/about-2.webp"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
