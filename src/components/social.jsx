"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Social = () => {

    const socialVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                staggerDirection: 1,
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

  return (
    <motion.div className='flex items-center gap-2' variants={socialVariants} initial="hidden" animate="visible">
        <motion.a href='https://www.facebook.com' variants={socialVariants} target='_blank' rel='noreferrer' className='text-2xl text-blue-500 hover:text-blue-700'>
            <FaFacebook />
        </motion.a>
        <motion.a href='https://www.instagram.com' variants={socialVariants} target='_blank' rel='noreferrer' className='text-2xl text-pink-500 hover:text-pink-700'>
            <FaInstagram />
        </motion.a>
        <motion.a href='https://www.twitter.com' variants={socialVariants} target='_blank' rel='noreferrer' className='text-2xl text-blue-400 hover:text-blue-600'>
            <FaTwitter />
        </motion.a>
        <motion.a href='https://www.linkedin.com' variants={socialVariants} target='_blank' rel='noreferrer' className='text-2xl text-blue-700 hover:text-blue-900'>
            <FaLinkedin />
        </motion.a>
        <motion.a href='https://www.github.com' variants={socialVariants} target='_blank' rel='noreferrer' className='text-2xl text-gray-800 hover:text-gray-900'>
            <FaGithub />
        </motion.a>
    </motion.div>
  )
}

export default Social;