If(typeof(EventSource) !=="undefined") {
    var source = new EventSource();
  source.onmessage = function(event) {
    
    document.getElementById("temperature").innerHTML = event.data;
  };
}
else {
}
