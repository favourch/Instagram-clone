var mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
  var Schema = mongoose.Schema;

  var postSchema = new Schema({
   title: {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    likes: [{type: ObjectId, ref: "User"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    postedBy : {
        type: ObjectId,
        ref : "User"
    }
  });

  mongoose.model('Post', postSchema);