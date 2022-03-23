 /* document.querySelector('.container').children[1].children[0].onmouseenter= function white() {
    document.querySelector('.container').children[1].children[0].classList.add('gras');
};
document.querySelector('.container').children[1].children[0].onmouseout= function white() {
    document.querySelector('.container').children[1].children[0].classList.remove('gras');
};
document.querySelector('.container').children[1].children[1].onmouseenter= function white() {
    document.querySelector('.container').children[1].children[1].classList.add('gras');
};
document.querySelector('.container').children[1].children[1].onmouseout= function white() {
    document.querySelector('.container').children[1].children[1].classList.remove('gras');
};
document.querySelector('.container').children[1].children[2].onmouseenter= function white() {
    document.querySelector('.container').children[1].children[2].classList.add('gras');
};
document.querySelector('.container').children[1].children[2].onmouseout= function white() {
    document.querySelector('.container').children[1].children[2].classList.remove('gras');
};
document.querySelector('.container').children[1].children[3].onmouseenter= function white() {
    document.querySelector('.container').children[1].children[3].classList.add('gras');
};
document.querySelector('.container').children[1].children[3].onmouseout= function white() {
    document.querySelector('.container').children[1].children[3].classList.remove('gras');
};
document.querySelector('.container').children[1].children[4].onmouseenter= function white() {
    document.querySelector('.container').children[1].children[4].classList.add('gras');
};
document.querySelector('.container').children[1].children[4].onmouseout= function white() {
    document.querySelector('.container').children[1].children[4].classList.remove('gras');
};
document.querySelector('.container').children[1].children[5].onmouseenter= function white() {
    document.querySelector('.container').children[1].children[5].classList.add('gras');
};
document.querySelector('.container').children[1].children[5].onmouseout= function white() {
    document.querySelector('.container').children[1].children[5].classList.remove('gras');
};
document.querySelector('.container').children[1].children[6].onmouseenter= function white() {
    document.querySelector('.container').children[1].children[6].classList.add('gras');
};
document.querySelector('.container').children[1].children[6].onmouseout= function white() {
    document.querySelector('.container').children[1].children[6].classList.remove('gras');
};  

 */
console.log(document.querySelectorAll('.container > div > .btn'));
document.querySelectorAll('.container > div > .btn').forEach((elm,i)=>{
    
    elm.onmouseenter=function(){
        elm.classList.add("gras")
    }
    elm.onmouseout=function(){
        elm.classList.remove("gras")
  }


})










document.querySelector('.img').children[0].children[1].children[0].onmouseenter= function explore() {
    document.querySelector('.img').children[0].children[1].children[0].classList.remove('c');
    document.querySelector('.img').children[0].children[1].children[0].classList.add('explore');
}
document.querySelector('.img').children[0].children[1].children[0].onmouseout= function explore() {
    document.querySelector('.img').children[0].children[1].children[0].classList.remove('explore');
    document.querySelector('.img').children[0].children[1].children[0].classList.add('c');
}
document.querySelector('.img').children[0].children[1].children[1].onmouseenter= function explore() {
    document.querySelector('.img').children[0].children[1].children[1].classList.remove('c');
    document.querySelector('.img').children[0].children[1].children[1].classList.add('explore');
}
document.querySelector('.img').children[0].children[1].children[1].onmouseout= function explore() {
    document.querySelector('.img').children[0].children[1].children[1].classList.remove('explore');
    document.querySelector('.img').children[0].children[1].children[1].classList.add('c');
}
document.querySelector('body').children[0].children[2].children[0].onclick= function modale() {
    document.querySelector('.sign1').style.display='block';
}
document.querySelector('.f1').children[0].children[1].onclick= function exit() {
    document.querySelector('.sign1').style.display='none';
}
document.querySelector('body').children[0].children[2].children[1].onclick= function modale() {
    document.querySelector('.sign2').style.display='block';
}
document.querySelector('.f2').children[0].children[1].onclick= function exit() {
    document.querySelector('.sign2').style.display='none';
}
document.querySelector('body').children[0].children[2].children[0].onmouseenter= function blue() {
    document.querySelector('body').children[0].children[2].children[0].style.color='rgb(0, 174, 255)';
}
document.querySelector('body').children[0].children[2].children[0].onmouseout= function grey() {
    document.querySelector('body').children[0].children[2].children[0].style.color='rgba(128, 128, 128, 0.685)';
}
document.querySelector('body').children[0].children[2].children[1].onmouseenter= function blue() {
    document.querySelector('body').children[0].children[2].children[1].style.color='rgb(0, 174, 255)';
}
document.querySelector('body').children[0].children[2].children[1].onmouseout= function grey() {
    document.querySelector('body').children[0].children[2].children[1].style.color='rgba(128, 128, 128, 0.685)';
}

document.querySelector('.phone').onmouseenter= function color() {
    document.querySelector('.phone').style.color='rgb(0, 174, 255)';
}
document.querySelector('.phone').onmouseout= function color() {
    document.querySelector('.phone').style.color='black';
}
document.querySelector('.info').onmouseenter= function color() {
    document.querySelector('.info').style.color='rgb(0, 174, 255)';
}
document.querySelector('.info').onmouseout= function color() {
    document.querySelector('.info').style.color='black';
}

document.querySelector('.f1').children[7].onclick= function submit1(e) {
    e.preventDefault();
    var N=true;
    var email=true;
    var password=true;
    if(document.querySelector('.f1').children[2].value=="") {
        N=false;
        document.querySelector('.f1').children[2].classList.remove('in');
        document.querySelector('.f1').children[2].classList.add('error');
        document.querySelector('.f1').children[2].onlick= function remove() {
        document.querySelector('.f1').children[2].classList.remove('error');
        document.querySelector('.f1').children[2].classList.add('in'); 
        
        }
    }
        if(document.querySelector('.f1').children[4].value=="") {
            email=false;
            document.querySelector('.f1').children[4].classList.remove('in');
            document.querySelector('.f1').children[4].classList.add('error');
            document.querySelector('.f1').children[4].onlick= function remove() {
            document.querySelector('.f1').children[4].classList.remove('error');
            document.querySelector('.f1').children[4].classList.add('in'); 
            
            }
        }
            if(document.querySelector('.f1').children[6].value=="") {
                password=false;
                document.querySelector('.f1').children[6].classList.remove('in');
                document.querySelector('.f1').children[6].classList.add('error');
                document.querySelector('.f1').children[6].onlick= function remove() {
                document.querySelector('.f1').children[6].classList.remove('error');
                document.querySelector('.f1').children[6].classList.add('in'); 
                }
    }
      if(email==true && password==true && N==true) {
        document.querySelector('.f1').children[7].innerHTML='already submitted';
    }
}


document.querySelector('.f2').children[5].onclick= function submit2(e) {
    e.preventDefault();
    var N=true;
    var password=true;
    if(document.querySelector('.f2').children[2].value=="") {
        N=false;
        document.querySelector('.f2').children[2].classList.remove('in');
        document.querySelector('.f2').children[2].classList.add('error');
        document.querySelector('.f2').children[2].onlick= function remove() {
        document.querySelector('.f2').children[2].classList.remove('error');
        document.querySelector('.f2').children[2].classList.add('in'); 
        
        }
    }
        if(document.querySelector('.f2').children[4].value=="") {
            password=false;
            document.querySelector('.f2').children[4].classList.remove('in');
            document.querySelector('.f2').children[4].classList.add('error');
            document.querySelector('.f2').children[4].onlick= function remove() {
            document.querySelector('.f2').children[4].classList.remove('error');
            document.querySelector('.f2').children[4].classList.add('in'); 
            
            }
        }
      if( password==true && N==true) {
        document.querySelector('.f2').children[5].innerHTML='already submitted';
    }
}
window.scrollTo({
    behavior : "smooth"
})



/* document.querySelector('p').innerHtml=".." ;
document.querySelector('body').children[1].innerHtml=".." ;
document.getElementById('first').innerHtml=".." ;
dicument.getElementsByClassName('special').innerHtml=".." ;

 */