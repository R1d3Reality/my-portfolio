import React from "react";

const Footer = () => {
    return (
        <footer className='footer border border-t-[#33353F] border-transparent text-white'>
            <div className='container p-12 flex flex-row justify-between'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500'>
                    PS
                </span>
                <p className='text-slate-600'>
                    All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer;