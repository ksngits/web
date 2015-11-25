var cliRef = new Firebase('https://p8c8.firebaseio.com/');
var uid = null;

var OnAuthenticate = function(authData) {
	if (authData) {
		ShowAnonyMsg(1);
	}
	else
	{
		ShowAnonyMsg(-1);
	}
	cliRef.offAuth();
}


function ShowAnonyMsg (status)
{
	if (status == 0)
	{
		
		document.getElementById('result').innerHTML = 'Processing...';
		document.getElementById('result').style.visibility = 'hidden';

	}
	
	if ( status == 1)
	{
		document.getElementById('result').innerHTML = 'Firebase connected successfully';
		document.getElementById('result').setAttribute ='class','btn btn-sm btn-success';;
		document.getElementById('result').style.visibility = 'visible';
	}

	if ( status == -1)
	{
		document.getElementById('result').innerHTML ='Firebase:Authentication Failed ';
		document.getElementById('result').setAttribute ='class','btn btn-sm btn-danger';
		document.getElementById('result').style.visibility = 'visible';
	}
}


/** At the end 
function onLoginButtonClicked() {
	cliRef.OnAuth(OnAuthenticate);
	cliRef.authAnonymously(function(error, authData) {
	  if (error) {
	    console.log("Authentication Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});
}
**/

function onLoginButtonClicked() {
	/*cliRef.onAuth(OnAuthenticate(authData));*/
	ShowAnonyMsg(0);
	cliRef.authAnonymously(OnAuthenticate);
}


/** Init POC

  var auth = function Authenticate()
    {
        var btnel = document.getElementById('result');
        btnel.style.visibility = 'hidden';
        
        var p1 = new Promise(
            function (resolve,reject)
            {
                var fbref = new Firebase('https://p8c8.firebaseio.com');        
                    fbref.authAnonymously(function(error, authData) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(authData);
                    }
                });  
            }
         ); 

         p1.then( 
                function val() {EnableUI();}
               )
           .catch(
                function(){DisableUI();}
               ); 
    }
    

    function EnableUI()
    {
       var btnel = document.getElementById('result');
       btnel.setAttribute('class','btn btn-sm btn-success');
       btnel.innerHTML ='Firebase connected successfully';
       btnel.style.visibility = 'visible';
    }

    function DisableUI()
    {
       var btnel = document.getElementById('result');
       btnel.style.visibility = 'hidden';
       btnel.setAttribute('class','btn btn-sm btn-danger');
       btnel.innerHTML ='error';
       btnel.style.visibility = 'visible';
    }
**/