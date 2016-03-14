/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

	function init() {

		var body = document.querySelector( 'body' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				modal_close_figure = modal.querySelector( '.button_close_figure' ) ? modal.querySelector( '.button_close_figure' ) : '',
				modal_close = modal.querySelector( '.button_close' ) ? modal.querySelector( '.button_close' ) : '',
				close = modal.querySelector( '.md-close' ) ? modal.querySelector( '.md-close' ) : '',
				figure = modal.querySelector( '.video_figure' );
			function removeModal( hasPerspective ) {
				classie.remove( body, 'md-show' );
				classie.remove( modal, 'open' );
				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				classie.add( modal, 'open' );
				classie.add( body, 'md-show' );
				// overlay.removeEventListener( 'click', removeModalHandler );
				// overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			if(close != ''){
				close.addEventListener( 'click', function( ev ) {
					ev.stopPropagation();
					removeModalHandler();
				});
			}
			modal.addEventListener( 'click', function( event ) {
				event.stopPropagation();
				if ($(event.target).closest(".md-content").length) return;
				removeModalHandler();
			});
			if(modal_close_figure != ''){
				modal_close_figure.addEventListener( 'click', function( ev ) {
					figure.innerHTML = "";
					ev.stopPropagation();
					removeModalHandler();
				});
				// overlay.addEventListener( 'click', function( ed ) {
				// 	figure.innerHTML = "";
				// 	ed.stopPropagation();
				// 	removeModalHandler();
				// });
				modal_close_figure.addEventListener( 'touchstart', function( ev ) {
					figure.innerHTML = "";
					ev.stopPropagation();
					removeModalHandler();
				});
				// overlay.addEventListener( 'touchstart', function( ed ) {
				// 	figure.innerHTML = "";
				// 	ed.stopPropagation();
				// 	removeModalHandler();
				// });
			}
			if(modal_close != ''){
				modal_close.addEventListener( 'click', function( ev ) {
					ev.stopPropagation();
					removeModalHandler();
				});
			}

		} );

	}

	init();

})();