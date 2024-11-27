import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }},
    {
        timestamps: true //konse time pe hua hai convers.. 
    }
);

const conversation = mongoose.model('Conversation', ConversationSchema);

export default conversation;