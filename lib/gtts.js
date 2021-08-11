const  request  =  require ( 'solicitud' ) ;
const  escapeStringRegexp  =  require ( 'escape-string-regexp' ) ;
const  async  =  require ( 'async' ) ;
const  fs  =  require ( 'fs' ) ;
const  MultiStream  =  require ( 'multisecuencia' ) ;
const  fakeUa  =  require ( 'fake-useragent' ) ;

const  GOOGLE_TTS_URL  =  'http://translate.google.com/translate_tts' ;
const  MAX_CHARS  =  100 ;
const  IDIOMAS  =  {
  'af' : 'afrikáans' ,
  'sq' : 'albanés' ,
  'ar' : 'árabe' ,
  'hy' : 'armenio' ,
  'ca' : 'catalán' ,
  'zh' : 'chino' ,
  'zh-cn' : 'Chino (mandarín / China)' ,
  'zh-tw' : 'Chino (mandarín / Taiwán)' ,
  'zh-yue' : 'chino (cantonés)' ,
  'hr' : 'croata' ,
  'cs' : 'checo' ,
  'da' : 'danés' ,
  'nl' : 'holandés' ,
  'en' : 'Inglés' ,
  'en-au' : 'Inglés (Australia)' ,
  'en-uk' : 'Inglés (Reino Unido)' ,
  'en-us' : 'Inglés (Estados Unidos)' ,
  'eo' : 'Esperanto' ,
  'fi' : 'finlandés' ,
  'fr' : 'francés' ,
  'de' : 'alemán' ,
  'el' : 'griego' ,
  'ht' : 'criollo haitiano' ,
  'hola' : 'Hindi' ,
  'hu' : 'húngaro' ,
  'es' : 'islandés' ,
  'id' : 'indonesio' ,
  'it' : 'italiano' ,
  'ja' : 'Japonés' ,
  'ko' : 'coreano' ,
  'la' : 'latín' ,
  'lv' : 'letón' ,
  'mk' : 'macedonio' ,
  'no' : 'noruego' ,
  'pl' : 'polaco' ,
  'pt' : 'portugués' ,
  'pt-br' : 'Portugués (Brasil)' ,
  'ro' : 'rumano' ,
  'ru' : 'Ruso' ,
  'sr' : 'Serbio' ,
  'sk' : 'eslovaco' ,
  'es' : 'español' ,
  'es-es' : 'Español (España)' ,
  'es-us' : 'Español (Estados Unidos)' ,
  'sw' : 'Swahili' ,
  'sv' : 'sueco' ,
  'ta' : 'Tamil' ,
  'th' : 'tailandés' ,
  'tr' : 'Turco' ,
  'vi' : 'vietnamita' ,
  'cy' : 'Galés'
}
function  Text2Speech ( _lang ,  _debug )  {
  var  lang  =  _lang  ||  'en' ;
  var  debug  =  _debug  ||  falsa ;
  lang  =  lang . toLowerCase ( ) ;

  if  ( ! IDIOMAS [ lang ] )
    lanzar  nuevo  Error ( 'Idioma no admitido:'  +  lang ) ;

  var  getArgs  =  getArgsFactory ( lang ) ;

  volver  {
    tokenizar : tokenizar ,
    createServer : ( puerto )  =>  createServer ( getArgs ,  puerto ) ,
    flujo : ( texto )  =>  flujo ( getArgs ,  texto ) ,
    guardar : ( ruta de archivo ,  texto ,  devolución de llamada )  =>  guardar ( getArgs ,  ruta de archivo ,  texto ,  devolución de llamada )
  }
}

la función  Guardar ( getArgs ,  ruta de archivo ,  de texto ,  de devolución de llamada )  {
  var  text_parts  =  tokenize ( texto ) ;
  var  total  =  text_parts . longitud ;
  async . eachSeries ( text_parts ,  function ( part ,  cb )  {
    var  index  =  text_parts . indexOf ( parte ) ;
    var  encabezados  =  getHeader ( ) ;
    var  args  =  getArgs ( parte ,  índice ,  total ) ;
    var  fullUrl  =  GOOGLE_TTS_URL  +  args ;

    var  writeStream  =  fs . createWriteStream ( ruta de archivo ,  {
      banderas : índice  >  0 ? 'a' : 'w'
    } ) ;
    solicitud ( {
        uri : fullUrl ,
        encabezados : encabezados ,
        método : 'GET'
      } )
      . tubería ( writeStream ) ;
    writeStream . en ( 'terminar' ,  cb ) ;
    writeStream . on ( 'error' ,  cb ) ;
  } ,  devolución de llamada ) ;
}

 flujo de funciones ( getArgs ,  text )  {
  var  text_parts  =  tokenize ( texto ) ;
  var  total  =  text_parts . longitud ;

  return  MultiStream ( text_parts . map ( function ( part ,  index )  {
    var  encabezados  =  getHeader ( ) ;
    var  args  =  getArgs ( parte ,  índice ,  total ) ;
    var  fullUrl  =  GOOGLE_TTS_URL  +  args

     solicitud de devolución ( {
      uri : fullUrl ,
      encabezados : encabezados ,
      método : 'GET'
    } ) ;
  } ) ) ;
}

function  getHeader ( )  {
  var  encabezados  =  {
    "Agente de usuario" : fakeUa ( )
  } ;
  //console.log('headers ', headers);
  devolver  encabezados ;
}

function  getArgsFactory ( lang ) {
   función de  retorno ( texto ,  índice ,  total )  {
    var  textlen  =  texto . longitud ;
    var  encodedText  =  encodeURIComponent ( texto ) ;
    var  language  =  lang  ||  'en' ;
    return  `? ie = UTF-8 & tl = $ { language } & q = $ { encodedText } & total = $ { total } & idx = $ { index } & client = tw-ob & textlen = $ { textlen } `
  }
}

función  tokenizar ( texto )  {
  var  text_parts  =  [ ] ;
  si  ( ! texto )
    lanzar  nuevo  Error ( 'No hay texto para hablar' ) ;

  var  punc  =  '¡! () [] ¶; | ° • - «» ≤≥ «» ‹› \ n' ;
  var  lista_punc  =  punc . dividir ( '' ) . mapa ( función ( char )  {
    return  escapeStringRegexp ( char ) ;
  } ) ;

  var  patrón  =  punc_list . unirse ( '|' ) ;
  var  partes  =  texto . split ( new  RegExp ( patrón ) ) ;
  partes  =  partes . filtro ( p  =>  p . longitud  >  0 ) ;

  var  salida  =  [ ] ;
  var  i  =  0 ;
  para  ( sea  p  de  partes )  {
    if  ( ! salida [ i ] )  {
      salida [ i ]  =  '' ;
    }
    if  ( salida [ i ] . longitud  +  p . longitud  <  MAX_CHARS )  {
      salida [ i ]  + =  ''  +  p ;
    }  más  {
      i ++ ;
      salida [ i ]  =  p ;
    }
  }
  salida [ 0 ]  =  salida [ 0 ] . substr ( 1 ) ;
   salida de retorno ;
}

function  createServer ( getArgs ,  port )  {
  var  http  =  require ( "http" ) ;
  var  url  =  require ( 'url' ) ;

  var  servidor  =  http . createServer ( función ( req ,  res )  {
    var  queryData  =  url . analizar ( req . url ,  verdadero ) . consulta ;
    var  argsCallback  =  getArgs ;
    if  ( queryData  &&  queryData . lang  &&  LANGUAGES [ queryData . lang ] )  {
      argsCallback  =  getArgsFactory ( queryData . lang ) ;
    }
    if  ( queryData  &&  queryData . text )  {
      res . writeHead ( 200 ,  { 'Content-Type' : 'audio / mpeg' } ) ;
      stream ( argsCallback ,  queryData . texto ) . tubería ( res ) ;
    }  más  {
      consola . log ( req . encabezados ) ;
      res . writeHead ( 200 ,  { 'Content-Type' : 'application / json' } ) ;
      res . end ( JSON . stringify ( {
        código : - 1 ,
        mensaje : `Falta texto. Intente: $ { req . encabezados . host } ? texto = tu + texto`
      } ) )
    }
  } ) ;

  servidor . escuchar ( puerto ) ;
  consola . log ( "Servidor de texto a voz ejecutándose en"  +  puerto ) ;
}

módulo . exportaciones  =  Text2Speech ;
