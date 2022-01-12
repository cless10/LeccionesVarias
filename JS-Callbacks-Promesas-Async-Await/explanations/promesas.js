//código como promesa
function requestHandler(req, res) {
    User.findById(req.userId)
        .then(function (user) {            //se maneja el fin como una función
            //res.send(user);       //se puede devolver el usuario
            return Tasks.findById(user.taskId)
        })
        .then(function (tasks) {
            tasks.completed = true;
            return tasks.save();
        })
        .then(function () {
            res.send('Tasks completed');
        })
        .catch(function(errors) {              //el catch cacha todos los errores de los then
            res.send(errors);
        })
    //cualquier código
}

//Al funcionar js de forma asincrona, tambien se puede utilizar promesas para realizar el código de forma sincrona, 
//igual se simulan operaciones con una bd mongo