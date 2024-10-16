import { motion } from "framer-motion";

const FadeInRightAnimation = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: any;
}>) => {
  const fadeInRight = {
    hidden: { opacity: 0, x: 35 },  // Element starts 35px to the right
    visible: { opacity: 1, x: 0 },  // Element moves to its original position (x = 0)
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={fadeInRight}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInRightAnimation;
