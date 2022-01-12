//código con callback (funcion como parámetro de otra funcion)
function requestHandler(req, res) {
    User.findById(req.userId, function(err, user) {           //aqui se simula una llamada a BD
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.taskId, function(err, tasks) {           //aqui se simula otra llamada a BD
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function(err){           //aqui se simula otra llamada a BD, no hay valor de retorno, pero puede haber un error
                        if (err) {
                            return res.send(err);
                        } else {
                            res.send('Task completed');
                        }
                    })
                }
            })
        }
    })
    //cualquier código
}

//Al funcionar js de forma asincrona, se utilizan callbaks para realizar el código de forma sincrona, se simulan operaciones
//con una bd mongo
//codigo similar, se le conoce como 'piramide de la muerte' o 'callback hell'