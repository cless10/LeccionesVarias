
//código secuencial
const util = require('util');       //modulo con algunas utilidades
const sleep = util.promisify(setTimeout);          //convierte funciones que se manejan con callbaks a funciones que se pueden manejar con promesas o con asyn-await

module.exports = {

        async taskOne(){
            try {                                       //sin try se trunca el programa, con try se muestra el error pero sigue la ejecucion del programa
                //throw new Error('SOME PROBLEM');        //PODEMOS INSERTAR UN ERROR, PARA VER COMO SE TRUNCA EL PROGRAMA
                await sleep(4000);
                return 'ONE VALUE';
            }
            catch(err) {
                console.log(err);
            }
        },

        async taskTwo(){
            await sleep(2000);
            return 'TWO VALUE';
        }
}