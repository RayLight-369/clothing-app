import React, { useState, useCallback, useRef, useEffect } from 'react';

const CustomRangeInput = () => {
  const [ minValue, setMinValue ] = useState( 10 );
  const [ maxValue, setMaxValue ] = useState( 60 );
  const minInputRef = useRef( null );
  const maxInputRef = useRef( null );
  const range = useRef( null );

  const handleMinChange = useCallback( ( event ) => {
    const value = Math.min( Number( event.target.value ), maxValue - 1 );
    setMinValue( value );
  }, [ maxValue ] );

  const handleMaxChange = useCallback( ( event ) => {
    const value = Math.max( Number( event.target.value ), minValue + 1 );
    setMaxValue( value );
  }, [ minValue ] );

  useEffect( () => {
    if ( range.current ) {
      const minPercent = ( ( minValue - 10 ) / ( 60 - 10 ) ) * 100;
      const maxPercent = ( ( maxValue - 10 ) / ( 60 - 10 ) ) * 100;
      range.current.style.left = `${ minPercent }%`;
      range.current.style.width = `${ maxPercent - minPercent }%`;
    }
  }, [ minValue, maxValue ] );

  return (
    <div className="relative w-full max-w-md mx-auto pt-8 pb-4">
      <div className="slider relative h-1 rounded-md bg-gray-200">
        <div
          ref={ range }
          className="range absolute h-1 bg-red-500 rounded"
        />
      </div>
      <div className="relative">
        <input
          ref={ minInputRef }
          type="range"
          min={ 10 }
          max={ 60 }
          value={ minValue }
          onChange={ handleMinChange }
          className="absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
        />
        <input
          ref={ maxInputRef }
          type="range"
          min={ 10 }
          max={ 60 }
          value={ maxValue }
          onChange={ handleMaxChange }
          className="absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
        />
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-sm text-gray-700">${ minValue }</span>
        <span className="text-sm text-gray-700">${ maxValue }</span>
      </div>
      <style jsx>{ `
        input[type="range"]::-webkit-slider-thumb {
          pointer-events: all;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #fff;
          border: 2px solid #ff0000;
          -webkit-appearance: none;
        }
      `}</style>
    </div>
  );
};

export default CustomRangeInput;