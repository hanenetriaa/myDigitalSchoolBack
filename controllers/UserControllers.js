// importation 

const User = require("../models/User");

const register = async (req,res) => {
try {
    const user = new User ({...req.body});    
    await User.create(user);
    res.status(201).json({
        message: "user enregistrer",
        data: user,
    })

 } catch (error) {
    res.status(400).json({
        msg: "error " + error.message,
      });
    
}
}
