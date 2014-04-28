$.log = function(message){ //test prose.io
  var $logger = $("#logger");
  $logger.html($logger.html() + "\n * " + message );
}
