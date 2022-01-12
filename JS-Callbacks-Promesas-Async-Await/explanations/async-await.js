//código con async-await
async function requestHandler(req, res) {
    try {
        const user = await User.findById(req.userId);       //se puede no devolver nada, una ves terminada esta linea, sigue con la siguiente
        const tasks = await Tasks.findById(user.taskId);
        tasks.completed = true;
        await tasks.save();
        res.send('Tasks completed');
    } 
    catch(e) {
        res.send(e);
    }
    //cualquier código
}

//Al funcionar js de forma asincrona, tambien se puede utilizar la forma async await para realizar el código de forma sincrona, 
//igual se simulan operaciones con una bd mongo

//await solo está disponible cuando las funciones están determinadas con async
//para cachar los errores en esta forma, hay que utilizar las palabras try, catch
//async await puede ser usado de forma secuencial o paralela