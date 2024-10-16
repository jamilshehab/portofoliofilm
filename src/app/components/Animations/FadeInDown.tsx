// FadeInDownAnimation.jsx
import { motion } from "framer-motion";

const FadeInDownAnimation = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: any;
}>) => {
  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={fadeInDown}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDownAnimation;
