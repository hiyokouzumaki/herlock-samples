//URLは環境に合わせて変更
var src = "http://HOSTNAME/audio/button.mp3";
var audio  = new Audio( src, Audio.SE );
audio.onload = function() {
    audio.loop = true;
    audio.play();
}
  