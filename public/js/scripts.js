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

$('#flag3').click(function() {
  window.location = 'wheel.html';
})

$(function() {
    $('#omalley').dialog({
        autoOpen:false,
        width:500,
        height:500,
        modal: true,
        buttons: {
          Ok: function() {
            $(this).dialog("close");
        }
    }});

    $(".flex-item-1").click(function(e) {
        e.preventDefault();
        $('#omalley').dialog('open');
    });
});
$(function() {
    $('#cruz').dialog({
        autoOpen:false,
        width:500,
        height:500,
        modal: true,
        buttons: {
          Ok: function() {
            $(this).dialog("close");
        }
    }});

    $(".flex-item-2").click(function(e) {
        e.preventDefault();
        $('#cruz').dialog('open');
    });
});
$(function() {
    $('#webb').dialog({
        autoOpen:false,
        width:500,
        height:500,
        modal: true,
        buttons: {
          Ok: function() {
            $(this).dialog("close");
        }
    }});

    $(".flex-item-3").click(function(e) {
        e.preventDefault();
        $('#webb').dialog('open');
    });
});
$(function() {
    $('#webb').dialog({
        autoOpen:false,
        width:500,
        height:500,
        modal: true,
        buttons: {
          Ok: function() {
            $(this).dialog("close");
        }
    }});

    $(".flex-item-3").click(function(e) {
        e.preventDefault();
        $('#webb').dialog('open');
    });
});
$(function() {
    $('#rubio').dialog({
        autoOpen:false,
        width:500,
        height:500,
        modal: true,
        buttons: {
          Ok: function() {
            $(this).dialog("close");
        }
    }});

    $(".flex-item-4").click(function(e) {
        e.preventDefault();
        $('#rubio').dialog('open');
    });
});
$(function() {
    $('#clinton').dialog({
        autoOpen:false,
        width:500,
        height:500,
        modal: true,
        buttons: {
          Ok: function() {
            $(this).dialog("close");
        }
    }});

    $(".flex-item-5").click(function(e) {
        e.preventDefault();
        $('#clinton').dialog('open');
    });
});
$(function() {
    $('#paul').dialog({
        autoOpen:false,
        width:500,
        height:500,
        modal: true,
        buttons: {
          Ok: function() {
            $(this).dialog("close");
        }
    }});

    $(".flex-item-6").click(function(e) {
        e.preventDefault();
        $('#paul').dialog('open');
    });

});

