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
        <div className="flex flex-col items-center m-10">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-sm lg:text-lg text-center">
            The Cozy Luxe is a community of like-minded individuals who value
            comfort and community. We offer a range of amenities to make your
            stay as comfortable as possible.
          </p>
        </div>
      </section>

      {/* Fix Icons */}
      <BookVisitFixedIcon />
      <WhatsAppIcon />
    </>
  );
};

export default App;
