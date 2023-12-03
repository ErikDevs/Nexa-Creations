import Image from "next/image"
import Button from "./button"
import { WhatsApp } from "@mui/icons-material"
import mediaImage from '@/public/socialMedia.jpg'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Link from "next/link";
import logo from '@/public/logo.png'
import { getIntouch, navLink, newsLetter, socialLinks } from "@/constants/constants";


const Footer = () => {
  return (
    <div className='bg-gray-700 py-20 mt-20 text-white'>
          <div className='flex  mx-[10%]'>
            <Image src={mediaImage} className="w-[50%] mr-4" alt="flyer" />
            <div className="flex-col">
              <div className="flex mb-5">
                <AttachEmailIcon className="text-red-500" />
                <h3 className="ml-2"> Contact Us</h3>
              </div>
            <h1 className="text-4xl leading-relaxed font-bold">Have Project in Mind? <br />Contact Now, & Let's <br />Work Together</h1>
            <p className="text-md mt-10">We are ready to create a digital transformation <br /> for your brand. Let’s connect</p>
            <Link href='https://api.whatsapp.com/send?phone=797710074&text=Hello%20Welcome%20to%20Nexa%20Creation,%20We%20are%20the%20leading%20digital%20services%20agency%20ranging%20from,%20Graphic%20design,%20web%20application%20and%20websites,%20Social%20Media%20Marketing%20and%20Social%20Media%20management'>
            <Button 
            icon = {<WhatsApp />} 
            title= "WhatsApp Us" 
            type= "butto"
            variant="bg-red-500 px-5 py-2 mt-12"/>
            </Link>
            </div>
          </div>
          <div className="flex mx-[10%] justify-center mt-10">
            <div className="flex-col">
              <Link href='/'><Image src={logo} className="w-[40%]" /></Link>
              <h3 className="text-sm ml-5 -mt-4 leading-relaxed mb-10">At Nexa Creations Agency, Our core is to create <br /> digital transformation for your brand.</h3>
              {socialLinks.map(social => (
                <Link key={social.key} href={social.href}>
                  <i className="ring-2 ring-white text-center rounded-sm px-2 py-2 ml-5" key={social.key}>
                  {social.icon}
                  </i>
                </Link>
              ))}
            </div>
            <div className="flex-col ml-5 mt-10">
              <h3 className="font-semibold">Quick Links</h3>
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
            <div className="flex-col ml-20 mt-10">
                  <h3 className="font-semibold mb-2">Get in touch</h3>
                  {getIntouch.map(contact => (
                         <Link className="flex" key={contact.key} href={contact.link}>
                         <i>{contact.icon}</i>
                         <h3 className="text-sm mt-2 ml-2">{contact.title}</h3>
                         </Link>
                  ))}
            </div>
            <div className="flex-col mt-10 ml-20">
                <h3 className="font-semibold">Newsletter</h3>
                {newsLetter.map(letter => (
                   <h3 className="mt-2 text-sm" key={letter.key}>
                         {letter.title}
                   </h3>
                ))}
            </div>
          </div>
    </div>
  )
}

export default Footer