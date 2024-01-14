import React from "react";

const TabButton = ({active, selectedTab, children}) => {

    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]'
    return (
        <button onClick={selectedTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton;
