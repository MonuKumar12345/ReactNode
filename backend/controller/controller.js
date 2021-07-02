const userDB = require('./../model/model');

exports.register = async (req, res) => {
    let exist = false;
    if (req.body.email !== '' && req.body.email !== null) {
        exist = await userDB.exists({ email: req.body.email });
    }
    if (!exist) {
        const user = new userDB({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            password: req.body.password
        });
        await user.save().then(data => {
            res.send({ data: data, message: "User registered successfully", success: true });
        });
    }
    else {
        res.send({ data: "", message: "User already exist with this email", success: false });
    }
}

exports.login = async (req, res) => {
    await userDB.find({ email: req.body.email, password: req.body.password }, function (err, docs) {
        if (err) return handleError(err);
        if (docs.length > 0) {
            res.send({ data: docs, message: "Login successfull", success: true });
        }
        else {
            res.send({ data: docs, message: "Email or password is incorrect", success: false })
        }
    })
}