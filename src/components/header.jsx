import logo from '../assets/icones/logo.svg'
import search from '../assets/icones/search.svg'
import cart from '../assets/icones/cart.svg'
import person from '../assets/icones/person.svg'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="flex items-center justify-between w-full py-11 px-24 header-container max-w-screen-2xl m-auto">
            <div className="flex">
                <img className="mr-12" src={logo} alt="logo" />

                <ul className="flex">
                    <li className="mr-12 text-gray-700">
                        <Link className="font-medium" to="/">Home</Link>
                    </li>
                    <li className="mr-12 text-[#8F8F8F]">
                        <Link className="font-medium">Products</Link>
                    </li>
                    <li className="mr-12 text-[#8F8F8F]">
                        <Link className="font-medium">Contacts</Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center">

                <div className="relative mr-12">
                    <input type="text" className="border border-gray-300 rounded-xl px-4 py-2 w-80 placeholder-gray-700" placeholder="What are you looking for?" />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <img src={search} alt="search" />
                    </span>
                </div>

                <img src={cart} alt="icon cart" className="mr-12" />
                <Link to="/login">
                    <img src={person} alt="icon person" />
                </Link>
            </div>

        </header>
    )
}