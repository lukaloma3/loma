// numbers array
var narr = [3, 34, 565, 65, 65, 65, 6];
console.log(narr);
//end interface
// object
var user = {
    img: "https://cdn5.vectorstock.com/i/1000x1000/84/94/cartoon-coder-young-man-vector-31688494.jpg",
    role: true,
    name: "Shako",
    age: 26,
    profesion: [" front-end ", " back-end"],
    rolefun: function () {
        var role2;
        if (this.role) {
            role2 = "<div class=\"bg-success p-3 text-white\"> ".concat(user.name, " is  admin</div>");
        }
        else {
            role2 = "<div class=\"bg-danger p-3 text-white\"> ".concat(user.name, " is not admin</div>");
        }
        return role2;
    }
};
// end object
var prof = user.profesion.toString();
console.log(prof);
console.log(user.rolefun());
var card = "\n<div class=\"card mx-auto col-lg-5 mt-5\" >\n  <img src=\"".concat(user.img, "\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <p class=\"card-text\">name: ").concat(user.name, "</p>\n    <p class=\"card-text\">age: ").concat(user.age, " y.o</p>\n    <p class=\"card-text\"> profession:").concat(prof, "</p>\n").concat(user.rolefun(), "\n  </div>\n</div>\n");
document.querySelector('.users').innerHTML += card;
