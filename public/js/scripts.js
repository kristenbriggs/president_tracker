$('#flag').animate({
    marginLeft: '+=' + $('#background').width()/2.4
  }, 5000, function() {
  });

$('#flag').click(function() {
  window.location = "candidate.html";
})