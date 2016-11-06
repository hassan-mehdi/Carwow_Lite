(function($){
	$(document).ready(function(){
		var $cardGrid = $('.cards');
		$cardGrid.isotope({
			itemSelector: '.card',
			layoutMode: 'fitRows',
			hiddenStyle: {
				opacity: 0,
				transform: 'scale(1)'
			},
			visibleStyle: {
				opacity: 1,
				transform: 'scale(1)'
			}
		});

		$('.button--delete-confirm').on('click', function(){
			var $thisCard = $(this).closest('.card');
			$cardGrid.isotope( 'remove', $thisCard ).isotope('layout');;
		});

		$('.card__delete, .button--delete-cancel').on('click', function(e){
			e.preventDefault();
			
			var $thisCard = $(this).closest('.card');

			$thisCard.toggleClass('card--flipped');

			setTimeout(function(){
				$thisCard.toggleClass('card--is-flipped');
			}, 300);
		});
	});
})(jQuery);