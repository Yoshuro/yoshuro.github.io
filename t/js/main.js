document.addEventListener("DOMContentLoaded",function(){
    site.init()
})
var site = {
    activeSection:1,
    open:false,
    init:function(){
        $(".nav-item").on("click", function(){
            site.navClick($(this))
        })
        $("#nav-btn").on("click",function(){
            site.menu()
        })
        $(document).click(function(event) {
            if (!$(event.target).closest('#nav-btn').length) {
                $('.nav-list').removeClass('nav-list-open')
                $('#nav-btn').removeClass('nav-btn-open')
                site.open=false
        }
        })
        $(".nav-item:first-child").addClass("active")
        $(".section:first-child").addClass("active")
        this.update()
    },
    menu:function(){
        if(!this.open) {
            $('.nav-list').addClass('nav-list-open')
            $('#nav-btn').addClass('nav-btn-open')
            this.open=true            
        }
        else {
            $('.nav-list').removeClass('nav-list-open')
            $('#nav-btn').removeClass('nav-btn-open')
            this.open=false            
        }
    },
    navClick:function(e){
        var activeSection = $(".section.active")
        var activeItem = $(".nav-item.active")
        if(activeSection.attr("data-id") == e.attr("data-id")) return
        activeSection.removeClass("active")
        var newId = e.attr("data-id")
        $('.section[data-id="'+newId+'"]').addClass("active")
        activeItem.removeClass("active")
        e.addClass("active")
        this.activeSection = newId
        this.update()
    },
    update:function(){
        var sections = document.getElementsByClassName("section")
        for(var i=0; i<sections.length; i++){
            var translation = (i+1 - this.activeSection) * 100
            sections[i].style.transform = "translateX("+translation+"%)"
        }
    }
}
