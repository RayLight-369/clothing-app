import { Dialog, DialogContent } from './ui/dialog';
import { motion } from 'framer-motion';

const ImageModal = ( { isOpen, onClose, imgSrc } ) => {
  return (
    <Dialog
      open={ isOpen }
      onOpenChange={ onClose }
      modal={ false }
    >
      <DialogContent
        className="flex justify-center items-center p-0 bg-transparent z-[54]"
        onOpenAutoFocus={ ( e ) => e.preventDefault() }
        onCloseAutoFocus={ ( e ) => e.preventDefault() }
      >
        <motion.img
          src={ imgSrc }
          alt="Expanded Image"
          className="rounded-lg shadow-lg"
          initial={ { scale: 0.9 } }
          animate={ { scale: 1 } }
          exit={ { scale: 0.9 } }
          transition={ { type: 'spring', stiffness: 300, damping: 20 } }
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
