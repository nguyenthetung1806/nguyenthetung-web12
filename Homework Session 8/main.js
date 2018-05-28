$(document).ready(function () {



  $(document).ajaxStart(function(){
      $('#loading').attr("style", "display: block");
  });
  $(document).ajaxComplete(function(){
      $('#loading').attr("style", "display: none");
  });




  function search(){
    $("#result-list").empty();
    $.ajax({
      url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q={${$('#keyword').val()}}&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
      type: 'get',
      success: function(response){
        if(response.items.length != 0){
          console.log('success');
          console.log(response);
          for(var item in response.items){
            if(response.items[item].id.kind == "youtube#video"){
              $("#result-list").append(`
                <a class="result col-md-12" href="https://www.youtube.com/watch?v=${response.items[item].id.videoId}" target="_blank">
                  <img class="videoimage" src="${response.items[item].snippet.thumbnails.high.url}" alt="">
                    <div class="video_info">
                      <h2 class="title">${response.items[item].snippet.title}</h2>
                      <p class="description">${response.items[item].snippet.description}</p>
                      <span>View >></span>
                    </div>
                  </img>
                </a>`);
            }
          }
          return next = response.nextPageToken;
        } else {
          $("#result-list").append(`
            <div class="text-center">
              <h1>
                Không có kết quả nào
              </h1>
            </div>`);
        }
      },
      error: function(response){
        console.log('Error', response);
      }
    });
  }



  $('.btn.btn-primary.form-control').click(function(){
    event.preventDefault();
    search();
  });


  var keySecondAgo;
  setInterval(function(){
    keyword= $('#keyword').val()
    if(keyword.length > 0){
      if(keyword != keySecondAgo){
        search();

      }
    } else {
        $("#result-list").empty();
    }
    keySecondAgo = $('#keyword').val();
  }, 1000);



  $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() >= $(document).height()-10) {
       $.ajax({
         url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q={${$('#keyword').val()}}&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${next}`,
         type: 'get',
         success: function(response){
           console.log('success');
           for(var item in response.items){
             if(response.items[item].id.kind == "youtube#video"){
               console.log(response.items[item]);
               $("#result-list").append(`
                 <a class="result col-md-12" href="https://www.youtube.com/watch?v=${response.items[item].id.videoId}" target="_blank">
                   <img class="videoimage" src="${response.items[item].snippet.thumbnails.high.url}" alt="">
                     <div class="video_info">
                       <h2 class="title">${response.items[item].snippet.title}</h2>
                       <p class="description">${response.items[item].snippet.description}</p>
                       <span>View >></span>
                     </div>
                   </img>
                 </a>`);
             }
           }
                   return next = response.nextPageToken;
         },
         error: function(response){
           console.log('Error', response);
         }
       });
     }
  });


});
