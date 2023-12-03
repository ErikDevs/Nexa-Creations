import { testimonial } from "@/constants/constants"
import Image from "next/image"
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CheckIcon from '@mui/icons-material/Check';
import DigitalImage from '@/public/digitalMarketing.jpg'

const Whyus = () => {
  return (
    <div className='flex mt-20'>
        <div className="xs:hidden mr-10">
            <Image src={DigitalImage}  alt="banner" />
        </div>
        <div className=''>
           <div className="flex"><CardMembershipIcon className="text-red-500 mr-4 text-md" /> <h3>Why Us</h3></div>
            <h1 className="text-4xl mt-2 font-bold">
                We do a 360 Degree Digital <br />Marketing Approach
            </h1>
            <p className="mt-4 leading-relaxed">
              Experience comprehensive 360-degree digital marketing that transforms brands.
              From captivating content to strategic SEO and ROI optimization, we redefine your online success.
              Elevate your brand with Nexa Creations today.
            </p>
            {testimonial.map(test => (
                <div key={test.key} className="flex items-center">
                    <div className="">
                    <i className="bg-red-500 px-3 rounded-md py-3 mr-4">
                        <CheckIcon className="text-white text-4xl font-bold" />
                    </i>
                    </div>
                    <div className="flex-col mt-4">
                    <h2 className="text-xl font-bold">{test.title}</h2>
                    <p className="text-sm leading-relaxed">{test.body}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Whyus