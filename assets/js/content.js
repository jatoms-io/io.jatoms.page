// create side-nav toc
$(function(){
	var html = '';

	$('#text-content').each(function() {
	  var h1 = $(this).find('h1[id]');

	  if (h1.length) {
		h1.each(function(){
			$(this).addClass('scrollspy');
			$('<div class="divider"></div>').insertAfter($(this));
			html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a>';

			var h2 = $(this).nextUntil('h1', 'h2');
			if (h2.length) {
			  html += '<ul class="section table-of-contents second-level">';
			  h2.each(function() {
				$(this).addClass('scrollspy');
				html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a></li>';
			  });
			  html += '</ul>';
			}

			html += '</li>';
		});
	  }
	});

	if (html == '') {
	  $('#toc').hide();
	}
	else {
	  $('#toc').show();
	  $('#toc').html(html);
	}
});

// restore browser default behavior for (un)ordered lists
// make tables striped
$(function(){
	var content = $(this).find('#text-content');
	var uls = content.find('ul');
	if(uls){
		uls.each(function(){
			$(this).addClass('browser-default');
		});
	}

	var ols = content.find('ol');
	if(ols){
		ols.each(function(){
			$(this).addClass('browser-default');
		});
	}

	var tables = content.find('table');
	if(tables){
		tables.each(function(){
			$(this).addClass('striped');
		});
	}
})
$(document).ready(function(){
	$('.scrollspy').scrollSpy({
		scrollOffset: 100
	});
	$('#toc-wrapper').pushpin({
		top: $('nav').height()
	});
});