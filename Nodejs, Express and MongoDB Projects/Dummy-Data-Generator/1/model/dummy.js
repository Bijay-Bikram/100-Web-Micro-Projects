const mongoose = require("mongoose")

const DummySchema = mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: true,
})
export const Dummy = mongoose.model('dummydata', DummySchema);