class Multimedia{
    /*
    Se cree una función privada que reciba la url del video y el id de la etiqueta
    iframe, para así poder mostrar los videos en el documento HTML. Dato:
    puedes utilizar la instrucción “setAttribute” para manipular el DOM.
    Se retorne una función pública que reciba los parámetros (url, id), y realice el
    llamado a la función interna (privada) para insertar los elementos recibidos.
*/
    constructor(){
        let url = '';
        this._url = url;
    }
        get url(){
            return this._url;
        }
        setInicio(){
            console.log('Este método es para realizar un cambio en la URL del video');
        }
}


class Reproductor extends Multimedia{
    constructor(url,id){
        super(url);
        this._id = id;
        this.playMultimedia = function(){

        }
    }  
}

export{ Multimedia, Reproductor}


 