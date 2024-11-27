
import mongoose from 'mongoose';


const ConnectDB = async (username, password) => {
    const ChatURL= `mongodb://${username}:${password}@mychatapp-shard-00-00.vkyew.mongodb.net:27017,mychatapp-shard-00-01.vkyew.mongodb.net:27017,mychatapp-shard-00-02.vkyew.mongodb.net:27017/?ssl=true&replicaSet=atlas-m9rt7o-shard-0&authSource=admin&retryWrites=true&w=majority&appName=MyChatApp`;
    try {
        await mongoose.connect(ChatURL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};
export default ConnectDB;