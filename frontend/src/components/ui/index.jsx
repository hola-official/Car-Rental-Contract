import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const AnimatedTitle = ({ children, className, ...props }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={cn(
      "text-3xl md:text-4xl font-bold text-center mb-12",
      className
    )}
    {...props}
  >
    {children}
  </motion.h2>
);

export const AnimatedListItem = ({ children, index }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-center space-x-3"
  >
    {children}
  </motion.li>
);

export const AnimatedSection = ({
  children,
  className,
  direction = "left",
  ...props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn("w-full py-16 md:py-24 lg:py-32", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={cn(
      "px-6 py-3 rounded-md font-semibold transition-all cursor-pointer",
      variant === "primary"
        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
        : "bg-white text-blue-600 hover:bg-blue-50 border border-blue-200",
      className
    )}
    {...props}
  >
    {children}
  </motion.button>
);

export const Card = ({ children, className, ...props }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    className={cn(
      "bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);

export const Section = ({ children, className, ...props }) => (
  <section
    className={cn("w-full py-16 md:py-24 lg:py-32", className)}
    {...props}
  >
    {children}
  </section>
);
