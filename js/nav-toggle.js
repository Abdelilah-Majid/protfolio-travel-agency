let nav_menu_button = $("#nav-menu-button");
let nav_menu_content = $("#nav-menu-content");
console.log(nav_menu_button, nav_menu_content);

function nav_toggle(e) {
    nav_menu_content.slideUp();
}
nav_toggle();
nav_menu_button.on("click", function (e) {
    nav_menu_content.slideToggle();
});

if ($(window).width() > $(window).height()) {
    nav_menu_content.slideDown();
}
if ($(window).width() <= $(window).height()) {
    nav_menu_content.slideUp();
}
$(window).on("resize", function (e) {
    if ($(window).width() > $(window).height()) {
        nav_menu_content.slideDown();
    }
});
$(window).on("resize", function (e) {
    if ($(window).width() <= $(window).height()) {
        nav_menu_content.slideUp();
    }
});
