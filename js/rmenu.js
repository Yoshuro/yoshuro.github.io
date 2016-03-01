jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.navbar ul').toggleClass('active');

        e.preventDefault();
    });
});
