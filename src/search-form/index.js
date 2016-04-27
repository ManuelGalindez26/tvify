/**
 * Module Dependencies
 */

import $ from 'jquery'
import page from 'page'

$('#app-body')
  .find('form')
  .submit(function (ev) {
    ev.preventDefault();
    
    var busqueda = $(this)
      .find('input[type="text"]')
      .val();

    if (busqueda == '') {
				page('/');
			}else {
				page(`/search?q=${busqueda}`);
			}
  })
