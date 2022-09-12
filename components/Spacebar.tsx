import { motion } from "framer-motion";

const Spacebar = () => {
  return (
    <div className="hidden md:block w-fit mx-auto mt-6">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 4 }}
      >
        <p className="text-gray-400">
          Click once + Press
          <kbd className="mx-2 px-4 py-1.5 text-xs font-semibold border rounded-lg bg-gray-600 text-gray-100 border-gray-500">
            Spacebar
          </kbd>
          to scroll down
        </p>
      </motion.div>
    </div>
  );
};

export default Spacebar;
