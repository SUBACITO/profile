'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Skill {
    name: string
    icon: string
}

interface SkillCategory {
    title: string
    items: Skill[]
}

interface SkillProps{
    skillCategory : SkillCategory[]
}

export default function SkillsModern({skillCategory} : SkillProps) {
    return (
        <section className="w-full text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-14">
                    <span className="text-blue-400 uppercase">Những công nghệ đang sử dụng</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 grid-cols-1">
                    {skillCategory.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-gray-400 text-xl font-semibold mb-6 tracking-wide">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {cat.items.map((skillCategory, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="flex flex-col items-center justify-center w-28 h-28 bg-gray-900/40 border border-gray-700 rounded-2xl shadow-md hover:shadow-blue-500/30 cursor-pointer backdrop-blur-md"
                                    >
                                        <Image
                                            src={skillCategory.icon}
                                            alt={skillCategory.name}
                                            width={36}
                                            height={36}
                                            className="mb-2"
                                        />
                                        <span className="text-xs text-gray-300">{skillCategory.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
