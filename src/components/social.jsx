"use client";
import Link from 'next/link';
import { socialLinks} from '@/components/datas/data';
import { motion } from 'framer-motion';

const Social = ({className}) => {

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
    <motion.div className="flex items-center gap-5" variants={socialVariants} initial="hidden" animate="visible">
        {socialLinks.map((item) => (
            <Link href={item.href} key={item.id} className={className}>
                {item.icon}
            </Link>
        ))}
    </motion.div>
  )
}

export default Social;