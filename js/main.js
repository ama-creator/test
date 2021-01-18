$(function(){
  // preloader 
    $(window).on('load', function () {
        let $preloader = $('#p_prldr'),
            $svg = $preloader.find('.svg');
        $preloader.delay(1200).fadeOut('slow');
      });

    // for sidebar 
    $('.sidebar__btn').on('click', function () {
      
        $('.sidebar-inner').toggleClass('sidebar-inner--active');
        $('.info-content').toggleClass('info-content--active');

        
      });
      
});