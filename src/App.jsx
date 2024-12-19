import BookVisitFixedIcon from "./components/BookVisitFixedIcon";
import NavBar from "./components/NavBar";
import ScheduleVisitForm from "./components/ScheduleVisitForm";
import WhatsAppIcon from "./components/WhatsAppIcon";

const App = () => {
  return (
    <>
      {/* <div className='w-auto h-5 bg-secondary rounded-b-lg'><p className='text-xs text-white text-nowrap text-center font-bold'>Discover your cozy haven - where comfort meets community &#128293;</p></div> */}
      <NavBar />

      <div className="w-auto mt-20 h-auto bg-hero bg-cover bg-center lg:bg- rounded-2xl m-2">
        <div className="flex flex-col justify-center items-center lg:flex lg:flex-row gap-y-10">
          <div className="flex flex-col justify-center items-center lg:items-start lg:ml-20">
            <h1 className="text-xl lg:text-4xl mt-10 font-bold text-white">
              Book Your Perfect Stay
            </h1>
            <p className="text-sm lg:text-xl text-white">
              Your cozy haven - where comfort meets community
            </p>
          </div>
          <ScheduleVisitForm />
        </div>
      </div>
      <section>
        <div className="flex flex-col items-center m-10  lg:flex lg:flex-row-reverse gap-10 ">
     

          <div className="flex flex-col items-center lg:items-start lg:flex">
            <h2 className="text-2xl font-bold mb-2">About Us</h2>
            <div className="text-gray-700">
              <p className="text-sm lg:text-lg text-center lg:text-left">
                Welcome to The Cozy Luxe, where luxury meets comfort and
                convenience. We specialize in providing premium, fully-furnished
                accommodation designed exclusively for women who value
                sophistication, security, and style.
              </p>

              <p className="text-sm lg:text-lg text-center lg:text-left">
                At The Cozy Luxe, we believe that a home away from home should
                be more than just a place to stay. That’s why we’ve meticulously
                crafted our spaces to combine elegance and functionality,
                ensuring our residents experience a lifestyle of unparalleled
                comfort.
              </p>
            </div>
          </div>
          <div className="w-full h-64 bg-about bg-cover"></div>
        </div>
      </section>

      {/* Fix Icons */}
      <BookVisitFixedIcon />
      <WhatsAppIcon />
    </>
  );
};

export default App;
