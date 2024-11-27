import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
// MongoDB URI
const mongoURI = `mongodb://${username}:${password}@mychatapp-shard-00-00.vkyew.mongodb.net:27017,mychatapp-shard-00-01.vkyew.mongodb.net:27017,mychatapp-shard-00-02.vkyew.mongodb.net:27017/?ssl=true&replicaSet=atlas-m9rt7o-shard-0&authSource=admin&retryWrites=true&w=majority&appName=MyChatApp`;

const storage = new GridFsStorage({
    url:mongoURI,
    options:{useNewUrlParser: true,useUnifiedTopology: true},//old parser is depricated please use new one 
    file: (request, file) => {
        const match = [ 
        "image/png",
        "image/jpg",
        "image/jpeg"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName:'photos',
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

const upload = multer({storage});

//module.exports = upload;
export default upload; 