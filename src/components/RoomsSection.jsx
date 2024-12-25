import { RoomTypes } from "../constants/constants";
import { CarouselCustomNavigation } from "./Carousel";
import {BoltIcon,ArrowRightIcon} from '@heroicons/react/24/solid'

const RoomsSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-center">Room Details</h2>
      <p className="text-center mb-5">
        Diverse <span className="text-secondary">Living Options </span> for
        Every Lifestyle
      </p>

      <div className=" p-4 flex flex-col items-center gap-3 lg:flex-row">

        {
          RoomTypes.map((item)=>(
<div className="w-full h-full bg-primary shadow-2xl rounded-xl">
          <div className="relative h-full w-full">
            <CarouselCustomNavigation images={item.image} />
          </div>
          <div className="flex flex-col p-4 gap-3">
            <h1 className="text-2xl font-semibold">
              <span className="text-secondary">{item.sharing}</span> Sharing{" "}
            </h1>
            <p className="text-sm "> 
              <span className="text-secondary">{item.beds}</span> Bed | <span className="text-secondary">{item.washroom}</span>
              Attached Bathroom | <span className="text-secondary">1</span> Ironbox
            </p>
            <hr className="bg-gray-600" height="2px" />
            <h6 className="font-bold">Starts From  &#8377;  <span className="text-secondary">{item.price}</span> - / Mo </h6>

          </div>
          <div className="flex flex-row justify-end flex-nowrap  font-bold">
            <div className="flex flex-row flex-nowrap"> 
            <button className="bg-secondary p-4 rounded-tl-lg">Book Now <BoltIcon className="inline-block w-5 h-5"/> </button>
            <button className="bg-white p-4 rounded-tr-lg">Know More <ArrowRightIcon className="w-5 h-5 inline-block"/></button>
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
