document.addEventListener("keydown", e => {
   const keys = new Set(['A', 'S', 'D', 'F', 'G',
       'H', 'J', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'W',
       'E', 'T', 'Y', 'U', 'w', 'e', 't', 'y', 'u']);
   const keyCode = e.key;
   if (keys.has(keyCode)) {
       let audio = new Audio(`./audios/${keyCode.toUpperCase()}.mp3`);
       audio.play();
       console.log(`The '${keyCode}' key is pressed.`);
   } else {
       console.warn(`Warning: the key you pressed - '${keyCode}' is not a piano key.`);
   }
});