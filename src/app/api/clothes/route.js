import { deleteData, getData, insertData, updateData } from "@/lib/supabase";


export async function GET () {
  const clothesData = await getData( {
    table: "Clothes"
  } );

  if ( clothesData )
    return Response.json( clothesData.data );

  return Response.json( { error: clothesData.error }, { ...clothesData } );
}

export async function POST ( req ) {
  try {

    const object = await req.json();
    console.log( object );

    const data = await insertData( {
      table: "Clothes",
      object
    } );

    if ( data.error ) {

      console.log( data.error );
      return Response.json( { error: data.error }, { status: data.status } );

    } else return Response.json( { data: data.data }, { status: data.status } );

  } catch ( e ) {
    console.log( e );
    return Response.json( { error: e }, { status: 500 } );
  }

}

export async function PUT ( req ) {
  try {

    const object = await req.json();
    console.log( object );

    const Data = await updateData( {
      table: "Clothes",
      where: {
        id: object.id
      },
      object
    } );

    if ( Data.error ) {

      console.log( Data.error );
      return Response.json( { error: Data.error }, { status: Data.status } );

    } else return Response.json( { data: Data.data }, { status: Data.status } );

  } catch ( e ) {
    console.log( e );
    return Response.json( { error: e }, { status: 500 } );
  }
}

export async function DELETE ( req ) {
  try {

    const object = await req.json();
    console.log( object );

    const Data = await deleteData( {
      table: "Clothes",
      where: {
        id: object.id
      }
    } );

    if ( Data.error ) {

      console.log( Data.error );
      return Response.json( { error: Data.error }, { status: Data.status } );

    } else return Response.json( { data: [ object ] }, { status: Data.status || 200 } );

  } catch ( e ) {
    console.log( e );
    return Response.json( { error: e }, { status: 500 } );
  }
}