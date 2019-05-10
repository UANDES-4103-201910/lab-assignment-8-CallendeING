// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require_tree .
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
