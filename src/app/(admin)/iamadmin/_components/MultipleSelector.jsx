import React, { memo, useState } from 'react';
import { X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const MultipleSelector = ( { selectedItems, setSelectedItems } ) => {
  const [ inputValue, setInputValue ] = useState( '' );

  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
  };

  const handleInputKeyDown = ( e ) => {
    if ( e.key === 'Enter' && inputValue.trim() !== '' ) {
      setSelectedItems( [ ...selectedItems, inputValue.trim() ] );
      setInputValue( '' );
    }
  };

  const removeItem = ( indexToRemove ) => {
    setSelectedItems( selectedItems.filter( ( _, index ) => index !== indexToRemove ) );
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-wrap gap-2 mb-2">
        { selectedItems.map( ( item, index ) => (
          <Badge key={ index } variant="secondary" className="flex items-center gap-1">
            { item }
            <X
              size={ 14 }
              className="cursor-pointer"
              onClick={ () => removeItem( index ) }
            />
          </Badge>
        ) ) }
      </div>
      <input
        type="text"
        placeholder="Type and press Enter to add..."
        value={ inputValue }
        onChange={ handleInputChange }
        onKeyDown={ handleInputKeyDown }
      />
    </div>
  );
};

export default memo( MultipleSelector );