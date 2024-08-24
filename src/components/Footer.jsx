const Footer = () => {
  return (
    <section className="footer text-center ">
      <h1 className="font-bodoni lowercase text-[10vw] text-primary">
        Bienvenue
      </h1>
      <p>&copy; {new Date().getFullYear()} Reminisce. Crafted by yours truly</p>
    </section>
  );
};

export default Footer;
