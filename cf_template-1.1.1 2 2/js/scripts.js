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
  	var comment = $('#message').val();
  	if (comment==='') {
  		$('#message').css('border', '2px solid red');
  	}  else {
  		$('#visible-comment').html('We have received your message.');
  		$('#message').hide();
  		$('#name').hide();
  		$('#email').hide();
  	}
    console.log(comment);
    return false;
  });

    //textarea
  $('#message').css("backgroundColor", "#c3d8d8");
  $('#message').on('keyup', function() {
  	console.log('keyup happened');
  	var charCount = $('#message').val().length;
  	console.log(charCount);
  	$('#char-count').html(charCount);
  	if (charCount>50) {
  		$('#char-count').css('color', 'red');
  	} else {
  		$('#char-count').css('color', 'white');
  	}
  });







	



