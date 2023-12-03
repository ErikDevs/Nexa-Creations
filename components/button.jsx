
const Button = ({type, title, icon, variant}) => {
  return (
    <button 
      type= {type}
      className={`flex gap-3 cursor-pointer rounded-sm px-20 py-2 border-2 border-red-500 ${variant}`}>
      {icon} <label htmlFor="button">{title}</label>
    </button>
  )
}

export default Button