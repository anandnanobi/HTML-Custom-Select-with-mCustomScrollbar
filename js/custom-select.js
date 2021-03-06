	/*Handler of select click*/
	jQuery('body').on('click', '.select-oper', function(event) {
		event.preventDefault();
		var offsetTop = 4;
		var dropWidth = jQuery(this).width() +
		 				parseInt($('.select-oper').css('padding-left')) +
		 				parseInt($('.select-oper').css('padding-right')) -
		 				parseInt($('.dropdown-select-custom').css('border-left')) -
		 				parseInt($('.dropdown-select-custom').css('border-right'));	

		if(!jQuery(this).next('.dropdown-select-custom').hasClass('open')){
			jQuery(this).next('.dropdown-select-custom').css('top', jQuery(this).position().top + parseInt(jQuery(this).css('height')) + offsetTop);
			jQuery(this).next('.dropdown-select-custom').width(dropWidth)
			jQuery(this).next('.dropdown-select-custom').slideDown('fast').addClass('open');
		}else {
			jQuery(this).next('.dropdown-select-custom').slideUp('fast').removeClass('open');
		}
	});

	/* Handler of options click */
	jQuery('body').on('click', '.dropdown-select-custom p', function(event) {
		event.preventDefault();

		/* IF YOU WANT TO USE THE TEXT AS VALUE USE THIS */
		/*var value = jQuery(this).text();*/

		/* IF YOU WANT TO USE THE DATA-VALUE AS VALUE USE THIS */
		var value = jQuery(this).attr('data-value');
		var label = jQuery(this).text();

		jQuery(this).parents('.dropdown-select-custom').next('input').val(value);
		jQuery(this).parents('.dropdown-select-custom').prev('.select-oper').text(label);
		jQuery(this).parents('.dropdown-select-custom').slideUp('fast').removeClass('open');

	});

	/* Handler click out to close dropdown */
	jQuery(document).click(function(event) {
		if(!$(event.target).is('.select-oper')){
			// hide menu
			if(jQuery('.dropdown-select-custom').hasClass('open')){
				jQuery('.dropdown-select-custom').removeClass('open').slideUp('fast');
			}
		}
	});
	

	/*Custom Scrollbar*/
	jQuery('.dropdown-select-custom').mCustomScrollbar();