const Button = ({ name, className }) => {
  return (
    <button
      className={`${className} rounded-lg text-white flex justify-start items-center h-12`}
    >
      {name}
    </button>
  );
};

export default Button;
