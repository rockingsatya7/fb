$(document).ready(function(){

  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
   var data=response.authResponse.accessToken; 
   console.log(data);
    $.post( "http://nodejsfb-rockingsearch.rhcloud.com/post",{str:data},function(val,err) {      					
                                  alert('satya');
                                  console.log(val);
                                  testAPI(val);                              
     
      });
     }
   
     else {
          FB.login(function(response) {
       statusChangeCallback(response);      
   
    }, {scope: 'public_profile,email'});
    
  }



  window.fbAsyncInit = function() {
  FB.init({
    appId      : '760328037356611',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.0' // use version 2.0
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "/script/req.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

 function testAPI(val) {
    console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
       console.log(val);
        
    });
  }
  });