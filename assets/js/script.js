$(function(){
  
  function hm_center_prime(){    
    function hm_center(){
        var WinWidth = $(window).width()
        var hmWidth = $('.hero-main').width()
        var WinHeight = $(window).height()
        var hmHeight = $('.hero-main').height()
        
        $('.hero-main').css('top', (WinHeight/2) - (hmHeight/3))
        $('.hero-main').css('left', (WinWidth/2) - (hmWidth/2))
    }
      hm_center()
      $(window).resize(function(){
          hm_center();
      })
  }
    hm_center_prime();
    
 function p_center_prime(){    
    function p_center(){
        var pWidth = $('.bottom').width()
        var hmWidth = $('.hero-main').width()
        
        $('.bottom').css('margin-left', (hmWidth/2) - (pWidth/2))
    }
      p_center()
      $(window).resize(function(){
          p_center();
      })
  }
    p_center_prime();
})