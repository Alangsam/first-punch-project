$("#yorktown-text").click(function () {
    $("#yorktown-hidden-text").toggle();
    $("#letter-y").toggle();
    $("#upsidedown-y").toggle();
});

$("#african-impact").click(function () {
    $("#upsidedown-africa").toggle();
    $("#africa-logo").toggle();
    $("#africa-text").toggle();
});

$("#golf-header").click(function () {
    $("#clubs-upsidedown").toggle();
    $("#golf-club").toggle();
    $("#complaints-about-golf").toggle();
});

$("#professional").click(function () {
    $("#send-button").val("Send it professionaly");
    $("#send-button").prop("disabled", false);
});

$("#personal").click(function () {
    $("#send-button").val("Send it personally");
    $("#send-button").prop("disabled", false);
});
$("#prove-it").click(function () {
    $("#prove-it").removeClass("is-invalid");
    $("#prove-it").prop("checked", true);
});

$("#send-button").click(function () {
    window.open(
        "mailto:alangsam98@gmail.com?subject=Message From Resume&body=" +
            $("#text-area").val(),
        "_blank"
    );
});
