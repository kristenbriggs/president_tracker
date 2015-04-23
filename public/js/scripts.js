$('#flag1').animate({
    marginLeft: '+=' + $('#background').width()/2.4
  }, 5000, function() {
  });
$('#flag1').click(function() {
  window.location = "candidates.html";
});
$('#flag2').click(function() {
  window.location = 'vote.html';
})
$('#flag3').click(function() {
  window.location = 'wheel.html';
})
});

