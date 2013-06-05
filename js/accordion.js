(function($) {
    
  // var allPanels = $('.accordion > .accordion-body').hide();
    
  // $('.accordion > .accordion-head > a').click(function() {
  //   allPanels.slideUp('fast');
  //   $(this).parent().next().slideDown('fast');
  //   return false;
  // });

var allPanels = $('.accordion > .accordion-body').hide();
var allPanelheads = $('.accordion > .accordion-head');
    
  $('.accordion > .accordion-head > a').click(function() {
    allPanels.slideUp('fast').removeClass('expanded');
 allPanelheads.removeClass('expanded');

    $(this).parent().addClass('expanded');
    $(this).parent().next().slideDown('fast').addClass('expanded');
    return false;
  });

})(jQuery);