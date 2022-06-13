$(document).ready(function(){
    $('.hopa').hide()
    $('#like').hide()
    $('.btn').click(function(){
        let a = $('.firstNum').val();
        let b = $('.secNum').val();
        let c = $('.thNum').val();
        let d = a * b;
        let i = 0;
        let e = 'no ok'
        while(c%2==0){
            c /= 2;
            i++
        }
        d *= i;
        d /= 1000;
        if(d<10){
            $('.fir').html(d);
            $('#like').show();
        }else{
            $('.fir').html(d);
            $('.sec').html(e);
            
        }
        $('.hopa').show()
    });
});