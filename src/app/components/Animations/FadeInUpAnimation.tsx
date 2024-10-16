import { motion } from "framer-motion";

const FadeInUpAnimation = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: any;
}>) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpAnimation;
