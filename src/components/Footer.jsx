import React from 'react'
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa"
import { Fade } from 'react-awesome-reveal'

function Footer() {
    return (
        <footer id='contact' className=' relative h-[65vh] text-white mt-24 flex justify-center items-center flex-col gap-2'>
            <div className="logo rounded-full">
                <img className='w-24 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="logo" />
            </div>
            <Fade delay={300}>
                <h1 className='text-[2.1rem] font-[monospace] font-bold'>Medellin-Tours.com</h1>
            </Fade>
            <small>Medellin Ethiopia</small>
            <a className='hover:text-[#fba61b]' href='tel:+251965302420'>+251928376***</a>
            <a className='text-[#fba61b] text-md' href="mailto:emyayehenok@gmail.com">example@gmail.com</a>
            <div className=' flex gap-3 text-lg '>
                <a className='text-gray-200 hover:text-[#fba61b]' href=""><FaTelegram /></a>
                <a className='text-gray-200 hover:text-[#fba61b]' href=""><FaInstagram /></a>
                <a className='text-gray-200 hover:text-[#fba61b]' href=""><FaFacebook /></a>
            </div>
            <p className='md:text-lg text-sm'>Copyright © 2023 medellin-tours.com All right reserved.</p>
            <p className='text-sm absolute bottom-1'>Developed By:
                <span><a className='text-[#fba61b] text-md hover:opacity-80' href="https://"> Henok </a></span>&
                <span><a className='text-[#fba61b] text-md hover:opacity-80' href="https://"> Ezra </a></span>
            </p>
        </footer>
    )
}

export default Footer
