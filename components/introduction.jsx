import Button from '@/components/button'
import { specialization } from '@/constants/constants'
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const Introduction = () => {
  return (
    <div id="aboutus" className='mt-10 md:flex'>
        
        
        <div className='flex-col md:w-[60%]'>
        
        <div className='flex items-center md:justify-start justify-center'>
        <LoyaltyIcon className='text-red-500 text-2xl'/>
        <h3 className='ml-2 text-sm'>What We Do</h3>
        </div>

        <h1 className='md:text-5xl text-4xl font-bold text-center md:text-left leading-36 mt-2'>We are the best in giving Marketing Solutions to all Business</h1>
        <p className='font-normal mt-4 leading-7 text-center md:text-left'>Welcome to Nexa Creations – Your one-stop Destination for Digital Marketing and Graphic Design in Kenya. We specialize in driving online success through strategic digital marketing campaigns tailored to the Kenyan market.
        </p>
        <p className='font-normal mt-2 leading-7 text-center md:text-left' >At Nexa Creations, we’re more than just a service provider – we’re your partners in growth. Our dedication to enhancing your brand’s visibility and impact in Kenya is reflected in our innovative digital marketing solutions and stunning graphic designs.</p>
        
        {/* quote button section */}
        <div className='flex justify-center md:justify-start'>
        <Button 
         title= 'Get a quote' 
         variant = "outline-none w-fit border-2 border-gray-700 rounded-none px-3 py-2 mt-12 font-semibold"/>
        </div>
        </div>

        <div className='md:m-4 flex-col '>
            {specialization.map(service => (
              <div key={service.key} className= 'hover:bg-white hover:drop-shadow-2xl mt-4 px-4 py-6 md:px-5 md:mx-16  flex'>
              <div className="flex items-center">
                <i className='text-white bg-red-500 rounded-md px-2 py-2'>{service.icon}</i>
              </div>
              <div className=' ml-5 flex flex-col'>
                <h2 className='md:text-2xl text-lg font-semibold text-gray-700 '>{service.title}</h2>
                <p className='text-sm leading-loose'>{service.body}</p>
              </div>
              </div>
            ))}
        </div>

    </div>
  )
}

export default Introduction