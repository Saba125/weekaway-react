const Hero = () => {
  return (
    <div className="w-full bg-rose-500 h-[90vh]">
      <img className="w-full h-full object-cover" src="/unsplash.avif" alt="" />
      <div>
        <div className="max-w-[1140px] m-auto">
          <div className="top-[40%] absolute  w-full max-w-[600px] h-full flex flex-col p-4  text-white">
            <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
            <h2 className="text-4xl py-4 italic">With WEEKAWAY.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores ducimus inventore iste non distinctio id dolorem
              numquam, illum reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
