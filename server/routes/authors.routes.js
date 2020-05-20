const AuthorController = require('../controllers/authors.controller');


module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors/add', AuthorController.createAuthor)
    app.put('/api/authors/:id', AuthorController.editAuthor);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}