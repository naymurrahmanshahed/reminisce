const Hero = () => {
  return (
    <div className="grid grid-cols-12 min-h-[calc(100vh-179px)] grid-rows-6 font-baijamjuree uppercase text-[5.5vw] font-semibold leading-tight text-darker relative">
      <h3 className="col-start-2 row-start-1 col-end-6">Wonder</h3>
      <h3 className="col-start-6 row-start-3 col-end-6">Discovery</h3>
      <h3 className="col-start-4 row-start-5 col-end-6">Magic</h3>
      <div className="photos">
        <div
          className="photo one"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo two"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5336487/pexels-photo-5336487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div
          className="photo three"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4200745/pexels-photo-4200745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
