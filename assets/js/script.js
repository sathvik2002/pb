$(function(){
 
    
    
 function sw_center_prime(){   
    function sw_center(){
        var win_width = $(window).width();
        var sw_width = $('.subscribe-wrap').width();
        
        $('.subscribe-wrap').css('left', (win_width/2) - (sw_width/2))
    }
    
    sw_center();
    $(window).resize(function(){
        sw_center();
    }) 
 }
    sw_center_prime(); 
    


    
    
    
    
    
    
      $('.subscribe-wrap').mouseleave(function(){
        $('input').css('display', 'none')
        $('input').css('width', '0')
        sw_center_prime();
    })
      
        $('.btn').mouseenter(function(){
          $('input').css('display', 'inline-block')
          $('input').css('width', '24vw')
          sw_center_prime();
    })
        
       $(".type").typed({
        strings: [" OUR NEW SITE"],
        typeSpeed: 90
      })
       
       $('#ham').click(function(){
           toggle()
       })
       
       
       var check = false
       function toggle(){
           
           if( check == false){
               $('.line').css('margin-left', '13vw');
               $('#ham').css('margin-left', '10vw');
               $('h1').css('opacity', '0.1')
               $('p').css('opacity', '0.1')
               $('.subscribe-wrap').css('opacity', '0.1')
               check = true;
           }
           else if( check == true){
               $('.line').css('margin-left', '3vw');
               $('#ham').css('margin-left', '4vw');
               $('h1').css('opacity', '1')
               $('p').css('opacity', '1')
               $('.subscribe-wrap').css('opacity', '1')
               check = false;
           }
           
       } 
    
    
function img_center_prime(){   
    function img_center(){
        var win_width = $(window).width();
        var win_height = $(window).height();
        var img_width = $('.img-circle-wrap').width();
        var img_height = $('.img-circle-wrap').height();
        
        $('.img-circle-wrap').css('margin-left', (win_width/2) - (img_width/2))
        $('.img-circle-wrap').css('padding-top', (win_height/4) - (img_height/2))
    }
    
    img_center();
    $(window).resize(function(){
        img_center();
    }) 
 }
    img_center_prime(); 
    

    
function abt_center_prime(){
     function abt_center(){
        var win_width = $(window).width();
        var win_height = $(window).height();
        var img_width = $('.abt-wrap').width();
        var img_height = $('.abt-wrap').height();
        
        $('.abt-wrap').css('margin-left', (win_width/2) - (img_width/2))
         
     }
    abt_center();
    $(window).resize(function(){
        abt_center();
    }) 
 }    
    abt_center_prime();
    
})
  