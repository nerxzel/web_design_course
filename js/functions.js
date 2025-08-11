jQuery(document).ready(itsready);

function itsready(){

    jQuery(".bars").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".bars i").toggleClass("fa-bars fa-xmark")
    });

    jQuery("header .container nav a").click(function(){
        
        jQuery("header .container nav").removeClass("open");
        jQuery(".bars i").removeClass("fa-bars fa-xmark");

        var sections = jQuery(this).attr("href");

        jQuery("html,body").animate({
            "scrollTop": jQuery(sections).offset().top -76
        })

    })
};