import React from 'react'
import Titel from './Titel'
import assets from '../assets/assets/assets'
import {motion} from 'motion/react'

const Ourwork = () => {

    const workData= [
        {
            titel:'Mobile App Marketing',
            description:'We turn bold ideas into powerful diigital solutions that connect, engage...',
            Image:assets.work_mobile_app
        },
          {
            titel:'Dashboared Managment',
            description:'We help you execute your plan and diliver results.',
            Image:assets.work_dashboard_management
        },
          {
            titel:'Fitness App Managment',
            description:'We help you create a marketing stratagy that drives results.',
            Image:assets.work_fitness_app
        }
    ]
  return (
    <motion.div 
    
      initial="hidden"
     whileInView="visible"
     viewport={{once: true}}
      transition={{staggerChildren: 0.2}}

    id='Our-Work'  className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px:24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
       
        <Titel titel=' Our latest work'  desc=' From stratagy to
         execution, we craft digital solutions that 
        move your bussiness forward.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                 workData.map(( work, index) =>

                   <motion.div
                    
     initial={{opacity:0, y:30}}
     whileInView={{opacity: 1, y:0}}
     transition={{duration:0.5, delay: index * 0.2}}
     viewport={{once: true}}
                 
                   
                   key={index}  className='hover:scale-102 duration-500 transition-all
                   cursor-pointer'>
                    <img  src={work.Image}  className='w-full rounded-xl'  alt=''  />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'> { work.titel}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>

                   </motion.div>

                )
            }


        </div>
      
    </motion.div>
  )
}

export default Ourwork
