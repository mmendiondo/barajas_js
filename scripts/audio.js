function playSound(sound){
  var song = $('#' + sound).get(0);
  if (song.paused)
   song.play();
  else
   song.pause();
}
