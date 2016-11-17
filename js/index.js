var cart = document.getElementById('cart');
var cartmenu = document.getElementById('cartmenu');
var cartmenudiv = cartmenu.getElementsByTagName('div')[0]

cart.onmouseover = function () {
    cart.style.background = "fff";
    cart.style.color = '#ff6700';
    cartmenu.style.height = 100 + 'px';
}