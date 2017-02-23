//twitter button
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
	
	}(document, 'script', 'twitter-wjs');

//document ready
$(document).ready(function(){
	// Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    return false;
  });

	// Stellar
  $('#contact-background').stellar();
  });

	// Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

	//tooltip jQuery
  $(function() {
    $('#item1').tooltip();
  });

    //submit button
  $('#bttn-submit').on('click', function() {
  	console.log('clicked');
    var comment = $('#name').val();
    var comment = $('#email').val();
    var comment = $('#message').val();
    console.log(name);
    console.log(email);
    console.log(comment);
    var text = 'We have received your message.';
    console.log(text);
    $('#visible-comment').html(text);
    $('#message').hide();
    $('#name').hide();
    $('#email').hide();
    return false;
  });

    //textarea
  $('#message').css("backgroundColor", "#c3d8d8");







	



