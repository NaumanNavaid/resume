"use client"
import { motion } from 'framer-motion';

const Example = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg text-center m-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hello, Fabulous Framer Motion!
      </motion.h1>

      <motion.p
        className="text-lg text-white opacity-75 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        This is a stunning example of a motion component with TailwindCSS and Framer Motion. Enjoy the magic of animations!
      </motion.p>

      <motion.div
        className="bg-white text-black p-3 rounded-full cursor-pointer w-36 mx-auto"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h2 className="font-bold">Click Me!</h2>
      </motion.div>
    </motion.div>
  );
};

export default Example;
