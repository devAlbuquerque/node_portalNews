class NoticiasDAO {

    constructor(connection){
        this.connection = connection;
    }
    
    getNoticias(callback){
        this.connection.query('select * from noticias order by data_criacao desc', callback);
    }
    
    getNoticia(parametro, callback){
        this.connection.query('select * from noticias where id_noticia = ' + parametro.id_noticia, callback);
    }

    get5ultimasNoticias(callback){
        this.connection.query('select * from noticias order by data_criacao desc limit 5', callback);
    }
    
    salvarNoticia(noticia, callback){
        this.connection.query('insert into noticias set ? ', noticia, callback);
    }
}

/*function Noticias() {

}

Noticias.prototype.getNoticias = function(connection, callback){
    connection.query('select * from noticias', callback);
}

Noticias.prototype.getNoticia = function(connection, callback){
    connection.query('select * from noticias where id_noticia = 1', callback);
}

Noticias.prototype.salvarNoticia = function(noticia, connection, callback){
    connection.query('insert into noticias set ? ', noticia, callback);
}
*/

module.exports = function () {
    return NoticiasDAO;
}