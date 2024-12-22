import  aboutUs  from '../assets/aboutus-image.svg'

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center m-10  lg:flex lg:flex-row-reverse gap-10 ">
     

    <div className="flex flex-col items-start space-y-3 lg:items-start lg:flex">
      <h2 className="text-2xl font-bold mb-2"><span >About  </span> Us</h2>
      <div className="text-gray-700 space-y-3  text-justify whitespace-normal">
        <p className="text-sm lg:text-lg lg:text-left">
          Welcome to The Cozy Luxe, where luxury meets comfort and
          convenience. We specialize in providing premium, fully-furnished
          accommodation designed exclusively for women who value
          sophistication, security, and style.
        </p>

        <p className="text-sm lg:text-lg lg:text-left">
          At The Cozy Luxe, we believe that a home away from home should
          be more than just a place to stay. That’s why we’ve meticulously
          crafted our spaces to combine elegance and functionality,
          ensuring our residents experience a lifestyle of unparalleled
          comfort.
        </p>
      </div>
    </div>
    <div className=" ">
      <img src={aboutUs} alt="aboutus" className='w-80 h-80 object-cover lg:w-full lg:h-full' />
    </div>
  </div>
  )
}

export default AboutUs