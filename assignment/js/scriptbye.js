(function(window){
 var speakword = "Good Bye";
 var byeSpeaker = {};
  byeSpeaker.func = function (name){
   console.log(speakword + " " + name);
}
  window.byeSpeaker = byeSpeaker;
})(window);