import { logo,facebook,instagram,whatsapp,twitter } from "../constants/constants"

const Footer = () => {
  return (
  <footer>
    <div className='w-full h-56 bg-secondary rounded-tr-[5rem] px-10'>
        <div className="flex flex-col gap-2">
        <img src={logo} alt="logo" className="w-40 h-10 mt-5"></img>
        <p className='text-sm font-semibold'>Discover your cozy haven - where comfort meets community</p>
        <div className="font-semibold">
            <a>Terms and conditions </a>
            <a>| Policy and Privacy</a>
        </div>
        <strong>© Copyright 2024</strong>
        <div className="flex flex-row space-x-3">
            <a href="#facebook">
            <img src={facebook} alt="" className="w-7 h-7"/>
            </a>
            <a href="#facebook">
            <img src={twitter} alt="" className="w-7 h-7"/>
            </a>
            <a href="#facebook">
            <img src={instagram} alt="" className="w-7 h-7"/>
            </a>
            <a href="#facebook">
            <img src={whatsapp} alt="" className="w-7 h-7"/>
            </a>
        </div>
        </div>
    </div>
  </footer>
  )
}

export default Footer