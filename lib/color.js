tiza  const =  require ( 'tiza' )

const  color  =  ( texto ,  color )  =>  {
    volver  ! color ? tiza . verde ( texto ) : tiza . palabra clave ( color ) ( texto )
}

const  bgcolor  =  ( texto ,  bgcolor )  =>  {
	volver  ! bgcolor ? tiza . verde ( texto ) : tiza . bgKeyword ( bgcolor ) ( texto )
}

módulo . exportaciones  =  {
	el color ,
	bgcolor
}
