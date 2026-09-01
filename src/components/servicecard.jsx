import React from 'react'
import { motion } from 'motion/react'

const Servicecard = ({ services, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: 'easeOut'
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10'
    >

      {/* Gradient animation */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute -top-20 -right-20 opacity-30'
      />

      {/* Card content */}
      <div
        className='
          flex items-center gap-10
          p-8
          rounded-[10px]
          bg-white dark:bg-gray-900
          relative z-10
          transition-all duration-300
          hover:p-7
          hover:m-0.5
        '
      >

        {/* Icon */}
        <div className='bg-gray-100 dark:bg-gray-700 rounded-full flex-shrink-0'>

          <img
            src={services.icon}
            alt={services.titel}
            className='w-24 h-24 object-contain bg-white dark:bg-gray-900 rounded-full m-2'
          />

        </div>

        {/* Text */}
        <div className='flex-1'>

          <h3 className='font-bold text-lg'>
            {services.titel}
          </h3>

          <p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>
            {services.description}
          </p>

        </div>

      </div>

    </motion.div>
  )
}

export default Servicecard