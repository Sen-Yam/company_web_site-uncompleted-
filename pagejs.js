document.querySelector('.container').children[1].children[0].onmouseenter= function white() {
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



console.log(document.querySelector('.f1').children[0].children[1]);