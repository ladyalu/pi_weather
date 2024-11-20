If(typeof(EventSource) !=="undefined") {
    var source = new EventSource();
  source.onmessage = function(event) {
    
    document.getElementById("result").innerHTML = event.data;
  };
}
else {
}
