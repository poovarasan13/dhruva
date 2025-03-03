import React from 'react'
import { useNavigate } from 'react-router-dom';
const RegisterButton = () => {
    const navigate = useNavigate();
    const handleRegister=()=>{
      navigate('/registration');
    }
    
  return (
    <div>
            <div className=" md:mt-6 flex justify-center lg:justify-center mb-2 md:mb-0">
        <button
          onClick={handleRegister}
          className="w-40 sm:w-50 md:w-50 lg:w-60 h-12 sm:h-14 md:h-14 flex items-center justify-center rounded-full border-2 border-sky-600 bg-[linear-gradient(110deg,#38bdf8,45%,#0ea5e9,55%,#38bdf8)] bg-[length:200%_100%] px-8 font-bold text-white text-xl md:text-2xl lg:text-3xl  transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:border-white hover:bg-[linear-gradient(110deg,#0ea5e9,45%,#38bdf8,55%,#0ea5e9)] focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-400 animate-shimmer"
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default RegisterButton
