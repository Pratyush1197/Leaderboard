$(document).ready(function(){
    $('#button1').click(function(e){
        e.preventDefault();
        var title = $('#title').val();
        var repo = $('#repo').val();
        var username;
        var key = data_config.API_KEY;

        
        
           
            console.log('data');
        



         
        $.ajax({ url: "https://api.mlab.com/api/1/databases/git_app/collections/leaderboard?apiKey=" + key,
		  data: JSON.stringify({ "title" : title , "repo" : repo}),
          type: "POST",
          contentType: "application/json",
          headers: {
            'Access-Control-Allow-Origin': '*'
            
        },
          success: function(data){
            window.location = "http://localhost/f/enter.html";
              
          },
          error: function(xhr, status, err){
              console.log(err);
          }
        });


    });
});
