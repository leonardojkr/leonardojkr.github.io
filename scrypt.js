$(document).ready(function () {
    
    $("#l-sobre").on('click', (e) => {
        $('.info nav a').css('background-color', '#67809f');
        $(e.target).css("background-color", " #ececec");
        
        let html = $("#sobre").html();
        $(".info-info").html(html);
    });
    
    $("#l-resumo").on('click', (e) => {
        $('.info nav a').css('background-color', '#67809f');
        $(e.target).css("background-color", " #ececec");
        
        let html = $("#resumo").html();
        $(".info-info").html(html);
    });
    
    $("#l-exp").on('click', (e) => {
        $('.info nav a').css('background-color', '#67809f');
        $(e.target).css("background-color", " #ececec");
        
        let html = $("#exp").html();
        $(".info-info").html(html);
    });
    
    $("#l-educacao").on('click', (e) => {
        $('.info nav a').css('background-color', '#67809f');
        $(e.target).css("background-color", " #ececec");
        
        let html = $("#educacao").html();
        $(".info-info").html(html);
    });
    
    $("#l-sobre").trigger("click");
});