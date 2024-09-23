import { useEffect, useMemo, useState } from 'react';
import styles from "./AddClothe.module.css";
import { MotionConfig, motion } from 'framer-motion';
import DropDown from '../DropDown/DropDown';
import { useClothes } from '@/contexts/ClothesContext';
import { API } from '@/lib/constants';
import { v4 as uid } from "uuid";
import { uploadFile, updateData, deleteFile } from "@/lib/supabase";
import MultipleSelector from '../MultipleSelector';
import MultiSelectDropdown from '../MultiSelectDropdown';


const AddClothe = ( { handleClose, type_ = "new", clothe } ) => {

  // const navigate = useNavigate();
  const { setClothes } = useClothes();
  const [ clotheID, setClotheID ] = useState( clothe?.id || 0 );
  const [ adding, setAdding ] = useState( false );
  const [ clotheTitle, setClotheTitle ] = useState( clothe?.title || "" );
  // const [ clotheOverview, setClotheOverview ] = useState( clothe?.overview || "" );

  const [ type, setType ] = useState( clothe?.type || "" );
  const [ price, setPrice ] = useState( clothe?.price || 0 );
  const [ variants, setVariants ] = useState( clothe?.variants || [] );

  const [ typeDropDown, toggleTypeDropDown ] = useState( false );

  const [ colors, setColors ] = useState( clothe?.colors || [] );
  const [ sizes, setSizes ] = useState( clothe?.sizes || [] );

  const [ images, setImages ] = useState( clothe?.images || [] );
  const [ imagesData, setImagesData ] = useState( {} );
  const [ imagesDone, setImagesDone ] = useState( false );


  const data = useMemo( () => [
    {
      element: "Price Rs",
      class: "price",
      inputClass: "price-input",
      setState: setPrice,
      value: price,
      type: "number"
    }
  ], [ price ] );



  // const [ priorityInput, setPriorityInput ] = useState( "" );
  // const [ assigneeInput, setAssigneeInput ] = useState( "" );
  // const [ reporterInput, setReporterInput ] = useState( "" );
  const currentDate = new Date();
  const [ dateInput, setDateInput ] = useState( `${ currentDate.getFullYear() }-${ currentDate.getMonth() + 1 >= 10 ? currentDate.getMonth() + 1 : "0" + ( currentDate.getMonth() + 1 ) }-${ currentDate.getDate() > 9 ? currentDate.getDate() : "0" + currentDate.getDate() }` );


  useEffect( () => {

    let IMG_OBJECT =
      type_ == "edit"
        ? [ ...clothe?.images ]?.reduce( ( p, c ) => {
          p[ c ] = c;
          return p;
        }, {} )
        : {};

    console.log( "clothe.imgs from line 165: ", clothe?.images );
    setImagesData( IMG_OBJECT );

  }, [] );

  useEffect( () => console.log( "img obj:  ", imagesData ), [ imagesData ] );

  useEffect( () => {

    if ( type_ == "edit" ) {
      setImagesData( {
        ...[ ...clothe?.images || images ]?.reduce( ( p, c ) => {
          p[ c ] = c;
          return p;
        }, {} ),
      } );
    }
    console.log( clothe );

  }, [ clothe ] );

  function deleteEntry ( obj, indexToDelete ) {
    const keys = Object.keys( obj );

    if ( indexToDelete < 0 || indexToDelete >= keys.length ) {
      return obj; // Index out of range, return the original object
    }

    const updatedObj = { ...obj };
    const keyToDelete = keys[ indexToDelete ];
    delete updatedObj[ keyToDelete ];

    return updatedObj;
  }

  const handleFileChange = ( e ) => {
    let files = e.target.files;

    for ( let file of files ) {
      setImagesData( ( prev ) => ( {
        ...prev,
        [ URL.createObjectURL( file ) ]: file,
      } ) );
    }
  };

  const handleDelete = ( e, key ) => {
    e.preventDefault();
    e.stopPropagation();

    let updatedImages = deleteEntry( imagesData, key );

    setImagesData( { ...updatedImages } );
  };


  const SetImages = async ( images_, Clothe ) => {

    let imageArray = [];

    for ( let image in images_ ) {

      let fileId = uid();
      let extension = images_[ image ].type.replace( "image/", "" ).toLowerCase();

      imageArray.push(
        `${ process.env.NEXT_PUBLIC_SUPABASE_URL }/storage/v1/object/public/images/clothes/${ Clothe.id }/${ fileId }.${ extension }`
      );

      await uploadFile(
        Clothe.id,
        fileId + "." + extension,
        images_[ image ]
      );
    };

    let _images = images;
    _images = [ ...imageArray ];

    setImages( prev => ( [ ...prev, ...imageArray ] ) );
    setImagesDone( true );

    const ReqData = {
      images
    };

    try {

      // const res = await fetch( API.EDIT_CLOTHE, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify( ReqData )
      // } );

      console.log( "casasasar: ", clothe );
      console.log( "i: ", imageArray );
      console.log( "r: ", ReqData );

    } catch ( e ) {
      console.log( e );
    }
  };



  // const getMissingImages = ( imagesArray, obj ) => {
  //   const objKeysSet = new Set( Object.keys( obj ) );
  //   return imagesArray.filter( ( image ) => !objKeysSet.has( image ) );
  // };

  // const SetImages = async ( images_ ) => {
  //   const imageArray = [];
  //   const deletedImages = getMissingImages( images, images_ );

  //   for ( let image in images ) {
  //     if ( typeof images[ image ] !== "string" ) {
  //       const fileId = uuidv4();
  //       const extension = images[ image ].type.replace( "image/", "" ).toLowerCase();

  //       imageArray.push(
  //         `https://lmxqvapkmczkpcfheiun.supabase.co/storage/v1/object/public/images/clothes/${ postID }/${ fileId }.${ extension }`
  //       );
  //       await uploadFile(
  //         session?.user.id,
  //         postID,
  //         `${ fileId }.${ extension }`,
  //         images[ image ]
  //       );
  //     } else {
  //       imageArray.push( image );
  //     }
  //   }

  //   if ( deletedImages.length ) {
  //     for ( const image of deletedImages ) {
  //       const url = image.split( "/" );
  //       const fileID = url[ url.length - 1 ];
  //       await deleteFile( `clothes/${ session?.user.id }/${ postID }/${ fileID }` );
  //     }
  //   }

  //   let _post = post;
  //   _post.images = imageArray;

  //   setPost( ( prev ) => ( { ...prev, images: [ ...imageArray ] } ) );
  // };

  const buttonWhileHovering = ( scale = 1.1, duration = .1 ) => ( {
    scale,
    transition: {
      duration
    }
  } );

  useEffect( () => {
    if ( images.length && imagesDone ) {
      ( async () => {

        const Data = await updateData( {
          table: "Clothes",
          where: {
            id: clotheID
          },
          object: {
            images
          }
        } );

        const clothe = Data.data[ 0 ];

        setClothes( prev =>
          prev.map( prevClothe => clothe.id == prevClothe.id ? clothe : prevClothe )
        );

      } )();
    }
  }, [ images, imagesDone ] );


  const getMissingImages = ( imagesArray, obj ) => {
    const objKeysSet = new Set( Object.keys( obj ) );
    return imagesArray.filter( ( image ) => !objKeysSet.has( image ) );
  };

  const SetImages_Edit = async ( images_, clothe ) => {
    setImagesDone( false );
    const imageArray = [];
    const deletedImages = getMissingImages( clothe.images, images_ );

    for ( let image in images_ ) {
      if ( typeof images_[ image ] !== "string" ) {
        const fileId = uid();
        const extension = images_[ image ].type.replace( "image/", "" ).toLowerCase();

        imageArray.push(
          `${ process.env.NEXT_PUBLIC_SUPABASE_URL }/storage/v1/object/public/images/clothes/${ clothe.id }/${ fileId }.${ extension }`
        );
        await uploadFile(
          clothe.id,
          `${ fileId }.${ extension }`,
          images_[ image ]
        );
      } else {
        imageArray.push( image );
      }
    }

    if ( deletedImages.length ) {
      for ( const image of deletedImages ) {
        const url = image.split( "/" );
        const fileID = url[ url.length - 1 ];
        await deleteFile( `clothes/${ clothe.id }/${ fileID }` );
      }
    }

    let _clothe = clothe;
    _clothe.images = imageArray;

    setImages( ( prev ) => ( [ ...imageArray ] ) );
    setImagesDone( true );

  };

  // const inputWhileFocused = {
  //   scale: 1.06,
  // };

  async function addClothe ( images_ ) {

    setAdding( true );

    console.log( clothe );

    const dateParts = dateInput.split( "-" );

    [ dateParts[ 0 ], dateParts[ 2 ] ] = [ dateParts[ 2 ], dateParts[ 0 ] ];

    const uploaded_at = dateParts.join( "-" );

    const ReqData = {
      title: clotheTitle, uploaded_at, images, colors, price, sizes, type
    };


    if ( !clothe && ( !clotheTitle.trim().length || !Object.keys( imagesData ).length ) && type != "del" ) return setAdding( false );

    if ( type_ === "edit" || type_ == "del" ) ReqData.id = clothe.id;

    try {

      const res = await fetch( type_ == "edit" ? API.EDIT_CLOTHE : type_ == "new" ? API.NEW_CLOTHE : API.DEL_CLOTHE, {
        method: type_ == "edit" ? "PUT" : type_ == "new" ? 'POST' : "DELETE",
        body: JSON.stringify( ReqData ),
        headers: {
          'Content-Type': 'application/json'
        }
      } );

      if ( res.ok ) {
        const body = await res.json();
        const clothe = body.data[ 0 ];

        console.log( "clothe: ", clothe );

        setClotheID( clothe.id );

        if ( type_ == "new" )
          await SetImages( images_, clothe );
        else if ( type_ == "edit" )
          await SetImages_Edit( images_, clothe );

        console.log( body.data );

        if ( type_ === "edit" ) {
          setClothes( prevClothes =>
            prevClothes.map( prevClothe =>
              prevClothe.id === clothe.id ? clothe : prevClothe
            )
          );
        } else if ( type_ == "del" ) {
          setClothes( prevClothes =>
            prevClothes.filter( prevClothe =>
              prevClothe.id != ReqData.id
            )
          );
        } else {
          setClothes( prev => [ clothe, ...prev ] );
        }

        handleClose();
      }

    } catch ( e ) {
      console.log( e );
    } finally {
      setAdding( false );
    }

  }

  useEffect( () => {

    console.log( "updated img data: ", imagesData );
    console.log( "updated images: ", images );

  }, [ imagesData, images ] );

  return (
    <MotionConfig transition={ { type: "spring", damping: 7 } } >
      <div className={ styles[ "add-clothe" ] }>
        <div className={ styles[ "header" ] }>
          <p className={ styles[ "title" ] }>{ type_ === "edit" ? "Edit clothe" : type_ == "new" ? "Add new clothe" : "Are you sure?" }</p>
          <motion.button type='button' whileHover={ buttonWhileHovering( 1.2, .2 ) } className={ styles[ 'close' ] } onClick={ handleClose }>✖</motion.button>
        </div>
        {
          type_ != "del" && (
            <>
              <div className={ styles[ "inputs" ] }>
                <input type="text" placeholder='Title' className={ styles[ "name" ] } value={ clotheTitle } onChange={ e => setClotheTitle( e.target.value ) } />
                {/* <textarea placeholder='Aperçu de la voiture' className={ styles[ "description" ] } value={ clotheOverview } onChange={ e => setClotheOverview( e.target.value ) } /> */ }
              </div>

              <div className={ styles[ "infos" ] }>

                {/* <DropDown key={ "size" } setState={ setSize } selected={ size } array={ [ "S", "M", "L", "XL", "XXL" ] } label='Size' dropDownOpen={ sizeDropDown } toggleDropDown={ toggleSizeDropDown } /> */ }
                <DropDown key={ "type" } setState={ setType } selected={ type } array={ [ "T-Shirt", "SweatShirt", "Hoodie" ] } label='Type' dropDownOpen={ typeDropDown } toggleDropDown={ toggleTypeDropDown } />

                <div key={ "Colors" }>
                  <label>Colors:</label>
                  <MultipleSelector selectedItems={ colors } setSelectedItems={ setColors } />
                </div>

                <div key={ "Sizes" }>
                  <label>Sizes:</label>
                  <MultiSelectDropdown selectedItems={ sizes } setSelectedItems={ setSizes } options={ [ "S", "M", "L", "XL", "XXL" ] } />
                </div>


                { data.map( ( value, index ) => (

                  <div className={ styles[ value.class ] } key={ index }>
                    <label htmlFor={ value.class }>{ value.element }:</label>
                    <input onChange={ ( e ) => {
                      value.setState( e.target.value );
                    } } value={ value.value } type={ value.type } name={ value.class } id={ value.class } className={ styles[ value.inputClass ] } />
                  </div>

                ) ) }

                <div className={ styles[ "images" ] }>
                  <p>Images: </p>
                  <label htmlFor={ "file" } className={ styles[ "image-label" ] }>
                    Select Images
                  </label>
                  <input
                    type="file"
                    onChange={ handleFileChange }
                    multiple
                    name="file"
                    id={ "file" }
                    min={ 1 }
                    max={ 9 }
                    accept="image/*"
                    style={ { display: "none" } }
                  />

                  {/* </div> */ }

                  <div className={ styles[ "img-container" ] }>
                    { Object.keys( imagesData ).map( ( img, key ) => (
                      <div className={ styles[ "img-box" ] } key={ img }>
                        <img
                          src={ img }
                          width={ 200 }
                          height={ 200 }
                          alt="clothe image"
                          className={ styles[ "img" ] }
                        />

                        <button
                          className={ styles[ "delete-img" ] }
                          onClick={ ( e ) => handleDelete( e, key ) }
                        >
                          ✖
                        </button>
                      </div>
                    ) ) }
                  </div>
                </div>

              </div>
            </>
          )
        }
        <div className={ styles[ "buttons" ] }>
          <motion.button
            whileHover={ buttonWhileHovering( 1.1, .2 ) }
            className={ styles[ "add-button" ] }
            onClick={ () => {
              addClothe( imagesData );
            } }
            disabled={ adding }
          >
            { adding ? type_ == 'new' ? "Adding..." : type_ == "edit" ? "Editing..." : "Deleting..." : type_ == 'new' ? "Add" : type_ == "edit" ? "Edit" : "Delete" }
          </motion.button>
          <motion.button
            whileHover={ buttonWhileHovering( 1.1, .2 ) }
            className={ styles[ "cancel-button" ] }
            onClick={ handleClose }
          >
            Cancel
          </motion.button>
        </div>
      </div>
    </MotionConfig>
  );
};

export default AddClothe;