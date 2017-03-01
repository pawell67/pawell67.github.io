$(window).on("load", function () {
    setTimeout(function () {
        $(".my-name").typed({
            strings: ["Paweł Wankiewicz<br></div> Front-end Developer"],
            typeSpeed: 50
        });
    }, 500);
});