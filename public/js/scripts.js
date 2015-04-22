$('#flag').animate({
    marginLeft: '+=' + $('#background').width()/2.4
  }, 5000, function() {
  });
$('#flag').click(function() {
  window.location = "candidates.html";
})

$('#flag2').click(function() {
  window.location = 'vote.html';
})
$(function() {
    $('#omalley').dialog({
        autoOpen:false
    });

    $(".flex-item-1").click(function(e) {
        e.preventDefault();
        $('#omalley').dialog('open');
    });
});
