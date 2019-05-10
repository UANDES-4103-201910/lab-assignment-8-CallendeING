// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
});

function hideShow(){
	var keyboard = document.getElementById("kcontainer");
	if(keyboard.style.display == "none"){
		keyboard.style.display = "block";
		$(btnHS).text("Hide");
	}
	else {
		keyboard.style.display = "none";
		$(btnHS).text("Show");
	}
}

'use strict'

document.addEventListener('DOMContentLoaded', () => {
  let text = ''
  var fila = 1
  document.addEventListener('click', ev => {
    const isKey = ev.target.classList.contains('key')
    if (isKey) {
      const keyValue = ev.target.textContent.trim()
      let insertValue = ''
      const lenText = text.length
      switch (keyValue) {
        case '':
          //text = '&nbsp;'
          insertValue = ' '
          break
        case 'Bksp':
          if (lenText==0 && fila > 1){
            fila -=1
            text = $('#'+fila).text()
          }
          text = text.split('').slice(0,lenText-1).join('')
          break
        case '->| Tab':
          insertValue = ''
          break
        case 'Shift':
          insertValue = ''
        case 'Accept':
          insertValue = ''
          break
        case 'Cancel':
          insertValue = ''
          break
        case 'Enter':
          fila += 1
          text = ''
          insertValue = ''
          break
        default:
          insertValue = keyValue
          break
      }
      if (insertValue){
         text += insertValue
       }
      console.log(keyValue, insertValue)
      $('#'+fila).text(text)
    }
  }, false)
})
