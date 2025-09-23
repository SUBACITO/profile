'use client'

import Image from "next/image";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import TypingText from "../Effect/TypingText";
import { motion } from 'framer-motion';
import MotionWrapper from "../Effect/MotionWrapperProps";
import NumberJump from "../Effect/NumberJump";


const bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab accusantium temporibus facere corrupti delectus sint blanditiis earum..."

export default function Profile() {
    return (
        <div className="w-full my-20">
            <div className="flex w-full md:items-center flex-col md:flex-row relative overflow-hidden">
                {/* Left */}
                <MotionWrapper duration={0.5}>
                    <div className="flex-1 text-white mb-10 px-4 md:mb-0">
                        {/* Subtitle */}
                        <MotionWrapper delay={0.1}>
                            <h3 className="text-xl md:text-2xl tracking-widest text-gray-400 mb-2">Fullstack Developer</h3>
                        </MotionWrapper>


                        {/* Main headline */}
                        <MotionWrapper animation="fadeLeft" delay={0.5}>
                            <h1 className="text-4xl md:text-7xl font-bold mb-2 tracking-wide">Hello I'm</h1>
                            <h5 className="text-4xl md:text-7xl font-bold mb-4 text-emerald-300 tracking-wide">SUBACITO</h5>
                        </MotionWrapper>


                        <MotionWrapper animation="fadeLeft" delay={1}>
                            <div className="text-sm md:text-base text-gray-400 my-4">
                                <TypingText
                                    text={bio}
                                    speed={10}
                                />
                            </div>
                        </MotionWrapper>



                        {/* Button */}
                        <MotionWrapper animation="fadeRight" delay={1.5}>
                            <div className="w-full flex flex-col sm:flex-row py-3 gap-3 sm:gap-5">
                                <button className="border border-emerald-300 rounded-lg px-5 py-3 hover:bg-emerald-800">Download CV</button>
                                <div className="flex items-center gap-5 mx-5">
                                    <button className="w-10 h-10 flex items-center justify-center border border-emerald-300 rounded-full bg-black hover:bg-emerald-800 transition-colors">
                                        <FiGithub size={24} className="text-white" />
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center border border-emerald-300 rounded-full bg-black hover:bg-emerald-800 transition-colors">
                                        <FiLinkedin size={24} className="text-white" />
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center border border-emerald-300 rounded-full bg-black hover:bg-emerald-800 transition-colors">
                                        <FiGithub size={24} className="text-white" />
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center border border-emerald-300 rounded-full bg-black hover:bg-emerald-800 transition-colors">
                                        <FiLinkedin size={24} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </MotionWrapper>

                    </div>
                </MotionWrapper>

                {/* Right */}
                <div className="flex-1 flex justify-center md:justify-end absolute md:relative opacity-40 right-[-60px] -z-10 md:opacity-100" >
                    <MotionWrapper animation="fadeRight" duration={0.5}>
                        <div className="w-80 h-80 md:w-150 md:h-150 relative">
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src="https://res.cloudinary.com/dqady8ru5/image/upload/v1758553023/Gemini_Generated_Image_8ckulq8ckulq8cku_buumyh.png"
                                    alt="Profile picture"
                                    className="object-cover rounded-lg px-4 "
                                />
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
            {/* Stats */}
            <MotionWrapper>
                <div className="w-full flex items-center justify-center md:justify-between my-20 flex-row flex-wrap gap-20 px-4 ">
                    <div className="flex">
                        <div className="flex-1">
                            <h2 className="text-5xl font-bold"><NumberJump from={0} to={5} /></h2>
                        </div>
                        <div className="flex-1 px-2">
                            <h3>Years of </h3>
                            <h3>experience</h3>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-1">
                            <h2 className="text-5xl font-bold"><NumberJump from={0} to={23} /></h2>
                        </div>
                        <div className="flex-1 px-2">
                            <h3>Projects</h3>
                            <h3>completed</h3>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-1">
                            <h2 className="text-5xl font-bold"><NumberJump from={0} to={7} /></h2>
                        </div>
                        <div className="flex-1 px-2">
                            <h3>Technologies</h3>
                            <h3>mastered</h3>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-1">
                            <h2 className="text-5xl font-bold"><NumberJump from={0} to={1000} /></h2>
                        </div>
                        <div className="flex-1 px-2">
                            <h3>Code</h3>
                            <h3>commits</h3>
                        </div>
                    </div>
                </div>
            </MotionWrapper>

        </div>
    )
}