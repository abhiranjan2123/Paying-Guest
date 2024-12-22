import logo from '../assets/logo.svg';
import heroimage from '../assets/hero-image.svg';
import WhatsAppImage from '../assets/WhatsApp.svg';
import AboutUs from '../assets/aboutus-image.svg'

// gallery images import
import image1 from "../assets/gallery/image1.svg"
import image2 from "../assets/gallery/image2.svg"
import image3 from "../assets/gallery/image3.svg"

//socialmedia images

import facebook from "../assets/socialMedia/facebook.svg"
import whatsapp from "../assets/socialMedia/whatsapp.svg"
import twitter from "../assets/socialMedia/twitter.svg"
import instagram from "../assets/socialMedia/instagram.svg"



const GalleryImages =[
{
  id:1,
  src:image1,
  alt:'image1'
},
{
  id:2,
  src:image2,
  alt:'image2'
}
,{
  id:1,
  src:image3,
  alt:'image1'
},
{
  id:1,
  src:image1,
  alt:'image1'
},
{
  id:2,
  src:image2,
  alt:'image2'
}
,{
  id:3,
  src:image3,
  alt:'image3'
},
]

const RoomTypes = [

  {
    id:1,
    image:image1,
    sharing:'Single Sharing',
    Amenties:["Attached Washroom",'Study Table','Geyser'],
    price:25000
  },
  {
    id:2,
    image:image2,
    sharing:'Double Sharing',
    Amenties:["Attached Washroom",'Study Table'],
    price:15000
  },
  // {
  //   id:2,
  //   image:image2,
  //   bed:'Double Sharing',
  //   Amenties:["Attached Washroom",'Study Table','Geyser'],
  //   price:15000
  // },
  // {
  //   id:2,
  //   image:image2,
  //   bed:'Double Sharing',
  //   Amenties:["Attached Washroom",'Study Table','Geyser'],
  //   price:15000
  // }
]

const CompanyName = 'The Cozy Luxe';
const whatsAppUrl = 'https://wa.me/+919535585524?text=I%20am%20interested%20in%20your%20services';
const phoneNumberUrl = 'tel:123'; 


const NavLinks = [
  {
    name: 'Home',
    href: '#'
  },
  {
    name: 'About',
    href: '#'
  },
  {
    name: 'Amenities',
    href: '#'
  },
  {
    name: 'Gallery',
    href: '#'
  }
];


export { logo,heroimage,WhatsAppImage,facebook,twitter,instagram,whatsapp,AboutUs, GalleryImages, phoneNumberUrl,NavLinks , CompanyName,whatsAppUrl ,RoomTypes};