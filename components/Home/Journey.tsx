'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface Step {
  title: string
  description?: string
  date?: string
  icon?: React.ReactNode
}

interface JourneyProps {
  steps: Step[]
}

export default function Journey({ steps }: JourneyProps) {

 return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4 mb-50">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase">Hành trình của mình</h2>

      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300" />

      <div className="flex flex-col space-y-16">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0
          return (
            <motion.div
              key={index}
              className={`relative flex items-center justify-${isLeft ? 'start' : 'end'} w-full`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-1/2 ${
                  isLeft ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}
              >
                <h3 className="text-xl font-semibold">{step.title}</h3>
                {step.date && (
                  <p className="text-sm text-gray-500 mb-2">{step.date}</p>
                )}
                {step.description && (
                  <p className="text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

