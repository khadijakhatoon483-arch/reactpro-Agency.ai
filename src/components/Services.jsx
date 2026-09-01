import React, { useState } from 'react'
import assets from '../assets/assets/assets'
import Titel from './Titel'
import { motion } from 'motion/react'

const servicesData = [
  {
    titel: 'Advertising',
    description:
      'We turn bold ideas into powerful digital solutions that connect, engage...',
    icon: assets.ads_icon
  },
  {
    titel: 'Content Marketing',
    description:
      'We help you execute your plan and deliver results.',
    icon: assets.marketing_icon
  },
  {
    titel: 'Content Writing',
    description:
      'We help you create a marketing strategy that delivers results.',
    icon: assets.content_icon
  },
  {
    titel: 'Social Media',
    description:
      'We help you build a strong social media presence and engage with your audience.',
    icon: assets.social_icon
  }
]

function Services() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  // Mouse position
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: 50
    },

    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div

      id="services"

      variants={variants}

      initial="hidden"

      whileInView="visible"

      transition={{
        duration: 0.8
      }}

      viewport={{
        once: true
      }}

      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >

      {/* Background Image */}

      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-10 -left-20 -z-10 dark:hidden"
      />


      {/* Title */}

      <Titel
        titel="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />


      {/* Services Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">

        {servicesData.map((service, index) => (

          <motion.div

            key={index}

            variants={variants}

            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}

            onMouseMove={handleMouseMove}

            className="
              group relative
              flex items-center gap-5
              p-6
              rounded-2xl
              border border-gray-200
              dark:border-white/20
              bg-white/50 dark:bg-white/5
              cursor-pointer
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-lg
            "
          >

            {/* Mouse Following Border */}

            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                border: '2px solid transparent',

                background: `radial-gradient(
                  60px circle at ${mousePosition.x}px ${mousePosition.y}px,
                  #3b82f6,
                  transparent 70%
                ) border-box`,

                mask:
                  'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',

                maskComposite: 'exclude'
              }}
            />


            {/* Icon */}

            <div
              className="
                flex-shrink-0
                w-14 h-14
                flex items-center justify-center
                rounded-xl
                bg-gray-100 dark:bg-white/10
                transition-all duration-300
                group-hover:bg-blue-500
                group-hover:scale-110
              "
            >

              <img
                src={service.icon}
                alt={service.titel}
                className="w-8 h-8 transition-all duration-300"
              />

            </div>


            {/* Text */}

            <div>

              <h3 className="text-xl font-medium mb-2">
                {service.titel}
              </h3>

              <p className="text-sm text-gray-500 dark:text-white/70">
                {service.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </motion.div>
  )
}

export default Services