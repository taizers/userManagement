const User = require('../models/user.model');

exports.getAllUsers = (req,res) => {
    const pageOptions = {
        page: +req.query.page-1,
        limit: +req.query.limit,
    }

    User.count({},(_,count) => {
        const totalPages = Math.ceil(count/pageOptions.limit);

        User.find()
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)
            .exec((error, document) => {
                if(error) { res.status(500).json(error); return; }
                res.status(200).json({
                    "data":document,
                    "totalPages": totalPages,
                });
            });
    });
};

exports.getUser = (req,res) => {
    User.findOne({ _id: req.params.id })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.updateUserData = (req,res) => {
    const user = req.body;
    User.findOneAndUpdate(
        { 
            _id: req.params.id 
        }, 
        { 
            $set: {first_name: user.body.first_name, last_name: user.body.last_name, updatedAt: Date.now()} 
        }, 
        { 
            returnDocument: "after"
        },
        function (err, result) {
            if(err) { res.status(500).json(err); return; }
            res.status(200).json(result);
        }
    )
};

exports.createUser = (req,res) => {
    const body = req.body.body;

    const newUser = new User(body);
    newUser.save()
        .then(() => res.json('added'))
        .catch(() => res.status(400))
};

exports.deleteUser = (req,res) => {
    User.deleteOne({ _id: req.params.id })
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
};