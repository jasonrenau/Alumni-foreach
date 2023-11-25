import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Loader = () => {
  const controls = useAnimation();

  useEffect(() => {
    const loaderAnimation = {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "linear",
        loop: Infinity,
      },
    };

    controls.start(loaderAnimation);
  }, [controls]);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative">
        <img
          src="/logoalumni.png"
          alt="logo-foreach"
          className="h-28 w-28 p-3"
        />
        <motion.div
          className="absolute left-0 top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-t-4 border-solid border-pblue-500"
          initial={{ rotate: 0 }}
          animate={controls}
        ></motion.div>
      </div>
    </div>
  );
};

export default Loader;
