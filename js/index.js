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

for (var i = 0; i < atitle.length; i++) {
    var boxul = itembox[i].getElementsByTagName('ul');
    itembox[i].style.width = boxul.length * 265 + 'px';
    atitle[i].index = i;
    itembox[i].index = i;

    itembox[i].onmouseover = atitle[i].onmouseover = function () {
        for (var i = 0; i < atitle.length; i++) {
            atitle[i].style.background = '';
            atitle[i].style.color = '';
        }

        atitle[this.index].style.background = '#ff6700';
        atitle[this.index].style.color = '#fff';
        itembox[this.index].style.display = 'block';
    }

    itembox[i].onmouseout = atitle[i].onmouseout = function () {
        for (var i = 0; i < atitle.length; i++) {
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

for (var i = 0; i < oli.length; i++) {
    oli[i].index = i;
    oli[i].onclick = function () {
        now = this.index;
        tab();
    }
}

function tab() {
    for (var j = 0; j < oli.length; j++) {
        oli[j].className = '';
        move(tli[j], {opacity: 0})
    }

    oli[now].className = "click";
    move(tli[now], {opacity: 100});
}

pre.onclick = function () {
    now--;
    if (now == -1) {
        now = oli.length - 1;
    }

    tab();

};

next.onclick = function () {
    now++;
    if (now == oli.length) {
        now = 0;
    }

    tab();
};

var timer0 = setInterval(next.onclick, 3000);

odiv.onmouseover = function () {
    clearInterval(timer0);
    move(next, {opacity: 100});
    move(pre, {opacity: 100});
};

odiv.onmouseout = function () {
    timer0 = setInterval(next.onclick, 3000);
    move(next, {opacity: 0});
    move(pre, {opacity: 0});
};

var headernav = document.getElementById('header-nav');
var siteheadr = document.getElementById('site-headr');
var navitem = getByClass(headernav, 'nav-item');
var navmenu = getByClass(siteheadr, 'navmenu');

for (var i = 0; i < 7; i++) {
    navitem[i].index = i;
    navmenu[i].index = i;

    navitem[i].onmouseover = navmenu[i].onmouseover = function () {
        for (var i = 0; i < navmenu.length; i++) {
            navmenu[i].style.display = 'none';
        }

        navmenu[this.index].style.display = 'block';
    }

    navitem[i].onmouseout = navmenu[i].onmouseout = function () {
        for (var i = 0; i < 7; i++) {
            navmenu[i].style.display = 'none';
        }
    }
}

var boxhd = document.getElementById('boxhd');
var boxbd = document.getElementById('boxbd');
var boxhda = boxhd.getElementsByTagName('a');
var boxbdu1 = boxbd.getElementsByTagName('ul')[0];

function startab(a, ul) {
    a[0].onclick = function () {
        ul.style.marginLeft = 0;
        a[1].style.color = "#b0b0b0";
        a[0].style.color = "#e0e0e0";
    }
    a[1].onclick = function () {
        ul.style.marginLeft = -1240 + "px";
        a[0].style.color = "#b0b0b0";
        a[1].style.color = "#e0e0e0";
    }

    function autostar() {
        if (ul.style.marginLeft == 0 + "px") {
            ul.style.marginLeft = -1240 + 'px';
            a[0].style.color = "#b0b0b0";
            a[1].style.color = "#e0e0e0";
        } else {
            ul.style.marginLeft = 0;
            a[1].style.color = "#b0b0b0";
            a[0].style.color = "#e0e0e0";
        }
    }

    var timer = null;
    timer = setInterval(autostar, 3000);

    for (var k = 0; k < 2; k++) {
        a[k].onmouseover = function () {
            clearInterval(timer);
        }

        a[k].onmouseout = function () {
            timer = setInterval(autostar, 3000);
        }
    }
}

startab(boxhda, boxbdu1);

function getByClass(oParent, sClass) {
    var aEle = oParent.getElementsByTagName('*');
    var aResult = [];

    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }

    return aResult;
}

function move(obj, jason, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var mstop = true;

        for (var attr in jason) {
            var cur = 0;
            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr));
            }

            var speed = (jason[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (attr == 'opacity') {
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + cur + speed + ')';
            } else {
                obj.style[attr] = cur + speed + 'px';
            }

            if (cur != jason[attr]) {
                mstop = false;
            }
        }

        if (mstop == true) {
            clearInterval(obj.timer);
            if (fn) fn();
        }
    }, 30);
}

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, null)[name];
    }
}