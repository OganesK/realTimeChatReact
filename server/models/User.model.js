import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:String,
    password:String,
    firtname:String,
    lastname:String,
    friendList:[
        {
            name:String,
            dialog:[
                {
                    from:String,
                    time:String,
                    value:String
                }
            ]
        }
    ]
})

export default mongoose.model('User', UserSchema);