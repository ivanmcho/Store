const gestionUsuarios = require ('../controller/usuario');
const gestionCliente = require ('../controller/gestionContribuyentes');

const appRouter = function(app){
    //Rutas get para consultas
    
    app.get('/usuario/consultarUsuarioLogin/:user-:pass', gestionUsuarios.consultarUsuarioLogin);
    /**
    app.get('/usuario/consultarUsuarios', gestionUsuarios.consultarUsuarios);

    */
    //Rutas post para modificaciones
    app.post('/usuario/registrarUsuario', gestionUsuarios.registrarUsuario);
     
    //CRUD CLIENTES
    app.get('/cliente/:nit', gestionCliente.consultarContribuyentesNit);
    app.put('/cliente/:nit', gestionCliente.actualizarContribuyentes);
    app.post('/cliente', gestionCliente.crearContribuyentes);
    app.delete('/cliente/:nit', gestionCliente.eliminarContribuyente);
    
}

module.exports = appRouter;
