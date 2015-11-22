var fbase =
{
	fburl :'https://p8c8.firebaseio.com',
	
	Authenticate: function () {
		console.log("inside fbapp");
        return 0;
	},

	// This function has to move out
	timestamp : function timestamp ()
	{
		var currentdate = new Date();
        var datetime = " : " + currentdate.getDate() + "/"+ (currentdate.getMonth() +1 )
        + "/" + currentdate.getFullYear() + " @ " 
        + currentdate.getHours() + ":" 
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        return datetime;
	}
}