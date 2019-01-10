$(document).ready(function() {
    console.log( "ready!" );

$('#navbar a').click(function(e){
    e.preventDefault();
var thediv = $(this).attr('href');
console.log('the id to scroll to is  ',thediv);

    $('html,body').animate({
        scrollTop: $('#'+thediv).offset().top
     });
});
})// navigation bar scroll effect;


        $(function drag(){
            $('.drag').draggable({
                proxy:function(source){
                    var n = $('<div id="song1"></div>');
                    n.html($(source).html()).appendTo('body');
                    return n;
                }
                ,revert:true,
                cursor:'auto',
                onStartDrag:function(){
                    $(this).draggable('options').cursor='not-allowed';
                    $(this).draggable('proxy').addClass('dp');
                },
                onStopDrag:function(){
                    $(this).draggable('options').cursor='auto';
                },
            });
            $('#songsList').droppable({
                accept:'#song1',
                onDragEnter:function(e,source){
                    $(source).draggable('options').cursor='auto';
                    $(source).draggable('proxy').css('border','1px solid red'); 
                },
                onDragLeave:function(e,source){
                    $(source).draggable('options').cursor='not-allowed';
                    $(source).draggable('proxy').css('border','1px solid #ccc');
                },
                onDrop:function(e,source){
                    $(this).append(source)
                }
            });
        });

        $(function active(){
            $('#songsList').droppable({
                accept:'#song1',
                onDrop:function(){
                    $(play());
                }
            })
        })
        $(function active1(){
            $('#songsList1').droppable({
                accept:'#song2',
                onDrop:function(){
                    $(play1());
                }
            })
        })
        $(function active2(){
            $('#songsList2').droppable({
                accept:'#song3',
                onDrop:function(){
                    $(play2());
                }
            })
        })
        $(function active3(){
            $('#songsList3').droppable({
                accept:'#song4',
                onDrop:function(){
                    $(play3());
                }
            })
        })
        $(function active4(){
            $('#songsList4').droppable({
                accept:'#song5',
                onDrop:function(){
                    $(play4());
                }
            })
        })
        $(function active5(){
            $('#songsList5').droppable({
                accept:'#song6',
                onDrop:function(){
                    $(play5());
                }
            })
        })
        $(function active6(){
            $('#songsList6').droppable({
                accept:'#song7',
                onDrop:function(){
                    $(play6());
                }
            })
        })
        $(function active7(){
            $('#songsList7').droppable({
                accept:'#song8',
                onDrop:function(){
                    $(play7());
                }
            })
        })
        $(function active8(){
            $('#songsList8').droppable({
                accept:'#song9',
                onDrop:function(){
                    $(play8());
                }
            })
        })
        $(function active9(){
            $('#songsList9').droppable({
                accept:'#song10',
                onDrop:function(){
                    $(play9());
                }
            })
        })
        $(function active10(){
            $('#songsList10').droppable({
                accept:'#song11',
                onDrop:function(){
                    $(play10());
                }
            })
        })
        $(function active11(){
            $('#songsList11').droppable({
                accept:'#song12',
                onDrop:function(){
                    $(play11());
                }
            })
        })

var audio1;
var audio2;
var audio3;
var audio4;
var audio5;
var audio6;
var audio7;
var audio8;
var audio9;
var audio10;
var audio11;
var audio12;

function play() {
    audio1 = document.getElementById("andjusticeforall");
    audio1.play();
}
function play1() {
    audio2 = document.getElementById("blackened");
    audio2.play();
}
function play2() {
    audio3 = document.getElementById("harversterofsorrow");
    audio3.play();
}
function play3() {
    audio4 = document.getElementById("one");
    audio4.play();
}
function play4() {
    audio5 = document.getElementById("fadetoblack");
    audio5.play();
}
function play5() {
    audio6 = document.getElementById("hardwired");
    audio6.play();
}
function play6() {
    audio7 = document.getElementById("masterofpuppets");
    audio7.play();
}
function play7() {
    audio8 = document.getElementById("whiskeyinthejar");
    audio8.play();
}
function play8() {
    audio9 = document.getElementById("entersandman");
    audio9.play();
}
function play9() {
    audio10 = document.getElementById("nothingelsematter");
    audio10.play();
}
function play10() {
    audio11 = document.getElementById("sadbuttrue");
    audio11.play();
}
function play11() {
    audio12 = document.getElementById("theunforgiven");
    audio12.play();
}
function help() {
    alert('The manual playlist works by clicking and dragging a song over to the right hand side box. \n\nDoing this will play the full song. To pause a song click the pause button.\n\nTo resume the song drag it over again, once ended dragging the same song again will re-play it.')
}
function playing() {
    audio1 = document.getElementById("andjusticeforall");
    audio2 = document.getElementById("blackened");
    audio3 = document.getElementById("harversterofsorrow");
    audio4 = document.getElementById("one");
    audio5 = document.getElementById("fadetoblack");
    audio6 = document.getElementById("hardwired");
    audio7 = document.getElementById("masterofpuppets");
    audio8 = document.getElementById("whiskeyinthejar");
    audio9 = document.getElementById("entersandman");
    audio10 = document.getElementById("nothingelsematter");
    audio11 = document.getElementById("sadbuttrue");
    audio12 = document.getElementById("theunforgiven");
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();
    audio10.pause();
    audio11.pause();
    audio12.pause();
}

// sorry for so many individual functions :/