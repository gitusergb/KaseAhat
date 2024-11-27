import User from "../model/User.js";


export const addUser = async (request, response) => {
    try {
       
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
            response.status(200).json({msg:'user already exists'});
            return;
        }
        console.log(response.body)
        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json(newUser);
    } catch (error) {
      response.status(500).json(error);
    }
}

export const getUser = async (request, response) => {
    try {
        const user = await User.find({});
        console.log(response.body);
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
}