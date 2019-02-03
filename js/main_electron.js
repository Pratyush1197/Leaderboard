var myid = config.MY_ID;
var mykey = config.MY_KEY;
var i,j;
var key = data_config.API_KEY;

$(document).ready(function(){
    $.ajax({ 
        url: "https://api.mlab.com/api/1/databases/git_app/collections/leaderboard?apiKey=" + key,
    }
).done(function(data){
   
    
    for(j = 0; j<=data.length-1; j++){
        if(data[j].repo == 'Rocket.Chat.Electron'){
        var username = data[j].title;
        $("#tab1_electron").append("<tr><td>"+username+"</td><tr>")

 
    $.ajax({
        url:'https://api.github.com/repos/'+ username +'/Rocket.Chat.Electron/events',
        
        data:{
          client_id:'myid',
          client_secret:    'mykey'

          
        }
        
    }).done(function(user){
       
        var count = 0;
        for(i = 0; i<=user.length-1; i++){
        var pull = user[i].type;
        
        if (pull == 'CreateEvent'){
            count = count + 1;
           
            
            
        }
    } 
       $("#tab2_electron").append("<tr><td>"+count+"</td></tr>")
});
    }   
  
}     
});
    });



