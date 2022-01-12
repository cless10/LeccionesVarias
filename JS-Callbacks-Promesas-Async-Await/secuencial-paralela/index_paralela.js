//codigo paralelo
const { taskOne, taskTwo} = require('./tasks'); 

async function main () {
    try {
        console.time('Measuring time');
        //ejecutamos de forma paralela
        const results =  await Promise.all([taskOne(), taskTwo()]);      //con Promise.all, se hace un arreglo de lo que se desea ejecutar de forma paralela
        
        console.timeEnd('Measuring time');

        console.log('Task One returned: ', results[0]);
        console.log('Task Two returned: ', results[1]);
    }
    catch(e) {
        console.log(e);
    }
}

main();