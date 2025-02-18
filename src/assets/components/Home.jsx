function Home() {
  return (
    <section className="px-4">
      <div className="w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center mt-[50px] mb-20 ">
        <div className="w-[70%] md:w-4/10 max-w-full md:order-2">
          <img
            src="Illustration.png"
            className="w-full h-fit
          "
          />
        </div>
        <div className="flex  flex-col items-center md:items-start   md:order-1 w-6/10">
          <h1 className="text-[40px] md:text-[40px] lg:text-[70px] font-bold mb-5 text-center md:text-start ">
            Navigating the <br /> digital landscape <br /> for success
          </h1>
          <p className="max-w-[450px] mb-9  md:text-xl text-center md:text-start ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-[#191A23] text-[#F3F3F3] px-[25px] py-[20px] rounded-xl cursor-pointer ">
            Book a consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
