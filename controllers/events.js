const Event = require('../models/event');

module.exports = {
    index, new: newEvent, create, delete: deleteEvent, edit, update
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
    event.dateString = event.date.toDateString();
    event.timeString = event.date.toLocaleTimeString();
    //event.userId = req.user._id isLoggedIn
    


    event.save(function(err) {
      if (err) {console.log(err);return res.redirect('/events/new')}
    
      
      res.redirect('/events');
    })}

function deleteEvent(req, res) {
        Event.findByIdAndDelete(req.params.id, function (err) {
            if(err) console.log('Error');
            console.log('Successfully deleted.');
    
            res.redirect('/events');
        });
    }
    
function edit(req,res) {
      Event.findById(req.params.id, function(err, event) {
       if (err) {
        console.log(err)
        res.redirect('/events/index')
       } else {
        
        res.render('events/edit', { title: 'Edit Details', event });
      }})
    }
    
function update(req, res) {
      Event.findByIdAndUpdate(req.params.id, req.body, function(err, event){
        if (err) {
          console.log(err)
          res.redirect("/events/edit")
        } else {

          event.save(function(err) {
            if (err) {console.log(err);return res.redirect('/events/new')}
          
      })
    
    };})}
    