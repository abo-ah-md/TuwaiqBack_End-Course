const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const StudentSchema = new Schema({

   courses: [{ type: Schema.Types.ObjectId, ref: 'courses' }], 
   firstName:{
      type:String,
      required:true,
   }

},{ timestamps: true })


const student = mongoose.model("student",StudentSchema);

module.exports={student}