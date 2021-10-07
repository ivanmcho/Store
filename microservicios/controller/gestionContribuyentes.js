var conexion = require('../utils/conexion').pool;


/**
 * Metodo que consulta un contribuyente por Nit
 * @param {*} request 
 * @param {*} response 
 */
exports.consultarContribuyentesNit = (request, response) => {
    var nit = request.params.nit;
        conexion.query('select nit, nombres, apellidos, direccion, correo, telefono from cyatv.contribuyente where nit = ?', nit, (error, result) => {
            if(error){
                throw error;
            } else{
                response.send(result);
            }
        });
};

/**
 * Metodo que consulta un contribuyente por Nit
 * @param {*} request 
 * @param {*} response 
 */
 exports.crearContribuyentes = (request, response) => {
    let nit = request.body.nit;
    let nombres = request.body.nombres;
    let apellidos = request.body.apellidos;
    let direccion = request.body.direccion;
    let correo = request.body.correo;
    let telefono = request.body.telefono;
    console.log(nit, nombres, apellidos, direccion)
    conexion.query('insert into cyatv.contribuyente (nit, nombres, apellidos, direccion, correo, telefono) values (?,?,?,?,?,?)', [nit, nombres, apellidos, direccion, correo, telefono], (error, result) => {
        if(error){
            response.send(false);
            throw error;
            
        } else{
            response.send(true);
        }
    });
};

//update games set? where id = ?
/**
 * Metodo que consulta un contribuyente por Nit
 * @param {*} request 
 * @param {*} response 
 */
 exports.actualizarContribuyentes = (request, response) => {
    let nit = request.params.nit;
    
    conexion.query('UPDATE cyatv.contribuyente set ? where nit = ? ', [request.body, nit], (error, result) => {
        if(error){
            console.log("Algo anda mal")
            throw error;
        } else{
            console.log("Exitoso")
            response.send(true);
        }
    });
};

exports.eliminarContribuyente = (request, response) => {
    let nit = request.params.nit;
    
    conexion.query('DELETE FROM cyatv.contribuyente where nit = ? ', [nit,], (error, result) => {
        if(error){
            throw error;
        } else{
            
            response.send(true);
        }
    });
};