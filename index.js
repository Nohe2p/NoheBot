 / *
* NoheBot es una creación de shanduy
* NoheBot no tiene ningun fin de lucro
* shanduy se reserva todos los derechos de autor
* © 2021 shanduy, INC.
Cualquier copia que utilice mi ApiKey sera dado de baja
- Que hay de nuevo?
* Nada
* /

const  {
    WAConexión ,
    MessageType ,
    presencia ,
    Mimetype ,
    rugaapi ,
    GroupSettingChange
}  =  require ( '@ adiwajshing / baileys' )

/ ****** COMIENZO DE LA ENTRADA DEL ARCHIVO ****** /
const  { color , bgcolor }  =  require ( './lib/color' )
const  { bahasa }  =  require ( './src/bahasa' )
const  { negara }  =  require ( './src/kodenegara' )
const  { virtex }  =  require ( './src/virtex' )
const  { espera , pegatinas , musica , simih , getBuffer , h2k , generateMessageID , getGroupAdmins , getRandom , banner , start , info , success , close }  =  require ( './lib/functions' )
const  { fetchJson }  =  require ( './lib/fetcher' )
const  { reconocer }  =  require ( './lib/ocr' )
/ ****** FIN DE ENTRADA DE ARCHIVO ****** /

/ ****** COMIENZO DE LA ENTRADA DEL PAQUETE NPM ****** /
const  fs  =  require ( 'fs' )
 momento  constante =  require ( 'momento-zona horaria' )
const  { exec }  =  require ( 'child_process' )
const  kagApi  =  require ( '@ kagchi / kag-api' )
const  axios  =  require ( "axios" )
const  fetch  =  require ( 'búsqueda de nodo' )
/ * const tiktod = require ('tiktok-scraper') * /
const  ffmpeg  =  require ( 'fluent-ffmpeg' )
const  { removeBackgroundFromImageFile }  =  require ( 'remove.bg' )
const  imgbb  =  require ( 'imgbb-uploader' )
const  lolis  =  require ( 'lolis.life' )
const  loli  =  nuevo  lolis ( )
 velocidad  constante =  require ( 'rendimiento-ahora' )
/ ****** FIN DE ENTRADA DEL PAQUETE NPM ****** /

/ ****** COMIENZO DE LA ENTRADA JSON ****** /
const  welkom  =  JSON . analizar ( fs . readFileSync ( './database/json/welkom.json' ) )
const  nsfw  =  JSON . analizar ( fs . readFileSync ( './database/json/nsfw.json' ) )
const  samih  =  JSON . analizar ( fs . readFileSync ( './database/json/simi.json' ) )
 usuario  constante =  JSON . analizar ( fs . readFileSync ( './database/json/user.json' ) )
const  _leveling  =  JSON . analizar ( fs . readFileSync ( './database/json/leveling.json' ) )
const  _level  =  JSON .analizar ( fs . readFileSync ( './database/json/level.json' ) )
/ ****** FIN DE ENTRADA JSON ****** /

/ ****** INICIO DE LA ENTRADA DEL MENÚ ****** /
const  { ayuda }  =  require ( './src/help' )
const  { logomaker }  =  require ( './database/menu/logomaker' )
const  { toinmenu }  =  require ( './src/toinmenu' )
const  { menuadmin }  =  require ( './src/menuadmin' )
const  { nsfwmenu }  =  require ( './src/nsfwmenu' )
const  { desmenu }  =  require ( './src/desmenu' )
const  { versión }  =  require ( './src/version' )
const  { juegos }  =  require ( './src/juegos' )
const  { conversa }  =  require ( './src/conversa' )
const  { antimenu }  =  require ( './src/antimenu' )
const  { welmenu }  =  require ( './src/welmenu' )
const  { otaku }  =  require ( './src/otaku' )
/ * const {mediamenu} = require ('./ database / menu / mediamenu')
const {educationmenu} = require ('./ database / menu / educationmenu')
const {downloadermenu} = require ('./ database / menu / downloadermenu')
const {mememenu} = require ('./ database / menu / mememenu')
const {kerangmenu} = require ('./ database / menu / kerangmenu')
const {groupmenu} = require ('./ database / menu / groupmenu')
const {soundmenu} = require ('./ database / menu / soundmenu')
const {musicmenu} = require ('./ database / menu / musicmenu')
const {islammenu} = require ('./ database / menu / islammenu')
const {stalkmenu} = require ('./ database / menu / stalkmenu')
const {wibumenu} = require ('./ database / menu / wibumenu')
const {funmenu} = require ('./ database / menu / funmenu')
const {informationmenu} = require ('./ database / menu / informationmenu')
const {18 + menu} require ('./ database / menu / 18 + menu')
const {ownermenu} require ('./ database / menu / ownermenu')
const {othermenu} require ('./ database / menu / othermenu') * /
/ ****** FIN DE ENTRADA DEL MENÚ ****** /

/ ****** CARGA DE ENTRADA VCARD ****** /
const  vcard  =  'BEGIN: VCARD \ n'  // Tarjeta de contacto
            +  'VERSIÓN: 3.0 \ n' 
            +  'FN: Nohe \ n'  // Nombre
            +  'ORG: Shanduy; \ n'  // Propietario
            +  'TEL; type = CELL; type = VOICE; waid = +593984497032: +593984497032 \ n'  // ID de WhatsApp + número de teléfono
            +  'FIN: VCARD'
/ ****** FIN DE ENTRADA VCARD ****** /

prefijo  =  '*'
bloqueado  =  [ ]

/ ****** CONFIGURACION DE CARGA ****** /
const  settingan  =  JSON . analizar ( fs . readFileSync ( './admin/set.json' ) )
const  {
	autor ,
	paquete
}  =  settingan

/ ****** INICIO DE FUNCIONES ENTRADA ****** /

/ ****** ARCHIVOS ANTILINK POR SHANDUY ****** /

const  antienlace  =  JSON . analizar ( fs . readFileSync ( './src/antilink.json' ) )
const  antiface  =  JSON . analizar ( fs . readFileSync ( './src/antiface.json' ) )
const  antitube  =  JSON . analizar ( fs . readFileSync ( './src/antitube.json' ) )
const  antitik  =  JSON . analizar ( fs . readFileSync ( './src/antitik.json' ) )
const  antinsta  =  JSON . analizar ( fs . readFileSync ( './src/antinsta.json' ) )

/ ****** FIN DE ARCHIVOS ANTILINK POR SHANDUY ****** /

const  getLevelingXp  =  ( userId )  =>  {
            dejar  posición  =  falso
            Objeto . claves ( _level ) . paraCada ( ( i )  =>  {
                if  ( _level [ i ] . jid  ===  userId )  {
                    posición  =  yo
                }
            } )
            si  ( posición  ! ==  falso )  {
                return  _level [ posición ] . xp
            }
        }

        const  getLevelingLevel  =  ( userId )  =>  {
            dejar  posición  =  falso
            Objeto . claves ( _level ) . paraCada ( ( i )  =>  {
                if  ( _level [ i ] . jid  ===  userId )  {
                    posición  =  yo
                }
            } )
            si  ( posición  ! ==  falso )  {
                return  _level [ posición ] . nivel
            }
        }
	
const  getLevelingId  =  ( userId )  =>  {
            dejar  posición  =  falso
            Objeto. claves ( _level ) . paraCada ( ( i )  =>  {
                if  ( _level [ i ] . jid  ===  userId )  {
                    posición  =  yo
                }
            } )
            si  ( posición  ! ==  falso )  {
                return  _level [ posición ] . jid
            }
        }

        const  addLevelingXp  =  ( userId ,  cantidad )  =>  {
            dejar  posición  =  falso
            Objeto . claves ( _level ) . paraCada ( ( i )  =>  {
                if  ( _level [ i ] . jid  ===  userId )  {
                    posición  =  yo
                }
            } )
            si  ( posición  ! ==  falso )  {
                _level [ posición ] . xp  + =  cantidad
                fs . writeFileSync ( './database/json/level.json' ,  JSON . stringify ( _level ) )
            }
        }

        const  addLevelingLevel  =  ( userId ,  cantidad )  =>  {
            dejar posición  =  falso
            Objeto . claves ( _level ) . forEach ( ( i)  =>  {
                si  ( _level [ i ] . jid  === userId )  {
                    posición  =  yo
                }
            } )
            si  ( posición  ! ==  falso )  {
                _level [ posición ] . nivel  + =  cantidad
                fs . writeFileSync ( './database/json/level.json' ,  JSON . stringify ( _level ) )
            }
        }

        const  addLevelingId  =  ( userId )  =>  {
            const  obj  =  { jid : userId ,  xp : 1 ,  nivel : 1 }
            _level . empujar ( obj )
            fs . writeFileSync ( './database/json/level.json' ,  JSON . stringify ( _level ))
        }

función  addMetadata (nombre del paquete ,  autor )  {	
	if  ( ! packname )  packname  =  'NoheBot' ;  if  ( ! autor )  autor  =  'shanduy' ;	
	autor  =  autor . reemplazar ( / [ ^ a-zA-Z0-9 ] / g ,  '' ) ;	
	let  name  =  ` $ { autor } _ $ {nombre del paquete } `
	si  ( fs . existsSync ( `./ $ { nombre } .exif` ) )  de retorno  ` ./ $ { nombre } .exif`
	const  json  =  {	
		"sticker-pack-name" : nombre del paquete ,
		"sticker-pack-publisher" : autor ,
	}
	const  littleEndian  =  Buffer . desde ( [ 0x49 ,  0x49 ,  0x2A ,  0x00 ,  0x08 ,  0x00 ,  0x00 ,  0x00 ,  0x01 ,  0x00 ,  0x41 ,  0x57 ,  0x07 ,  0x00 ] )	
	 bytes  constantes =  [ 0x00 ,  0x00 ,  0x16 ,  0x00 ,  0x00 ,  0x00 ]	

	deje  len  =  JSON . stringify ( json ) . largo	
	deja  durar	

	if  ( len  >  256 )  {	
		len  =  len  -  256	
		bytes . unshift ( 0x01 )	
	}  más  {	
		bytes . unshift ( 0x00 )	
	}	

	si  ( len  <  16 )  {	
		último  =  len . toString ( 16 )	
		último  =  "0"  +  len	
	}  más  {	
		último  =  len . toString ( 16 )	
	}	

	const  buf2  =  Buffer . de ( último ,  "hexadecimal" )	
	const  buf3  =  Buffer . desde ( bytes )	
	const  buf4  =  Buffer . de ( JSON . stringify ( json ) )	

	const  buffer  =  Buffer . concat ( [ littleEndian ,  buf2 ,  buf3 ,  buf4 ] )	

	fs . writeFile ( `./ $ { nombre } .exif` ,  búfer ,  ( err )  =>  {	
		return  `./ $ { nombre } .exif`	
	} )	

} función  kyun ( segundos ) {
  función  de la almohadilla ( s ) {
    return  ( s  <  10 ? '0' : '' )  +  s ;
  }
  var  horas  =  Matemáticas . piso ( segundos  /  ( 60 * 60 ) ) ;
  var  minutes  =  Math . piso ( segundos  %  ( 60 * 60 )  /  60 ) ;
  var  segundos  =  Matemáticas . piso ( segundos  %  60 ) ;

  // return pad (horas) + ':' + pad (minutos) + ':' + pad (segundos)
  return  ` $ { pad ( horas ) } Horas $ { pad ( minutos ) } Minutos $ { pad ( segundos ) } Segundos`
}

 comienza la función  asíncrona ( ) { 
	 cliente  constante =  nueva  conexión WAC ( )
	cliente . versión  =  [ 2 ,  2119 ,  6 ]
        cliente . registrador . nivel  =  'advertir'
	consola . log ( banner . cadena )
	cliente . en ( 'qr' ,  ( )  =>  {
		consola . log ( color ( '[' , 'blanco' ) ,  color ( '!' , 'rojo' ) ,  color ( ']' , 'blanco' ) ,  color ( 'Escanea el codigo QR rapido !!!' ) )
	} )

	fs . ExisteSync ( './Nazwa.json' )  &&  cliente . loadAuthInfo ( './Nazwa.json' )
	cliente . en ( 'conectando' ,  ( )  =>  {
		inicio ( '2' ,  'Desconectado' )
	} )
	cliente . en ( 'abrir' ,  ( )  =>  {
		éxito ( '2' ,  'Conectado por shanduy' )
	} )
	esperar al  cliente . conectar ( { timeoutMs : 30 * 1000 } )
        fs . writeFileSync ( './Nazwa.json' ,  JSON . stringify ( cliente . base64EncodedAuthInfo ( ) ,  nulo ,  '\ t' ) )

	cliente . on ( 'grupo-participantes-actualización' ,  async  ( anu )  =>  {
		si  ( ! welkom . incluye ( anu . jid ) )  return
		intentar {
			const  mdata  =  aguardar al  cliente . groupMetadata ( anu . jid )
			consola . log ( anu )
			if  ( anu . action  ==  'agregar' )  {
				num  =  anu . participantes [ 0]
				teks  =  `Mi loco @ $ { num . split ( '@' ) [ 0 ] } \ nTodo bien NEFASTO !!!! Bienvenido a * $ { mdata . subject } * el mejor grupo una locura 👉😎👈 \ n \ nUn gusto conocerte hijo de la maraca 😀 \ n \ nOjito sigue las reglas del grupo si no, pa fuera mi loco los admins te eliminan 🧐 \ n \ nPara utilizar el bot registrate con el comando $ { prefix } daftar y tu nombre \ n \ nPara ver los demas comandos utiliza $ { prefix } help \ n \ nOjito con el spam 🧐 \ n \ nby shanduy`
                          cliente . sendMessage ( mdata . id ,  teks ,  MessageType . text ,  {  contextInfo : { " PublishedJid " : [ num ] } } )
			}  else  if  ( anu . action  ==  'eliminar' )  {
				num  =  anu . participantes [ 0 ]
				teks  =  `NOOOO se nos fue un NEFASTO 😎 @ $ { num . split ( '@' ) [ 0 ] } 👋 \ n \ nQue dios lo bendiga 😎`
				cliente . sendMessage ( mdata . id ,  teks ,  MessageType . text ,  { contextInfo : { " PublishedJid " : [ num ] } } )
			}
		}  captura  ( e )  {
			consola . log ( 'Error:% s' ,  color ( e ,  'rojo' ) )
		}
	} )

		cliente . on ( 'CB: Blocklist' ,  json  =>  {
            si  ( bloqueado . de longitud  >  2 )  de retorno
	    para  ( sea  i  de  json [ 1 ] . blocklist )  {
	    	bloqueado . empujar ( i . reemplazar ( 'c.us' , 's.whatsapp.net' ) )
	    }
	} )

	cliente . on ( 'chat-update' ,  async  ( mek )  =>  {
		prueba  {
                        si  ( ! mek . hasNewMessage )  volver
                        mek  =  JSON . analizar ( JSON . stringify ( mek ) ) . mensajes [ 0 ]
			si  ( ! mek . mensaje ) return
			if  ( mek . key  &&  mek . key . remoteJid  ==  'status @ broadcast' )  volver
			if  ( mek . key . fromMe )  return
			global . prefijo
			global . obstruido
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Portoviejo').format('HH:mm:ss')
			const date = moment.tz('America/Portoviejo').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: 'Calmao pa estoy procesando😎\n\n❗Por favor no hacer spam👏❗\n\nву ѕнαη∂υу',
				success: '✔️ Listo ✔️',
                                levelon: '❬ ✅ ❭ *Level activado*',
				leveloff: ' ❬ ✅ ❭  *Level desactivado*',
				levelnoton: '❬ ❎ ❭ *Level no esta activado*',
				levelnol: '*Nivel* 0 ',
				error: {
					stick: '[❎] Falló, se produjo un error al convertir la imagen en una pegatina',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '[❗] Este comando es solo para grupos',
					ownerG: '[❗] Este comando solo puede ser utilizado por un admins del grupo',
					ownerB: '[❗] Este comando solo lo usa NoheBot',
					admin: '[❗] Este comando solo puede ser utilizado por administradores del grupo',
					Badmin: '[❗] Este comando solo se puede usar cuando el bot se convierte en administrador',
                                        pegatina: 'Calma crack estoy haciendo tu sticker 👏\n\n*Recuerda los stickersgif son de 6 segundos❗*\n\nву ѕнαη∂υу',
					attp: 'Calma crack estoy haciendo tu texto a sticker 👏\n\n*Esto puede demorar unos minutos*\n\nву ѕнαη∂υу',
					imgs: 'Euu flaco 🥴\n\n*Convirtiendo tu Sticker a Imagen 🔄*\n\nby shanduy',
					mpcancion: 'Calmaoooo estoy procesando 😎\n\n*Convirtiendo de MP4 a MP3 🔄*\n\nву ѕнαη∂υу',
					mpa: 'Euu flaco 🥴\n\n*Estoy decargando tu cancion 🔄*\n\nAguarde un momento, por favor\n\nву ѕнαη∂υу',
                                        xn: 'Calmao pa 😎\n\n*Estoy descargando tu video 🔄*\n\nAguarde un momento, por favor\n\nву ѕнαη∂υу',
					mpv: 'Calma ✋🥸🤚\n\n*Estoy descargando tu video 🔄*\n\nAguarde un momento, por favor\n\nву ѕнαη∂υу',
					insta: 'Calmao 😎\n\n*Estoy descargando tu post 🔄*\n\nAguarde un momento, por favor\n\nву ѕнαη∂υу',
					musica: 'Calmao pa estoy bucando tu canción 😎\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube❗*\n\n*Si el comando *play no funciona utiliza el comando *play2*\n\nву ѕнαη∂υу',
					musica2: 'Calmao pa estoy bucando tu canción 😎\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube❗*\n\n*Si el comando *play2 no funciona utiliza el comando *play*\n\nву ѕнαη∂υу',
					daftarB: `「NO ESTAS REGISTRADO」\n\nPA NO APARECES EN MI BASE DE DATOS ✋🥸🤚\n\nPara poder usarme escribe el siguente comando\n\nComando: ${prefix}daftar Nombre\nEjemplo: ${prefix}daftar shanduy`,
				}
			}
    			const apakah = ['Si','No']
                        const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["593984497032@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
	                const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiTube = isGroup ? antitube.includes(from) : false
			const isAntInsta = isGroup ? antinsta.includes(from) : false
			const isAntiTik = isGroup ? antitik.includes(from) : false
			const isAntiFace = isGroup ? antiface.includes(from) : false
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
                        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '593984497032@s.whatsapp.net'
                        /******Entrada ApiKey******/
                        const BarBarKey = 'Mn2Bf58QHQ8kABoLq80g'
                        /******Fin de la entrada de ApiKey******/

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
           
//FUNCION ANTILINK
if  ( budy . includes ( "https://www.facebook.com/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntiFace )  volver
                if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE FACEBOOK DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será eliminado de este grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}	
if  ( budy . includes ( "https://youtu.be/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntiTube )  volver
	        if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE YOUTUBE DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será eliminado de este grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}
	
	si  ( budy . incluye ( "https://www.instagram.com/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntInsta )  volver
	        if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE INSTAGRAM DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será eliminado de este grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}		
	
	if  ( budy . includes ( "https://vm.tiktok.com/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntiTik )  volver
                if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE TIK TOK DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será eliminado de este grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}
	
       if  ( amigo . incluye ( ": //chat.whatsapp.com/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntiLink )  volver
		if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE WHATSAPP DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será expulsado del grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}
		if  ( budy . includes ( "https://youtu.be/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntiTube )  volver
	        if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE YOUTUBE DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será eliminado de este grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}
	
	si  ( budy . incluye ( "https://www.instagram.com/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntInsta )  volver
	        if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE INSTAGRAM DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será eliminado de este grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}		
	
	if  ( budy . includes ( "https://vm.tiktok.com/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntiTik )  volver
                if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE TIK TOK DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será eliminado de este grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}
	
       if  ( amigo . incluye ( ": //chat.whatsapp.com/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntiLink )  volver
		if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE WHATSAPP DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será expulsado del grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}
		if  ( budy . includes ( "https://vm.tiktok.com/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntiTik )  volver
                if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE TIK TOK DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será eliminado de este grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}
	
       if  ( amigo . incluye ( ": //chat.whatsapp.com/" ) ) {
		si  ( ! isGroup )  volver
		si  ( ! isAntiLink )  volver
		if  ( isGroupAdmins )  return  reply ( 'Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)' )
		cliente . updatePresence ( desde ,  Presence . componiendo )
		var  kic  =  ` $ { remitente . split ( "@" ) [ 0 ] } @ s.whatsapp.net`
		responder ( `* LINK DE WHATSAPP DETECTADO 📢 * $ { sender . split ( " @ " ) [ 0 ] } Usted será expulsado del grupo` )
		setTimeout (  ( )  =>  {
			cliente . groupRemove ( de ,  [ kic ] ) . catch ( ( e ) => { responder ( `* ERR: * $ { e } ` ) } )
		} ,  0 )
		setTimeout (  ( )  =>  {
			cliente . updatePresence ( desde ,  Presence . componiendo )
			responder ( "Adios mi loco" )
		} ,  0 )
	}
		
		// FUNCION DE LEVEL
            if  ( isGroup  &&  isLevelingOn )  {
            const  currentLevel  =  getLevelingLevel ( remitente )
            const  checkId  =  getLevelingId ( remitente )
            prueba  {
                if  ( currentLevel  ===  undefined  &&  checkId  ===  undefined )  addLevelingId ( remitente )
                const  amountXp  =  Math . piso ( Math . aleatorio ( )  *  10 )  +  500
                const  requiredXp  =  5000  *  ( Math . pow ( 2 ,  currentLevel )  -  1 )
                const  getLevel  =  getLevelingLevel ( remitente )
                addLevelingXp ( remitente ,  amountXp )
                if  ( requiredXp  <=  getLevelingXp ( sender ) )  {
                    addLevelingLevel ( remitente ,  1 )
                    aguardar  respuesta ( `*「 SUBIR DE NIVEL 」* \ n \ n➸ * Nombre *: $ { remitente } \ n➸ * XP *: $ { getLevelingXp ( remitente ) } \ n➸ * Nivel *: $ { getLevel } -> $ { getLevelingLevel ( remitente ) } \ n \ nFelicidades weon !! 🎉🎉` )
                }
            }  atrapar  ( err )  {
                consola . error ( err )
            }
        }

			colores  =  [ 'rojo' , 'blanco' , 'negro' , 'azul' , 'amarillo' , 'verde' ]
			const  isMedia  =  ( tipo  ===  'imageMessage'  ||  tipo  ===  'videoMessage' )
			const  isQuotedImage  =  type  ===  'extendedTextMessage'  &&  contenido . incluye ( 'imageMessage' )
			const  isQuotedVideo  =  type  ===  'extendedTextMessage'  &&  contenido . incluye ( 'videoMessage' )
			const  isQuotedSticker  =  type  ===  'extendedTextMessage'  &&  contenido . incluye ( 'stickerMessage' )
			if  ( ! isGroup  &&  isCmd )  consola . log ( '\ x1b [1; 31m ~ \ x1b [1; 37m>' ,  '[\ x1b [1; 32mEXEC \ x1b [1; 37m]' ,  hora ,  color ( comando ) ,  'desde' ,  color ( remitente . división ( '@' ) [ 0 ] ) ,  'args:' ,  de color ( args . de longitud ) )
			if  ( ! isGroup  &&  ! isCmd )  consola . log ( '\ x1b [1; 31m ~ \ x1b [1; 37m>' ,  '[\ x1b [1; 31mRECV \ x1b [1; 37m]' ,  hora ,  color ( 'Mensaje' ) ,  'desde' ,  color ( sender . split ( '@' ) [ 0 ] ) ,  'args:' ,  color ( args . length ) )
			if  ( isCmd  &&  isGroup )  consola . log ( '\ x1b [1; 31m ~ \ x1b [1; 37m>' ,  '[\ x1b [1; 32mEXEC \ x1b [1; 37m]' ,  hora ,  color ( comando ) ,  'desde' ,  color ( remitente . división ( '@' ) [ 0 ] ) ,  'en' ,  de color ( nombre de grupo ) ,  'args:' ,  de color ( ) args . length )
			if  ( ! isCmd  &&  isGroup )  consola . log ( '\ x1b [1; 31m ~ \ x1b [1; 37m>' ,  '[\ x1b [1; 31mRECV \ x1b [1; 37m]' ,  hora ,  color ( 'Mensaje' ) ,  'desde' ,  color ( sender . split ( '@' ) [ 0 ] ) ,  'in' ,  color ( groupName ) ,  'args:' ,  color ( ) ) args . length
 
       / ****** ENTRADA FIN DE FUNCIONES ****** /
			function  addMetadata (nombre del paquete ,  autor )  {	
				if  ( ! packname )  packname  =  'ShanBot' ;  if  ( ! autor )  autor  =  'Shanduy' ;	
				autor  =  autor . reemplazar ( / [ ^ a-zA-Z0-9 ] / g ,  '' ) ;	
				let  name  =  ` $ { author } _ $ { packname } `
				si  ( fs . existsSync ( `./src/stickers/ $ { nombre } .exif` ) )  de retorno  ` ./src/stickers/ $ { nombre } .exif`
				const  json  =  {	
					"sticker-pack-name" : nombre del paquete ,
					"sticker-pack-publisher" : autor ,
				}
				const  littleEndian  =  Buffer . desde ( [ 0x49 ,  0x49 ,  0x2A ,  0x00 ,  0x08 ,  0x00 ,  0x00 ,  0x00 ,  0x01 ,  0x00 ,  0x41 ,  0x57 ,  0x07 ,  0x00 ] )	
				 bytes  constantes =  [ 0x00 ,  0x00 ,  0x16 ,  0x00 ,  0x00 ,  0x00 ]	

				deje  len  =  JSON . stringify ( json ) . largo	
				deja  durar	

				if  ( len  >  256 )  {	
					len  =  len  -  256	
					bytes . unshift ( 0x01 )	
				}  más  {	
					bytes . unshift ( 0x00 )	
				}	

				si  ( len  <  16 )  {	
					último  =  len . toString ( 16 )	
					último  =  "0"  +  len	
				}  más  {	
					último  =  len . toString ( 16 )	
				}	

				const  buf2  =  Buffer . de ( último ,  "hexadecimal" )	
				const  buf3  =  Buffer . desde ( bytes )	
				const  buf4  =  Buffer . de ( JSON . stringify ( json ) )	

				const  buffer  =  Buffer . concat ( [ littleEndian ,  buf2 ,  buf3 ,  buf4 ] )	

				fs . writeFile ( `./src/stickers/ $ { nombre } .exif` ,  búfer ,  ( err )  =>  {	
					return  `./src/stickers/ $ { nombre } .exif`	
				} )	

			}
			cambiar ( comando )  {
		caso  'ayuda' :
		caso  'menú' :   
                cliente . sendMessage ( de ,  ayuda ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
                caso  'otak' :
		cliente . sendMessage ( de ,  otaku ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
		caso  'juegos' :
		cliente . sendMessage ( de ,  juegos ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
		caso  'idioma' :
		cliente . sendMessage ( de ,  bahasa ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
		caso  'Nohemenu' :
		cliente . sendMessage ( from ,  toinmenu ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
		caso  'menuadmin' :
		cliente . sendMessage ( de ,  menuadmin ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
		caso  'nsfwmenu' :
		cliente . sendMessage ( de ,  nsfwmenu ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
		caso  'desmenu' :
		cliente . sendMessage ( de ,  desmenu ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
		caso  'versión' :
		caso  'versión' :
		cliente . sendMessage ( de ,  versión ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
		caso  'antimenu' :
		cliente . sendMessage ( de ,  antimenu ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
                caso  'welmenu' :
		cliente . sendMessage ( de ,  welmenu ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
		caso  'shantera' :
		cliente . sendMessage ( de ,  shantera ( prefijo ,  remitente ) ,  texto ,  { citado : mek } )
		pausa
					
		/ * caso 'virtex':
	       caso 'troleo':
               client.sendMessage (de, virtex (prefijo, remitente), texto, {citado: mek})
               pausa*/
                            caso  'degradar' :
				
