const  {Author}  = require('../models/authors.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}

module.exports.editAuthor = (req,res)=> {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(editAuthor => res.json(editAuthor))
            .catch(err => res.status(400).json(err));
}

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

module.exports.getOneAuthor = (req, res) =>{
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err=>res.json(err));
}