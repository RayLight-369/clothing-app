"use client";

import React, { useState } from 'react';
import OptionBar from './_components/OptionBar/OptionBar';
import { AnimatePresence } from 'framer-motion';
import Modal from './_components/Modal/Modal';
import AddClothe from './_components/AddClothe/AddClothe';

const ChildLayout = () => {

  const [ openClotheAddPopup, setClotheAddPopup ] = useState( false );

  return (
    <>
      <OptionBar setAddClothePopupOpen={ setClotheAddPopup } />
      <AnimatePresence mode='wait'>
        {
          openClotheAddPopup && (
            <Modal>
              <AddClothe handleClose={ () => setClotheAddPopup( false ) } />
            </Modal>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default ChildLayout;