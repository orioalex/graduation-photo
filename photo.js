var now_pos = '#home'
var looking = '#HomePic'
var faded = false

$('#home').css('background-color','rgb(81, 81, 81)')
$(looking).delay(300).fadeIn(700)

function nav_apparent(){
    if($(window).scrollTop() == 0){
        if($('nav').css('opacity')==1) return
        $('nav').fadeTo(500,1)
        faded = false
    }
    else if(faded){
        $('nav').prop('style').removeProperty('opacity')
    }
    else{
        $('nav').fadeTo(500,0.3)
        faded = true
    }
}

var check_nav = window.setInterval("nav_apparent()",100)

$('#classmate').click(() => {
    if(now_pos === '#classmate') return
    $('#classmate').css('background-color','rgb(81, 81, 81)')
    $(now_pos).removeAttr('style')
    now_pos = '#classmate'
    $(looking).fadeOut(700)
    looking = '#saloon'
    $(looking).delay(850).fadeIn(1000)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 1000);
})
$('#home').click(() => {
    if(now_pos === '#home') return
    $('#home').css('background-color','rgb(81, 81, 81)')
    $(now_pos).removeAttr('style')
    now_pos = '#home'
    $(looking).fadeOut(1000)
    looking = '#HomePic'
    $(looking).delay(1500).fadeIn(700)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 1000);
})
$('#geography').click(() => {
    if(now_pos === '#geography') return
    $('#geography').css('background-color','rgb(81, 81, 81)')
    $(now_pos).removeAttr('style')
    now_pos = '#geography'
    $(looking).fadeOut(1000)
    looking = '#geo_photo'
    $(looking).delay(1200).fadeIn(700)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 1000);
})
$('#Xmas').click(() => {
    if(now_pos === '#Xmas') return
    $('#Xmas').css('background-color','rgb(81, 81, 81)')
    $(now_pos).removeAttr('style')
    now_pos = '#Xmas'
    $(looking).fadeOut(1000)
    looking = '#Xmas_photo'
    $(looking).delay(1200).fadeIn(700)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 1000);
})
$('#trip').click(() => {
    if(now_pos === '#trip') return
    $('#trip').css('background-color','rgb(81, 81, 81)')
    $(now_pos).removeAttr('style')
    now_pos = '#trip'
    $(looking).fadeOut(1000)
    looking = '#trip_photo'
    $(looking).delay(1200).fadeIn(700)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 1000);
})
$('#sc_fair').click(() => {
    if(now_pos === '#sc_fair') return
    $('#sc_fair').css('background-color','rgb(81, 81, 81)')
    $(now_pos).removeAttr('style')
    now_pos = '#sc_fair'
    $(looking).fadeOut(1000)
    looking = '#sc_fair_photo'
    $(looking).delay(1200).fadeIn(700)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 1000);
})
$('#Xmas_C3').click(() => {
    //alert(scroll_on_top())
    if(now_pos === '#Xmas_C3') return
    $('#Xmas_C3').css('background-color','rgb(81, 81, 81)')
    $(now_pos).removeAttr('style')
    now_pos = '#Xmas_C3'
    $(looking).fadeOut(1000)
    looking = '#Xmas_C3_photo'
    $(looking).delay(1200).fadeIn(700)
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 1000);
})