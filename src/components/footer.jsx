import logo from '../assets/icones/logo.svg';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#C1DCDC] p-12">
            <div className="max-w-screen-2xl py-11 px-24 flex justify-between">
                <div className="">
                    <img className="mb-6" src={logo} alt="Logo" />
                    <p className="mb-6 text-gray-700 font-normal">We help you find <br />
                        your dream plant</p>

                    <button className="rounded-full p-2 border border-solid border-gray-600 mr-3">
                        <FaFacebookF className="text-2xl" />
                    </button>

                    <button className="rounded-full p-2 border border-solid border-gray-600 mr-3">
                        <FaInstagram className="text-2xl"/>
                    </button>
                    
                    <button className="rounded-full p-2 border border-solid border-gray-600">
                        <FaTwitter className="text-2xl" />
                    </button>
                    
                    <p className="mt-20 text-gray-700 font-normal">2023 all Right Reserved Term of use GREENMIND</p>
                </div>

                <div className="flex space-x-16">
                    <div>
                        <h4 className="font-bold mb-4">Information</h4>
                        <ul>
                            <li className="mb-3">
                                <a className="text-gray-600" href="">About</a>
                            </li>
                            <li className="mb-3">
                                <a className="text-gray-600" href="">Product</a>
                            </li>
                            <li>
                                <a className="text-gray-600" href="">Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul>
                            <li className="mb-3">
                                <a className="text-gray-600" href="">Community</a>
                            </li>
                            <li className="mb-3">
                                <a className="text-gray-600" href="">Career</a>
                            </li>
                            <li>
                                <a className="text-gray-600" href="">Our history</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
