import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Logo from "../../assets/logo.svg";
import ButtonBase from "@/components/Common/ButtonBase";

const Footer = () => {
    return (
        <div className="bg-primary-bg_light_footer">
            <div className="max-w-[1200px] mx-auto text-primary-white py-20">
                <div className="flex flex-wrap pb-20">
                    <div className="w-1/3 md:w-1/5 text-center md:text-left">
                        <h3 className="mb-6 font-light">Discover</h3>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Get Started
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Product
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Sign In
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/3 md:w-1/5 text-center md:text-left">
                        <h3 className="mb-6 font-light">Company</h3>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Company
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Training
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Contract
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/3 md:w-1/5 text-center md:text-left">
                        <h3 className="mb-6 font-light">Support</h3>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Guides
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    API Docs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-normal hover:text-primary-purple opacity-80"
                                >
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-2/5 text-center md:text-left mt-6">
                        <img
                            src={Logo}
                            alt="Vulk"
                            className="w-11 h-11 mx-auto md:ml-0"
                        />
                        <p className="my-4 mx-3 md:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Negare non possum. Apparet statim, quae sint
                            officia, quae actiones.
                        </p>
                        <div className="">
                            <a
                                href="#"
                                className="hover:text-primary-purple mr-6"
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary-purple mr-6"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary-purple mr-6"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary-purple mr-6"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between ">
                    <div className="w-full md:w-auto text-center md:text-left mb-2">
                        © 2020-2021 Vulk. All rights reserved.
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-between mx-auto max-w-[300px] md:max-w-auto ">
                        <div className="w-full md:w-auto bg-primary-bg_input relative border-solid border-primary-border_input border-2 py-2 pl-10 overflow-hidden rounded-lg mr-0 md:mr-5 mb-2">
                            <input
                                type="text"
                                className="bg-transparent outline-none"
                                placeholder="Email Address"
                            />
                            <span className="absolute left-3">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </div>
                        <ButtonBase
                            text={"Subcribe"}
                            className="px-4 py-2 w-full md:w-auto"
                            primary
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
