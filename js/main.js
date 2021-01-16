$(function(){
    // for sidebar 
    $('.sidebar__btn').on('click', function () {
      
        $('.sidebar-inner').toggleClass('sidebar-inner--active');
        $('.info-content').toggleClass('info-content--active');

        
      });
      
});