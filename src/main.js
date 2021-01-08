$(document).ready(function(){
    //this is a key listen test that we may fall back to later if jquery proves to be a bitch.
    document.addEventListener('keypress', (e) => {
    switch(e.key) {
        case "1":
            $("#circle").animate({ left: '170px'}, 3000);
            $('#mySpan').animate({ 'opacity' : 0}, 400);
            $(this).html('First round').animate({'opacity': 1}, 400);
            break;
        case "2":
            $("#icon2").animate({ left: '170px'}, 3000);
            $('#mySpan').animate({ 'opacity' : 0}, 400);
            $(this).html('First round').animate({'opacity': 1}, 400);
            break;
        case "3":
            $("#icon3").animate({ left: '170px'}, 3000);
            $('#mySpan').animate({ 'opacity' : 0}, 400);
            $(this).html('First round').animate({'opacity': 1}, 400);
            break;
        case "4":
            $("#icon4").animate({ left: '170px'}, 3000);
            $('#mySpan').animate({ 'opacity' : 0}, 400);
            $(this).html('First round').animate({'opacity': 1}, 400);
            break;
    }
    });


        $("body").keypress(function(i) {
        switch(i.key) {
          case 49:

          break;
        }
    })
})