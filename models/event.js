const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    date: Date,
    dateString: String,
    timeString: String,
    happeningSoon: Boolean,
    isPast: Boolean,

});

module.exports = mongoose.model('Event', eventSchema);

