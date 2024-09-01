import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const Modal = ( { children, handleClose, customClassName } ) => {
  const variants = {
    animate: {
      opacity: 1,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
    exit: {
      opacity: 0,
      scale: 1.5,
    },
  };

  return (
    <motion.div
      className="fixed w-full h-full inset-0 flex items-center justify-center bg-black bg-opacity-90 z-[99999999]"
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      exit={ { opacity: 0 } }
      onClick={ handleClose }
    >
      <motion.div
        className={ `p-5 relative max-h-[90%] w-fit bg-white rounded-lg ${ customClassName }` }
        variants={ variants }
        animate="animate"
        initial="hidden"
        exit="exit"
        onClick={ ( e ) => e.stopPropagation() }
      >
        { children }
        <button onClick={ handleClose } className="w-6 h-auto aspect-square absolute top-5 right-6 bg-background rounded-md flex items-center justify-center transition-all hover:rounded-[50%] hover:rotate-90"><X className="w-4 p-0 text-foreground" /></button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
