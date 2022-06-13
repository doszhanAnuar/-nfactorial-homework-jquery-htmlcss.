$(document).ready(function(){
    $('.hopa').hide()
    $('.btn').click(function(){
        let a = $('.nameEnter').val();
        $('.name').html(a);
        let b = $('.charsetEnter').val();
        $('.friend').html(b);
        let c = $('.adverbEnter').val();
        $('.adverb').html(c);
        let d = $('.adjectiveEnter').val();
        $('.adj').html(d);
        $('.hopa').show()
    });
});   