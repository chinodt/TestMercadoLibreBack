const request = require('request')

module.exports = {
    /*
    ** Devuelve un objeto promise dependiendo del resultado del request
    */
    make_API_call : function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
              if (err) reject(err)
              resolve(body)
            });
        })
    }
}