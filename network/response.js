exports.success = function(req, res, mensaje, status){
    //
    res.status(status || 200).send({
        "error": "",
        "body": mensaje
    })
}

exports.error = function(req,res,mensaje,status,info){
    //Info del error para logear
    console.log(info);
    res.status(status || 500).send({
        "error": mensaje,
        "body": ""
    })
}