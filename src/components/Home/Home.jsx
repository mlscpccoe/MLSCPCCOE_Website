import React from "react";
import { motion } from "framer-motion";
import instagramicon from "../../../public/instagram-grey-outline-22754.png"
import facebookicon from "../../../public/183973_facebook_social network_logo_icon.png"
import linkedinicon from "../../../public/linkedin-3-512.png"
import twittericon from "../../../public/twitter-512.png"

const Home = () => {
    return (
        <div className="absolute w-full h-full flex justify-center items-center bg-white">
            <motion.section
                className="w-full h-screen flex flex-col md:flex-row"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center p-4">
                    <p>3-D</p>
                </div>
                <div className="w-full md:w-1/2 bg-white p-8 flex flex-col items-end m-8 mt-16">
                    <h2
                        className="text-6xl font-bold mb-4 text-right mb-8 w-4/6"
                        style={{ fontFamily: "Patrick Hand, cursive" }}
                    >
                        <div>We are MLSC-</div>
                        <div className="mt-4">PCCoE</div>
                    </h2>
                    <p
                        className="text-5xl mb-4 text-right w-9/12"
                        style={{ fontFamily: "Abel, sans-serif", fontSize: "28px" }}
                    >
                        We think slightly out of the box, we believe that a club’s resources must not only be
                        channeled into conducting events but also to propagate learning and teaching, symbiotically.
                    </p>
                    <p
                        className="text-5xl mb-4 text-right w-9/12 mt-4"
                        style={{ fontFamily: "Abel, sans-serif", fontSize: "28px" }}
                    >
                        That said, we conduct Flagship events such as DevJams, Hexathon, and WomenTechies, and tons of insightful workshops!
                    </p>

                    <div className="flex space-x-4 mt-8">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={instagramicon} alt="instagram icon" className="w-12"/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={facebookicon} alt="facebook icon" className="w-12"/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinicon} alt="linkedin icon" className="w-12"/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={twittericon} alt="twitter icon" className="w-12"/>
                        </a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
