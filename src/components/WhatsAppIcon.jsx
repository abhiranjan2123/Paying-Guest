import { whatsAppUrl,WhatsAppImage } from "../constants/constants";

const WhatsAppIcon = () => {
  return (
    <div className="w-12 h-12 bg-transparent  bottom-10 right-10 fixed   rounded-full flex justify-center items-center">
        <button
          onClick={() => {
            window.open(whatsAppUrl, "_blank");
          }}
        >
            <img src={WhatsAppImage} alt="whatsapp" className="w-10 h-10" />
        </button>
      </div>
  )
}

export default WhatsAppIcon