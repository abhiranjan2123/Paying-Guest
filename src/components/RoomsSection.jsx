import { heroimage,RoomTypes } from "../constants/constants";
const RoomsSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-center">Room Details</h2>
      <p className="text-center mb-5">
        Diverse <span className="text-secondary">Living Options </span> for
        Every Lifestyle
      </p>

    <div className="flex flex-col lg:flex-row h-full lg:h-[600px]">

  
      {
        RoomTypes.map((item)=>(
          <div className=" w-full  p-3 flex  justify-center items-center lg:flex-row lg:gap-3 lg:flex">
          <div className=" h-[550px] p-2 rounded-xl shadow-md relative">
            <img
              src={item.image}
              alt=""
              width="550"
              className="object-cover h-2/3 rounded-lg"
            />
            <div className="flex w-full   font-bold text-4xl">
              <button>
                <p className="absolute top-5 left-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                    />
                  </svg>
                </p>
              </button>
              <button>
                <p className="absolute top-5 right-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </p>
              </button>
            </div>
            <div className="flex pb-10">
  
          
            <div className="py-5 space-y-3 w-full">
              <h2 className="text-2xl font-semibold text-secondary">
                {item.sharing} <span className="text-black">Sharing </span>
              </h2>
              <p className="text-xs font-semibold inline-block"> <span className="text-secondary">{item.beds}</span> Bed | <span className="text-secondary">{item.washroom}</span> Attached Bathroom | 1 Ironbox</p>
              <div className="flex flex-col gap-3  ">
              <hr className="bg-black"/>
              <p className="font-bold">Starts from : &#8377; {item.price} -/mo </p>
  
              </div>
            
            </div>
           
            <div className="absolute bottom-0 right-0 flex flex-row gap-1 font-bold ">
            
              <button className="bg-secondary p-3  rounded-tl-xl ">
                <div className="flex justify-center items-center gap-2  hover:text-white">
                  <p>Book Now</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              <button className="bg-primary p-3  rounded-tr-xl ">
                <div className="flex justify-center items-center gap-2 hover:text-secondary">
                  <p>Know More</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          </div>
  
        </div>
        ))
      }
  </div>
    
    </section>
  );
};

export default RoomsSection;
