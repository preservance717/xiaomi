var cart = document.getElementById('cart');
var cartmenu = document.getElementById('cartmenu');
var cartmenudiv = cartmenu.getElementsByTagName('div')[0]

cart.onmouseover = function () {
    cart.style.background = "fff";
    cart.style.color = '#ff6700';
    cartmenu.style.height = 100 + 'px';
}

cart.onmouseout = function () {
    cart.style.background = "424242";
    cart.style.color = '#b0b0b0';
    cartmenu.style.height = 0 + 'px';
}

var searchtext = document.getElementById('search-text');
var searchhotwords = document.getElementById('search-hot-words');

searchtext.onfocus = function () {
    searchhotwords.style.display = "none";
}

searchtext.onblur = function () {
    searchhotwords.style.display = "block";
}

var categoryList = document.getElementById('J_categoryList');
var categoryitem = categoryList.getElementsByTagName('li');
var itembox = categoryList.getElementsByTagName('div');
var atitle = getByClass(categoryList, 'title');

for(var i = 0; i <atitle.length; i++){
    var boxul = itembox[i].getElementsByTagName('ul');
    itembox[i].style.width = boxul.length * 265 + 'px';
    atitle[i].index = i;
    itembox[i].index = i;

    itembox[i].onmouseover = atitle[i].onmouseover = function () {
        for(var i = 0; i< atitle.length;i++){
            atitle[i].style.background = '';
            atitle[i].style.color = '';
        }

        atitle[this.index].style.background = '#ff6700';
        atitle[this.index].style.color = '#fff';
        itembox[this.index].style.display = 'block';
    }

    itembox[i].onmouseout = atitle[i].onmouseout = function () {
        for(var i = 0; i< atitle.length;i++){
            atitle[i].style.background = '';
            atitle[i].style.color = '';
        }
        itembox[this.index].style.display = 'none';
    }
}

var odiv = document.getElementById('lunbo');
var oul = odiv.getElementsByTagName('ul')[0];
var tli = oul.getElementsByTagName('li');
var ool = odiv.getElementsByTagName('ol')[0];
var oli = ool.getElementsByTagName('li');
var pre = document.getElementById('pre');
var next = document.getElementById('next');

var now = 0;

for(var i= 0; i<oli.length; i++){
    oli[i].index = i;
    oli.onclick = function () {
        now = this.index;
        tab();
    }
}

function tab() {
    for(var j=0; j<oli.length; j++){
        oli[j].className = '';
        move(tli[j], {opacity:0})
    }

    oli[now].className = "click";
    move(tli[now], {opacity: 100});
}

function getByClass(oParent, sClass){
    var aEle = oParent.getElementsByTagName('*');
    var aResult = [];

    for(var i = 0; i < aEle.length; i++){
        if(aEle[i].className == sClass){
            aResult.push(aEle[i]);
        }
    }

    return aResult;
}