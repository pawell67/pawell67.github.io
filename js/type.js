$(window).on("load", function () {
    setTimeout(function () {
        $(".my-name").typed({
            strings: ["Paweł Wankiewicz<br><div class='sss'></div> Front-end Developer"],
            typeSpeed: 75
        });
    }, 500);
});