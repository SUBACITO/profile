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

const categories: SkillCategory[] = [
    {
        title: 'FRONTEND',
        items: [
            { name: 'Next.js', icon: '/icons/nextjs-original.svg' },
            { name: 'Vue', icon: '/icons/vuejs-original.svg' },
            { name: 'React', icon: '/icons/react-original.svg' },
            { name: 'Tailwind CSS', icon: '/icons/tailwind-original.png' },
        ],
    },
    {
        title: 'BACKEND',
        items: [
            { name: 'Nest.js', icon: '/icons/nestjs-original.svg' },
            { name: 'Express.js', icon: '/icons/expressjs-original.svg' },
        ],
    },
    {
        title: 'DATABASE',
        items: [
            { name: 'PostgreSQL', icon: '/icons/elephant.png' },
            { name: 'MySQL', icon: '/icons/mysql-original.svg' },
            { name: 'MongoDB', icon: '/icons/mongodb.svg' },
            { name: 'Redis', icon: '/icons/Redis.png' }
        ],
    },
    {
        title: 'TOOLS',
        items: [
            { name: 'Git', icon: '/icons/git-original.svg' },
            { name: 'Postman', icon: '/icons/postman-original.svg' },
            { name: 'Docker', icon: '/icons/docker-original.svg' },
            { name: 'n8n', icon: '/icons/n8n-original.svg' },
        ],
    },
]

export default function SkillsModern() {
    return (
        <section className="w-full text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-14">
                    <span className="text-blue-400">My Tech Stack</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 grid-cols-1">
                    {categories.map((cat, idx) => (
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
                                {cat.items.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="flex flex-col items-center justify-center w-28 h-28 bg-gray-900/40 border border-gray-700 rounded-2xl shadow-md hover:shadow-blue-500/30 cursor-pointer backdrop-blur-md"
                                    >
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={36}
                                            height={36}
                                            className="mb-2"
                                        />
                                        <span className="text-xs text-gray-300">{skill.name}</span>
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
