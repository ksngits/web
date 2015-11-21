var FBAPP = FBAPP || {};
var fburl = 'https://p8c8.firebaseio.com';

FBAPP.store =
{
	auth: function ()
	{
		var fbref = new Firebase(fburl);
		var status='';

		fbref.authAnonymously(function(error, authData) {
        if (error) {
        		status = 'error:' + error; 
          } 
        });
        return status;
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