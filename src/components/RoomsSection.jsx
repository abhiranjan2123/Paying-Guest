import { RoomTypes } from "../constants/constants";

const RoomsSection = () => {
  return (
    <section>
      <div className="pb-10">
        <div className="px-10  bg-secondary">
          <p className="text-heading text-center"> Room Types</p>
        </div>
        <div className="flex gap-x-10 overflow-x-auto px-10 no-scrollbar">
          {RoomTypes.map((item, index) => (
            <div className="mt-6 w-full flex justify-center ">
              <div className="w-96 h-72 bg-white rounded-3xl lg:w-96 lg:h-60 ">
                <div className="flex flex-row h-full">
                  <div className=" w-1/2 p-3">
                    <img
                      src={item.image}
                      alt="room"
                      className="w-52 h-full rounded-xl object-cover flex-shrink-0"
                    />
                  </div>
                  <div className="flex flex-col space-y-3 p-4 items-baseline">
                    <p className="font-semibold text-xs  truncate">
                      {item.sharing}
                    </p>
                    <div className="flex flex-col gap-y-2">
                    {item.Amenties.map((i, k) => (
                      
                      <p className="min-w-full bg-gray-400 rounded-3xl text-white text-center p-2 text-xs">
                        {i}
                      </p>
                   
                  ))}
                    </div>
                  
                  <div className="">
                  <p className="text-xs font-bold ">
                      Starts From <code> &#8377;</code>
                      {item.price} /mo
                    </p>
               
                  </div>
                  <button className=" bg-secondary rounded-lg p-2">
                      <p>Book Now</p>
                    </button>
                  </div>

                 
                  
                </div>
            
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
