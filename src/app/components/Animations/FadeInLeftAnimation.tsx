import { motion } from "framer-motion";

const FadeInLeftAnimation = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: any;
}>) => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -35 }, // Element starts 35px to the left
    visible: { opacity: 1, x: 0 },  // Element moves to its original position (x = 0)
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={fadeInLeft}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeftAnimation;
