(function($){
	$(window).load(function(){
		var $cardGrid = $('.cards')
		,        card = '.card';

		var packeryOptions = {
			itemSelector: card,
			layoutMode: 'layout',
			percentPosition: true,
			transitionDuration: '.25s',
			hiddenStyle: {
				opacity: 0,
				transform: 'scale(1)'
			},
			visibleStyle: {
				opacity: 1,
				transform: 'scale(1)'
			}
		};

		function grid(){
			setTimeout(function(){
				$(card).find('img').each(function(){
					var imgHeight = $(this).height();
					$(this).parent('.card__top').css('min-height', imgHeight);
				});
				if(!$('html').hasClass('ie9') && !$('html').hasClass('ie8') && !$('html').hasClass('ie7') && !$('html').hasClass('ie6') ){
					$cardGrid.packery(packeryOptions).css('opacity', 1);
				} else {
					console.log('No Packery Early IE');
				}
			}, 500);
		}

		grid();

		$(window).on("debouncedresize", function( event ) {
			$cardGrid.css('opacity', 0.8);
			grid();
		});

		$('.button--delete-confirm').on('click', function(e){
			e.preventDefault();

			var $thisCard = $(this).closest(card);
			
			$thisCard.addClass('card--hide');

			setTimeout(function(){
				if(!$('html').hasClass('ie9') && !$('html').hasClass('ie8') && !$('html').hasClass('ie7') && !$('html').hasClass('ie6') ){
					$cardGrid.packery( 'remove', $thisCard ).packery('layout');
				} else {
					$thisCard.remove();
				}
			}, 1000);

			$('.alert').addClass('alert--success').html('Awesome! That&#39;s done now.');

			setTimeout(function(){
				$('.alert').addClass('alert--show');
			}, 1800);

			setTimeout(function(){
				$('.alert').removeClass('alert--show');
			}, 4200);
		});

		$('.card__delete, .button--delete-cancel').on('click', function(e){
			e.preventDefault();
			
			var $thisCard = $(this).closest(card)
			    $thisCardFront = $thisCard.find('.card__front');
			
			$thisCard.find('.card__delete').toggleClass('card__delete--spin');

			$thisCardFront.removeClass('card--is-front'); 

			// Backface fix for early Android Brswr
			setTimeout(function(){
				$thisCard.toggleClass('card--flipped');
			}, 500);

			setTimeout(function(){
				$thisCard.toggleClass('card--is-flipped');
				$thisCardFront.addClass('card--is-front'); 
			}, 800);
		});
	});
})(jQuery);