var server = require('./server');

server.listen(4000, ()=> {
    console.log(`[SERVER] Rodando em http://localhost:4000`);
});