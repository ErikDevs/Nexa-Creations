import Image from "next/image"
import Button from "./button"
import {  WhatsApp } from "@mui/icons-material"
import mediaImage from '@/public/socialMedia.jpg'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Link from "next/link";
import logo from '@/public/logo.png'
import { getIntouch, navLink, newsLetter, socialLinks } from "@/constants/constants";



const Footer = () => {
  return (
    <div className='bg-gray-700 py-8 lg:mt-20 relative text-white'>
      
          <div className='md:flex md:mx-56'>
            <Image src={mediaImage} width={400}  className="md:mr-10 border-4 mb-2 border-white drop-shadow-lg" alt="flyer" />
            <div className="flex-col px-2">
              <div className="flex mb-5">
                <AttachEmailIcon className="text-red-500" />
                <h3 className="ml-2"> Contact Us</h3>
              </div>
            <h1 className="text-4xl md:leading-normal font-bold">Have Project in Mind? <br className="hidden md:flex" /> Contact us Now & Let's Work Together</h1>
            <p className="text-md md:mt-6">We are ready to create a digital transformation for your brand. Let’s connect</p>
            <Link href='https://api.whatsapp.com/send?phone=+254797710074&text=Hello%20Welcome%20to%20Nexa%20Creation,%20We%20are%20the%20leading%20digital%20services%20agency%20ranging%20from,%20Graphic%20design,%20web%20application%20and%20websites,%20Social%20Media%20Marketing%20and%20Social%20Media%20management'>
            <Button 
             icon = { <WhatsApp /> } 
             title= "WhatsApp Us" 
            type= "butto"
            variant="bg-red-500 py-2 mt-6 mb-10"/>
            </Link>
            </div>
          </div>

          {/* bottom footer logo section */}
         
           

            {/* nav links */}
           
        
         
           <div className="md:flex block px-10 md:px-0  bg-gray-900 py-4 justify-center mt-8">
           
           <div className="md:mr-12">
              <Link className="md:flex  justify-start" href='/'>
                <Image  src={logo} width={150} />
              </Link>
            </div>
           <div className="flex-col">
              <h3 className="font-semibold mt-6 mb-2">Quick Links</h3>
             <ul>
             {navLink.map(link => (
                <Link key={link.key} href={link.href}>
                 <li className="text-sm leading-relaxed font-normal">
                  {link.label}
                </li>
                </Link>
                ))}
             </ul>
            </div>
            
           
            <div className="flex-col mt-5 md:mx-20">
                <h3 className="font-semibold">Newsletter</h3>
                {newsLetter.map(letter => (
                   <h3 className="mt-2 text-sm" key={letter.key}>
                         {letter.title}
                   </h3>
                ))}
            </div>
            <div className="flex-col mt-5 md:ml-6">
                  <h3 className="font-semibold mb-2"> Get in touch </h3>
                  {getIntouch.map(contact => (
                         <Link className="flex justify-start items-center" key={contact.key} href={contact.link}>
                         <i>{contact.icon}</i>
                         <h3 className="text-sm ml-2">{contact.title}</h3>
                         </Link>
                  ))}
              <div className="md:mt-10 mt-8 md:static flex">
              {socialLinks.map(social => (
                <Link key={social.key} href={social.href}>
                  <i className="ring-2 ring-white text-center rounded-sm px-2  py-2 ml-2" key={social.key}>
                  {social.icon}
                  </i>
                </Link>
              ))}
              </div>
            </div>
           
           </div>
  
          
    </div>
  )
}

export default Footer