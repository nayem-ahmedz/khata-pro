import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";
import { LangContext } from "../context/LangContext";

export default function Header() {
    const { t } = useTranslation();
    const { lang, toggleLanguage } = useContext(LangContext);
    const navLinks = <>
        <li> <NavLink to='/' className='text-base'> {t('home')} </NavLink> </li>
        <li> <NavLink to='/about' className='text-base'> {t('about')} </NavLink> </li>
        <li> <NavLink to='/contact' className='text-base'> {t('contact')} </NavLink> </li>
    </>;
    return (
        <header className="bg-base-100 shadow-sm">
            <nav className="navbar containerr">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl md:text-2xl"> {t('brand')} </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <select value={lang} onChange={(e) => toggleLanguage(e.target.value)} className="btn btn-outline px-2 py-1 rounded">
                        <option value="en">English</option>
                        <option value="bn">বাংলা</option>
                    </select>
                    <Link to='/auth/login' className="btn btn-primary"> {t('login')} </Link>
                </div>
            </nav>
        </header>
    );
}