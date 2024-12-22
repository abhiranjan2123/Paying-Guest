import React from "react";

const LocationSection = () => {
  return (
    <section>
      <div className="px-10 flex flex-col gap-10 mb-10">
        <div>
          <p className="text-heading text-center">Location</p>
        </div>
        <div class="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center ">
          <div className="flex-initial bg-secondary  p-5 rounded-xl w-full h-full ">
            <div className="flex flex-row gap-4 flex-wrap">
            <div className="flex flex-col justify-start items-start p-1  bg-white rounded-lg">
                <p className="text-md font-semibold">Mail Us</p>
                <p className="truncate">thecozyluxe.gmail.com</p>
            </div>
            <div className="flex flex-col justify-start items-start  rounded-lg ">
                <p className="text-md font-semibold">Call Us</p>
                <p className="text-sm">+919535585524</p>
            </div>
          
            </div>
            

            <div className="flex flex-col justify-start items-start bg-white p-5 rounded-lg  mt-2 ">
          
              <p className="text-gray-500    ">
                The Cozy Luxe
                <br />
                Address - Maruthi Garden Layout, Rainbow Drive, Bengaluru,
                Karnataka 560035
                <br />
                Phone - 09441640280
              </p>
              <button className="bg-secondary text-white mt-5 rounded-md p-2">
                Get Directions
              </button>
            </div>

          </div>
          <div className="w-full bg-white h-72 ">
            <iframe
              className="w-full h-full aspect-square  p-2 rounded-[30px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9912315340544!2d77.68189117330213!3d12.90828491626687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae134e4d60a137%3A0x950c0b7c73b7f4de!2sSSV%20COMFORTS%20CO-LIVING%20ACCOMODATION!5e0!3m2!1sen!2sin!4v1734423847795!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
