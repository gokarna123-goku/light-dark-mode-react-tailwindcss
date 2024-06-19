import React from 'react';
import { FaBars, FaPhone } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import ThemeToggle from '../theme/ThemeToggle';
// import ThemeSwitcher from '../theme/ThemeSwitcher';


const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/portfolio', label: 'Portfolio' },
    ];

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <nav className='w-full h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50'>
            {/* Logo Section */}
            <Link to="/" className='text-4xl text-neutral-800 dark:text-neutral-200 font-bold mr-16'>
                {/* <img src={Logo} alt="logo" className="w-28 h-auto object-contain" /> */}
                <h1 className="">
                    Navbar
                </h1>
            </Link>
            {/* Toggle button */}
            <button
                onClick={handleClick}
                className='flex-1 lg:hidden text-neutral-600 dark:text-neutral-300 hover:text-violet-600 ease-in-out duration-300 flex items-center justify-end'
            >
                {open ? <LiaTimesSolid className='text-xl' /> : <FaBars className='text-xl' />}
            </button>

            <div
                className={`${open ? 'flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative' : 'hidden'
                    } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-neutral-100 md:shadow-none sm:shadow-md shadow-md rounded-md`}
            >
                <ul className='list-none flex md:items-center sm:items-start items-start gap-x-5 gap-y-1 flex-wrap md:flex-row sm:flex-col flex-col text-base text-neutral-600 dark:text-neutral-500 font-medium'>
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link
                                to={item.href}
                                onClick={handleClose}
                                className='hover:text-violet-600 ease-in-out duration-300'
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='flex md:items-center sm:items-start items-start gap-x-5 gap-y-2 flex-wrap md:flex-row sm:flex-col flex-col text-base font-medium text-neutral-800'>
                    <button className='bg-violet-600 px-4 py-2 rounded-full border border-violet-600 text-sm text-neutral-50 font-medium hover:bg-violet-600/5 hover:text-violet-600 ease-in-out duration-300'>
                        Get Started
                    </button>

                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;