var data = {
	rsvp: ['ixd@ucsd.edu']
};

exports.adminView = function(request, response){
	response.render('rsvp', data);
};

exports.addRSVP = function(request, response) {
	var rsvpEmail = request.body.rsvpEmail;
	//Print to terminal whenever the post request is 
	console.log(rsvpEmail);
    //add to current data
	data.rsvp.push(rsvpEmail);
	//Send back data so we know it works
	response.send(rsvpEmail);
}