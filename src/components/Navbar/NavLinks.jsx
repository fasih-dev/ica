import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for better active link styling
import { links } from "./Mylinks";

const getSubmenuStyle = (submenuType) => {
    switch (submenuType) {
        case "Contact Us":
            return {
                width: '8rem',
            };
        case "Student Services":
            return {
                width: '20rem',
            };
        default:
            return {
                width: submenuType === "Programme & Courses" ? '52rem' : '24rem',
            };
    }
};

const NavLinks = ({ closeMobileNav }) => {

    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    const handleNavLinkClick = () => {
        closeMobileNav(); // Close mobile navigation when link is clicked
    };

    return (
        <>
            {links.map((link) => (
                <div key={link.name}>
                    <div className="px-3 text-left lg:cursor-pointer group lg:border-none  border border-gray-300 md:py-2 ">
                        <h1
                            className="pb-4 flex justify-between items-center pr-5 group"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >

                            {link.name}
                            <span className="text-xl lg:hidden inline ">
                                <ion-icon
                                    name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}
                                ></ion-icon>
                            </span>
                            <span className="text-xl lg:mt-1 lg:ml-2 lg:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                <ion-icon name="chevron-down"></ion-icon>
                            </span>
                        </h1>
                        {link.submenu && (
                            <div className="relative">
                                <div
                                    className={`absolute z-50 hidden group-hover:lg:block hover:lg:block border border-inherit`}
                                    style={getSubmenuStyle(link.name)}
                                >
                                    <div className="py-3">
                                        <div
                                            className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"
                                        ></div>
                                    </div>
                                    <div className={link.name === 'Student Services' || link.name === 'Contact Us' ? 'bg-white p-5 grid grid-cols-1' : 'bg-white p-5 grid grid-cols-2 gap-10'}>
                                        {link.sublinks.map((mysublinks) => (
                                            <div key={mysublinks.Head}>
                                                <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
                                                {mysublinks.sublink && mysublinks.sublink.length > 0 && (
                                                    <ul>
                                                        {mysublinks.sublink.map((slink) => (
                                                            <li key={slink.name} className="text-sm text-gray-600 my-2.5 hover:bg-lime-700 px-2 py-2 hover:text-white">
                                                                <NavLink to={slink.link} onClick={handleNavLinkClick} className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>
                                                                    {slink.name}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div
                        className={`
                            ${heading === link.name ? "lg:hidden" : "hidden"} 
                        `}
                    >
                        {link.sublinks.map((slinks) => (
                            <div key={slinks.Head} >
                                <h1
                                    onClick={() =>
                                        subHeading !== slinks.Head
                                            ? setSubHeading(slinks.Head)
                                            : setSubHeading("")
                                    }
                                    className="py-4 pl-7 font-semibold lg:pr-0 pr-5 flex justify-between items-center  border border-gray-300"
                                >
                                    {slinks.Head}
                                    <span className="text-xl inline">
                                        <ion-icon
                                            name={`${subHeading === slinks.Head ? "chevron-up" : "chevron-down"}`}
                                        ></ion-icon>
                                    </span>
                                </h1>
                                <div
                                    className={`${subHeading === slinks.Head ? "" : "hidden"} `}
                                >
                                    {slinks.sublink && slinks.sublink.length > 0 && (
                                        <ul>
                                            {slinks.sublink.map((slink) => (
                                                <li key={slink.name} className="py-3 pl-14 border border-gray-300">
                                                    <NavLink to={slink.link} onClick={handleNavLinkClick}>{slink.name}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </>
    );
};

export default NavLinks;
