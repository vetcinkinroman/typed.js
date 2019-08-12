jQuery(document).ready(function(){
    
    //первый способ
    var typed = new Typed("#text", {
    strings: ["Шукаєте земельну ділянку?", "Потрібна допомога при оформленні?"],
    typeSpeed:30,
    backSpeed: 30,
    loop:true
    });

    //второй способ
    var typed = new Typed("#typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 0,
        backSpeed: 0,
        backDelay: 1500,
        startDelay: 1000,
        loop: true
    });
    
    
    
}); // readfy