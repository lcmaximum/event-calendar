const Event = require('../models/event');

module.exports = {
    index, new: newEvent, create
}

function index(req,res) {
    Event.find({}, function(err, events) {
        res.render('events/index', {title: 'All Events', events});
    }).sort({date: 1})
}

function newEvent(req,res) {
    res.render('events/new', {title: 'Add new event'})
}

//function CREATE
function create(req, res) {  
    for (let key in req.body) {
        
        if (req.body[key] === '') delete req.body[key];
    }
    
    const event = new Event(req.body);
    //event.userId = req.user._id isLoggedIn
    


    event.save(function(err) {
      if (err) {console.log(err);return res.redirect('/events/new')}
    
      
      res.redirect('/events');
    })}