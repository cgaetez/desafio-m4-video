    /*
    Se cree una función privada que reciba la url del video y el id de la etiqueta
    iframe, para así poder mostrar los videos en el documento HTML. Dato:
    puedes utilizar la instrucción “setAttribute” para manipular el DOM.
    Se retorne una función pública que reciba los parámetros (url, id), y realice el
    llamado a la función interna (privada) para insertar los elementos recibidos.
*/
class Multimedia{

    constructor(url){
        this._url = url;
    }
    get url(){
        return this._url;
    }
    setInicio(){
        let mensaje = 'Este método es para realizar un cambio en la URL del video';
        console.log(mensaje);
        return mensaje;
    }
}


    class Reproductor extends Multimedia{
        constructor(url,id){
            super(url);
            this._id = id;
        } 
        playMultimedia(){
            moduloMultimedia.changeVideo(this._url,this._id);
        } 
        setInicio(time){
            let src = `${this.url}?start=${time}`;
            moduloMultimedia.changeVideo(src, this._id);
        }
    }

    //Implementar el Patrón Módulo mediante IIFE, en donde:
/* Se retorne una función pública que reciba los parámetros (url, id), y realice el
llamado a la función interna (privada) para insertar los elementos recibidos.*/
/*Se cree una función privada que reciba la url del video y el id de la etiqueta
iframe, para así poder mostrar los videos en el documento HTML. Dato:
puedes utilizar la instrucción “setAttribute” para manipular el DOM.*/

        var moduloMultimedia = (function() {
            
            function changeIframeVideo(url,id){
            document.getElementById(id).setAttribute('src',url);
            }

            function changeVideo(url,id){
            changeIframeVideo(url,id);
            }
            return {
            changeVideo: changeVideo
            }      
        })();
   


export{ Multimedia, Reproductor, moduloMultimedia}


 