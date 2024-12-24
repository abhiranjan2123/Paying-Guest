import { GalleryImages } from "../constants/constants";

const GallerySection = () => {
  return (
    <section>
      <div className=" text-center relative">
        <h2 className="text-3xl font-semibold ">Gallery</h2>
        <p className=""> 
            Come <span className="text-secondary">
             live the new kind
          </span>  of Living
        </p>
      
        <div className=" rounded-2xl ">
          <div className="">
            <div className="flex p-8 overflow-x-scroll space-x-5 no-scrollbar ">
              {GalleryImages.map((image) => {
                return (
                  <div
                    key={image.id}
                    className="flex-shrink-0 ring-1 ring-[#C58F2B] rounded-xl  "
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-72 h-[400PX] p-4 rounded-3xl object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
              <div className="text-center font-bold text-secondary ">
                <button>
                  <p className="">View More &#8605; </p>
                 
                </button>
              </div>
      </div>
    </section>
  );
};

export default GallerySection;
