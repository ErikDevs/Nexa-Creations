import Button from '@/components/button'
import { specialization } from '@/constants/constants'
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const Introduction = () => {
  return (
    <div id="aboutus" className='mt-20 flex'>
        <div className='lg:max-w-[600px]'>
        <div className='flex items-center'>
        <LoyaltyIcon className='text-red-500 text-2xl'/>
        <h3 className='ml-2 text-sm'>What We Do</h3>
        </div>
        <h1 className='text-5xl font-bold leading-36 mt-2'>We are the best in giving Marketing Solutions for any kind of Business</h1>
        <p className='font-normal mt-4 leading-7'>Welcome to Nexa Creations – Your one-stop Destination for Digital Marketing and Graphic Design in Kenya. We specialize in driving online success through strategic digital marketing campaigns tailored to the Kenyan market.
        </p>
        <p className='font-normal mt-2 leading-7' >At Nexa Creations, we’re more than just a service provider – we’re your partners in growth. Our dedication to enhancing your brand’s visibility and impact in Kenya is reflected in our innovative digital marketing solutions and stunning graphic designs.</p>
        <Button 
         title= 'Get a quote' 
         variant = "outline-none border-2 border-gray-700 rounded-none px-3 py-2 mt-12 font-semibold"/>
        </div>
        <div className='lg:max-w-[500px] ml-20 mt-2 flex-col '>
            {specialization.map(service => (
              <div key={service.key} className= 'hover:bg-white hover:drop-shadow-2xl mt-4 px-4 py-6  flex'>
              <div className="flex items-center">
                <i className='text-white bg-red-500 rounded-md px-2 py-2'>{service.icon}</i>
              </div>
              <div className=' ml-5 flex flex-col'>
                <h2 className='text-2xl font-semibold text-gray-700 '>{service.title}</h2>
                <p className='text-sm leading-loose'>{service.body}</p>
              </div>
              </div>
            ))}
        </div>

    </div>
  )
}

export default Introduction