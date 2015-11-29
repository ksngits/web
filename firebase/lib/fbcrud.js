//var root = new Firebase('https://p8c8.firebaseio.com/p8c8');
var root = 'https://p8c8.firebaseio.com/';

var urls = {
  path: {
      root:root,
      members:root + '/members/',
      visits:root + '/visits/'
  }
}

var OnAuthenticate = function(error,authData) {
	if (error)
  {
    ShowAnonyMsg(-1);
  }
  
  if (authData) 
  {
		ShowAnonyMsg(1);
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

function onAddMemberButtonClicked(email, name) {
  var userref = new Firebase(urls.path.members); 
  userref.set (
                {
                    member:
                    {
                        email:email,
                        name:name,
                        created: Firebase.ServerValue.TIMESTAMP
                    }
                }

        );
  onMemberAdded();

} 

function onMemberAdded()
{
  var userref = new Firebase(urls.path.members); 
  // Retrieve new posts as they are added to our database
  userref.on("child_added", function(snapshot, prevChildKey) {
    var member = snapshot.val();
    console.log("Member: " + member.name);
    console.log("Email: " + member.email);
    console.log("timestamp: " + member.created);
    notify(member)
  });
}

function notify(member)
{
  /** not good but a simple POC **/
  var d = new Date(member.created);
  
  $("#notify").empty();
  $('#notify').html('<div class="panel-body"><div class="list-group"><a href="#" class="list-group-item"><i class="fa fa-comment fa-fw"></i>' + member.name  + ' - '  + member.email + 
                    '<span class="pull-right text-muted small"><em>' + d + '</em></span></a></div></div>');
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