import { Amenties } from "../constants/constants"

const AmentiesScroll = () => {
  return (

<div className="overflow-x-hidden">
    <div className="py-12 animate-marquee whitespace-nowrap ">
        {
            Amenties.map((item)=>(
                <span className="text-2xl mx-4 text-gray-400">{item}</span>
            ))
        }
	 
	    
    </div>
</div>
    
  )
}

export default AmentiesScroll