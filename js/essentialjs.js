(function(){
    
if (/ no-horizontal-scroll/.test(document.documentElement.className)) {
    jQuery(window).bind("scroll",function(event){
        document.documentElement.scrollLeft = 0; // no horizontal scroll
    });
}

})();