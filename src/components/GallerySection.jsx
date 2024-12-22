import { GalleryImages } from "../constants/constants"

const GallerySection = () => {
  return (
    <section>
        <div className="px-10 space-y-5 py-10">
            <p className="text-heading text-center">Gallery</p>
            <div className=" w-auto h-96 rounded-2xl ">
                <div>
                    <div className="flex p-10 overflow-x-scroll space-x-5 no-scrollbar ">
                        {GalleryImages.map((image) => {
                            return (
                                <div key={image.id} className="flex-shrink-0 ring-1 ring-[#C58F2B] rounded-xl  " >
                                    <img src={image.src} alt={image.alt} className="w-60 h-80 p-4 rounded-3xl object-cover" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GallerySection