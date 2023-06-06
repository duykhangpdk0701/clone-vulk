import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Logo from "../../assets/logo.svg";
import Button from "../common/Button";

const Footer = () => {
    return (
        <div className="bg-primary-bg_light_footer">
            <div className="max-w-[1200px] mx-auto text-primary-white py-20">
                <div className="flex pb-20">
                    <div className="w-1/5">
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
                    <div className="w-1/5">
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
                    <div className="w-1/5">
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
                    <div className="w-2/5 w">
                        <img src={Logo} alt="" className="w-11 h-11" />
                        <p className="my-4">
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
                <div className="flex justify-between ">
                    <div className="">
                        © 2020-2021 Vulk. All rights reserved.
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="bg-primary-bg_input relative border-solid border-primary-border_input border-2 py-2 pl-10 overflow-hidden rounded-lg mr-5">
                            <input
                                type="text"
                                className="bg-transparent outline-none"
                                placeholder="Email Address"
                            />
                            <span className="absolute left-3">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </div>
                        <Button text={"Subcribe"} className="px-4 py-2" primary/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
