const conexion  = require('../utils/conexion').pool;
/**
 * Metodo que registra un nuevo usuario
 * @param {*} request 
 * @param {*} response 
 */
exports.registrarUsuario = (request, response) => {
    let login = request.body.usuario;
    let pass = request.body.clave;
    let nombre = request.body.sunombre;
    let apellido = request.body.suapellido;
    let idRol = request.body.rol;
    let idEstado = request.body.estado;
    conexion.query('insert into servicios.usuario (login_name, password, nombre, apellido, id_rol, id_estado) values (?,?,?,?,?,?)', [login, pass, nombre, apellido, idRol, idEstado], (error, result) => {
        if(error){
            throw error;
        } else{
            response.send('Usuario creado correctamente');
        }
    });
};

/**
 * Metodo que consulta un usuario por Login
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarUsuarioLogin = (request, response) => {
    let loginName = request.params.user;
    let password = request.params.pass;
    conexion.query('select login_name, password, nombre, apellido, id_rol, id_estado from cyatv.usuario where login_name = ? and password = ?', [loginName, password], (error, result) => {
        if(error){
            throw error;
        } else{
            response.send(result);
        }
    });
};
