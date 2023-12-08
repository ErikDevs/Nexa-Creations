import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import MonitorIcon from '@mui/icons-material/Monitor';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import GoogleIcon from '@mui/icons-material/Google';
import LanguageIcon from '@mui/icons-material/Language';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ScienceIcon from '@mui/icons-material/Science';
import AdbIcon from '@mui/icons-material/Adb';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import AddBoxIcon from '@mui/icons-material/AddBox';


  const size = "text-4xl"
  const counterSize = "text-4xl"


export const navLink = [
    {href: '/', key: 'home', label: "Home"},
    {href: '#aboutus', key: 'about', label: "About Us"},
    {href: '/#what-we-do', key: 'work', label: "What We Do"},
    {href: '/portfolio', key: 'portifolio', label: "Portfolio"},
    {href: '/#price', key: 'Pricing', label: "Pricing"},
    {href: '/#blog', key: 'blog', label: "Blog"},
    {href: '/#contact', key: "contact", label: 'Contact Us'}
]

export const conatct = [
    {name: "+254 797 710 074", icon: <PhonelinkRingIcon className='text-white text-4xl' />,},
    {name: "Instagram", icon: <InstagramIcon className='text-white text-4xl' />,},
    {name: "Behance", icon: <AddBoxIcon className='text-white text-4xl' />,},
]

export const services = [
    {href: '#socialmedia', key: 'digitalmaketing', label: 'Digital Marketing'},
    {href: '#graphics', key: 'design', label: 'Graphic Design'},
    {href: '#socialmedia', key: 'socialmedia', label: 'Social Media Management'},
    {href: '#seo', key: 'seo', label: 'SEO Marketing'},
    {href: '#webdev', key: 'web-design', label: 'Web Development'},
    {href: '#what-we-do', key: 'others', label: "+Many More"}
]

export const acomplishments =  [
    {name: 'Completed Projects', start: 100, stop: 500, key: 'projects', icon: <AssignmentLateIcon className= {counterSize} />},
    {name: 'Satisfied Clients',start: 0, stop: 100, key: 'clients', icon: <TagFacesIcon className= {counterSize} />},
    {name: 'Years of Experience', start: 0, stop: 8, key: 'experience', icon: <WorkHistoryIcon  className= {counterSize} />},
]

export const specialization = [
    {title: "Social Media Management", icon: <WorkIcon className='text-4xl' />, key: 'socialmedia', body: "Elevate your social media game! We manage, engage, and boost your brand to success." },
    {title: "Graphic Design", icon: <MonitorIcon className='text-4xl' />, key: 'grapgicdesign', body: "Unleash your brand's potential with our exceptional graphic design. Stand out and make a statement that captivates." },
    {title: "Digital Transformations", icon: <TipsAndUpdatesIcon className='text-4xl' />, key: 'digitaltransformation', body: "We carve digital marketing strategy around target audience and channels that gives the best conversion in real terms." },
]

export const testimonial = [
    {title: "We are Diversified", body: "We offer a total digital transformation package for your business. From building a brand from scratch to driving massive recognition online.", key: "diverse" },
    {title: "Efficient & Detailed", body: "We are efficient & Detail oriented in what we do. We deliver exceptionally and as per the stipulated time. No delays when you choose to work with Nimus.", key: "efficiency" },
    {title: "100% Transparency", body: "We believe in complete transparency with our clients and we keep them fully updated during the entire process of execution.", key: "transparency" },
]

export const cards = [
    {title: "Social Media Marketing", body: "Unlock the power of social platforms! Our Social Media Marketing services engage your audience, boost brand awareness, and drive conversions. From content creation to community management, we've got your social success covered.", 
    href: "socialmedia", icon: <WorkHistoryIcon className= {size} />, key: "socialmedia"},
    {title: "Google & YouTube Advertising", body: "Reach the right audience at the right time! Leverage the vast reach of Google & YouTube through our expert advertising strategies. Drive targeted traffic, increase conversions, and maximize ROI with precision targeting.", 
    href: "google", icon: <GoogleIcon className= {size} />, key: "google"},
    {title: "Website Development", 
    body: "Make an impactful online debut with our stunning WordPress Website Designs. Combining aesthetics with functionality, we create user-friendly sites that enhance your brand's digital presence and drive engagement.", 
    href: "webdev", icon: <LanguageIcon className= {size} />, key: "wordpress"},
    {title: "Search Engine Optimization (SEO)", body: "Climb the search rankings effortlessly! Our SEO experts optimize your website for higher visibility and organic traffic. Stay ahead in search results and dominate your industry online.", 
    href: "seo", icon:<ContentPasteSearchIcon className= {size} />, key: "ecommerce"},
    {title: "ECommerce Website Design", body: "Turn browsers into buyers with our eCommerce Website Designs. We craft seamless, secure, and visually appealing online stores that provide exceptional shopping experiences and boost sales.",
    href: "ecom", icon: <ShoppingCartCheckoutIcon className= {size} />, key: "seo"},
    {title: "Printing & Branding Services", body: "Make your brand tangible! Our Printing & Branding Services bring your vision to life through captivating designs on various materials. Elevate your brand identity and leave a lasting impression.", 
    href: "branding", icon: <LocalPrintshopIcon className= {size} />, key: "printing"},
    {title: "Experiential Marketing Services", body: "Create memorable brand experiences! Our Experiential Marketing Services design interactive campaigns that captivate audiences and establish strong emotional connections with your brand.", 
    href: "marketing", icon: <LocalConvenienceStoreIcon className= {size} />, key: "marketing"},
    {title: "Ads Management", body: "Optimize your ad campaigns for success! Our Ads Management services fine-tune your campaigns for maximum impact. From budget allocation to targeting, we ensure your ads yield impressive results.", 
    href: "ads", icon: <AdbIcon className= {size} />, key: "ads"},
    {title: "UI/UX Design", body: "Craft exceptional user experiences! Our UI/UX Design services focus on creating user-centric designs that enhance usability, engagement, and overall satisfaction across digital platforms.", 
    href: "ui", icon: <ViewQuiltIcon className= {size} />, key: "ui"},
    {title: "Brand Identity Design", body: "Stand out from the crowd with a strong brand identity! Our Brand Identity Design services create a cohesive visual identity that communicates your values, mission, and uniqueness effectively.", 
    href: "branding", icon: <FolderSpecialIcon className= {size} />, key: "brand"},
    {title: "Graphic Design", body: "Visual communication at its finest! Our Graphic Design services transform ideas into visually appealing designs that resonate with your audience, conveying messages that leave a lasting impact.", 
    href: "graphics", icon: <ScienceIcon/>, key: "graphicdesign"},
    {title: "Training & Consultation", body: "Empower your team with our tailored Training & Consultation services. From digital marketing strategies to skill enhancement, we equip your team with the tools they need to excel in the digital landscape.",
    href: "#training", icon: <ModelTrainingIcon className= {size} />, key: "traning"},
]

export const callToAction = [
    {title: "What we've done", href: '/portfolio', variant: "bg-red-500 text-white mt-4"},
    {title: "Pricing", href: '#price', variant: "bg-transparent text-red-500 mt-4"},
]

export const getIntouch = [
    {title: "Thika Makongeni",link: "", key: 'location', icon: <EditLocationAltIcon className='text-red-500' />},
    {title: "0797710074",  link: "tel:+2540797710074", key: 'tell', icon: <AddIcCallIcon className='text-red-500'/>},
    {title: "info@nexacreations", link: "", key: 'mail', icon: <MarkEmailReadIcon className='text-red-500' />},
]

export const newsLetter = [
    {title: 'Logo Design Services', key: "logo"},
    {title: 'Social Media Management', key: "manager"},
    {title: 'Social Media Design', key: "media"},
    {title: 'Web Design & Development', key: "web"},
    {title: 'Search Engine Optimization', key: "seo"},
]

export const socialLinks = [
    {name: "facebook", key:"facebook", href: "facebook.com", icon: <FacebookIcon />},
    {name: "instagram", key: 'facebook', href: "intagram.com", icon: <InstagramIcon/>},
    {name: "youtube", key: 'facebook',   href: "youtube.com", icon: <YouTubeIcon/>},
    {name: "linkedin", key: 'facebook',  href: "linkedin.com", icon: <LinkedInIcon/>},
]

export const Pricing = [
{title: "Basic Package", bg: "bg-red-500", descs: "ideal for small & mid-sized brands", price: 20, 
package: ["facebook + instagram + twiiter", "Custom Digital Strategy", "16 Campaign Posts", "Themed 30-Day Content Calendar"
, " Promote Website, Page/ Handle, Services & Products", "30 Branded Posts", "Targeted Advertising", "Social Media Manager"
, "Inbound Marketing Strategy", "Hashtag Management", " 20 Stories (FB & IG)", "Custom Posting Times", "Monthly Report", "Average No. of Expected Qualified Leads (20)" ]},

{title: "Premium Package", bg: "bg-gray-700", descs: "Ideal for startups (Most popular)", price: 45, package: [" Facebook + Instagram + Twitter + LinkedIn + YouTube", " Custom Digital Strategy", "12 Campaign Posts", "Themed 30-Day Content Calendar", 
" Promote Website, Page/ Handle, Services & Products", "16 Branded Posts", "Campaign A/B Testing & Data Analysis", "Social Media Manager", "Inbound Marketing Strategy", 
"Hashtag Management", "16 Stories (FB & IG)", " Custom Posting Times", "Monthly Report", "Average No. of Expected Qualified Leads (KPI-based)"]},

{title: "Diamond Package", bg: "bg-red-500", descs: "For established businesses", price: 70, package: 
[" Facebook + Instagram + Twitter", "Custom Digital Strategy", "12 Campaign Posts", "Themed 30-Day Content Calendar", "Promote Website, Page/ Handle, Services & Products",
 " 8 Branded Posts", "Targeted Advertising", " Social Media Manager", "Inbound Marketing Strategy", "Hashtag Management", "12 Stories (FB & IG)", "Custom Posting Times", "Monthly Report", "Average No. of Expected Qualified Leads (20)"]}

]