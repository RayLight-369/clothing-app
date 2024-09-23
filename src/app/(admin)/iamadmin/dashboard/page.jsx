"use client";

import { useClothes } from '@/contexts/ClothesContext';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import AddClothe from '../_components/AddClothe/AddClothe';
import Modal from '../_components/Modal/Modal';



const page = () => {

  const { clothes } = useClothes();

  const [ clotheToBeEdited, setClotheToBeEdited ] = useState( null );
  const [ clotheToBeDeleted, setClotheToBeDeleted ] = useState( null );


  return (
    <>
      <section className='w-full h-full'>
        <h1 className='text-xl md:text-3xl font-bold'>Dashboard</h1>
        <div id='content' className='mt-10 flex flex-col'>
          <div id='routes' className='flex'>
            <Link href={ "/iamadmin/clothes" } className='p-5 rounded-lg border-2 flex flex-col gap-2'>
              <h1 className='text-2xl font-bold'>Clothes</h1>
              <p>Manage your clothes (Add, Edit, Delete)</p>
            </Link>
          </div>
          <div id='recents' className='mt-8 border-2 rounded-lg'>
            <div className='p-5 flex flex-col gap-[10px]'>
              <h1 className='text-2xl font-bold'>Recently Added Clothes</h1>
              { clothes.map( ( clothe, i ) => (
                <div key={ clothe.id } className='py-3 px-5 rounded-md border flex justify-between group'>
                  <div className='flex justify-between items-center w-full transition-all duration-200'>
                    <div className='flex flex-col gap-1'>
                      <p className='font-semibold text-xl'>{ clothe?.title }</p>
                      <p className='text-sm'>{ clothe?.type }</p>
                    </div>
                    <p>{ clothe.uploaded_at }</p>
                  </div>
                  <div className='flex opacity-0 transition-all duration-200 gap-2 group-hover:opacity-100 group-hover:ml-10 items-center'>
                    <button className='w-[25px] h-[25px] rounded-full aspect-square border-none outline-none transition-colors duration-150 bg-foreground text-background hover:scale-[1.03]' onClick={ () => setClotheToBeEdited( clothe ) }>&#9998;</button>
                    <button className='w-[25px] h-[25px] rounded-full aspect-square border-none outline-none transition-colors duration-150 hover:bg-red-600 hover:text-white' onClick={ () => setClotheToBeDeleted( clothe ) }>&#128465;</button>
                  </div>
                </div>
              ) ) }
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence mode='wait'>
        { clotheToBeEdited && (
          <Modal>
            <AddClothe handleClose={ () => setClotheToBeEdited( null ) } clothe={ clotheToBeEdited } type_={ "edit" } />
          </Modal>
        ) }
        { clotheToBeDeleted && (
          <Modal>
            <AddClothe handleClose={ () => clotheToBeDeleted( null ) } clothe={ clotheToBeDeleted } type_={ "del" } />
          </Modal>
        ) }
      </AnimatePresence>
    </>
  );
};

export default page;