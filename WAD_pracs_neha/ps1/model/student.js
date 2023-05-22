const mongoose = require('mongoose');

const Student = mongoose.Schema({
    name:{type:String},
    rollno: { type: Number },
    wad_marks: { type: Number },
    cc_marks: { type: Number },
    dsbda_marks: { type: Number },
    cns_marks: { type: Number },
    ai_marks: { type: Number },
})

module.exports = mongoose.model('Student',Student);