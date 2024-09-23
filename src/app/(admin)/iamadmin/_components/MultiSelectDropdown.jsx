// import { memo } from 'react';
// import { X } from 'lucide-react';
// import { Badge } from "@/components/ui/badge";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const MultiSelectDropdown = ( { selectedItems, setSelectedItems, options } ) => {

//   const handleSelect = ( value ) => {
//     if ( !selectedItems.includes( value ) ) {
//       setSelectedItems( [ ...selectedItems, value ] );
//     }
//   };

//   const removeItem = ( itemToRemove ) => {
//     setSelectedItems( selectedItems.filter( item => item !== itemToRemove ) );
//   };

//   return (
//     <div className="w-full max-w-md">
//       <div className="flex flex-wrap gap-2 mb-2">
//         { selectedItems.map( ( item, index ) => (
//           <Badge key={ index } variant="secondary" className="flex items-center gap-1">
//             { item }
//             <X
//               size={ 14 }
//               className="cursor-pointer"
//               onClick={ () => removeItem( item ) }
//             />
//           </Badge>
//         ) ) }
//       </div>
//       <Select onValueChange={ handleSelect }>
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder="Select an option..." />
//         </SelectTrigger>
//         <SelectContent className="z-[2000]">
//           { options.map( ( option ) => (
//             <SelectItem key={ option } value={ option }>
//               { option }
//             </SelectItem>
//           ) ) }
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };

// export default memo( MultiSelectDropdown );

import React, { useState } from 'react';

const MultiSelectDropdown = ( { selectedItems, setSelectedItems, options = [] } ) => {

  const handleOptionToggle = ( option ) => {
    setSelectedItems( prevSelected =>
      prevSelected.includes( option )
        ? prevSelected.filter( item => item !== option )
        : [ ...prevSelected, option ]
    );
  };

  if ( !Array.isArray( options ) || options.length === 0 ) {
    return <div className="text-red-500">No options provided or invalid options format.</div>;
  }

  return (
    <div className="w-64 border border-gray-300 rounded-md p-2">
      <h3 className="text-lg font-semibold mb-2">Select Options:</h3>
      { options.map( option => (
        <div key={ option } className="flex items-center mb-2">
          <input
            type="checkbox"
            id={ option }
            checked={ selectedItems.includes( option ) }
            onChange={ () => handleOptionToggle( option ) }
            className="mr-2"
          />
          <label htmlFor={ option }>{ option }</label>
        </div>
      ) ) }
      <div className="mt-4">
        <strong>Selected:</strong> { selectedItems.join( ', ' ) }
      </div>
    </div>
  );
};

export default MultiSelectDropdown;