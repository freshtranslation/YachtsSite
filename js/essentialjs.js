(function(){
    
if (/ no-horizontal-scroll/.test(document.documentElement.className)) {
    jQuery(window).bind("scroll",function(event){
        document.documentElement.scrollLeft = 0; // no horizontal scroll
    });
}

jQuery("textarea.mail-encode").each(function(){
    this.innerHTML = this.innerHTML.replace(/ /g,"\u00a0");
});
jQuery("input.mail-encode").each(function(){
    this.value = this.value.replace(/ /g,"\u00a0");
});
})();