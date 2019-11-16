$(document).ready(function() {

    $("#sM").click(function() {
        $(".or-off").css("height", "140px");
        $(".hide").show();
        $("#sL").show();
        $("#sM").hide();
    });
    $("#sL").click(function() {
        $(".or-off").css("height", "91px");
        $(".hide").hide();
        $("#sL").hide();
        $("#sM").show();
    });
    var tot3 = parseInt($(this).children("option:selected").val());
    var tot1 = parseInt($("#total-2").html());
    var tot2 = parseInt($("#total-3").html());
    var totAd = tot1 + tot2;
    $("#total-1").html(totAd);
    $("#totBag").html(totAd);
    $("#final").html(totAd - 1000);

    $("#se").change(calc);

    function calc() {
        var tot = $(this).children("option:selected").val();
        var totM = tot * tot1;
        $("#totBag").html(totM);
        $("#totBag").html(totM + tot2);
        $("#final").html(totM + tot2 - 1000);
    }
    $("#rem").click(function() {
        $("#or-of").css("display", "none");
        var totSu = totAd - tot2;

        $("#total-1").html(totSu);
        $("#totBag").html(totSu);
        $("#final").html(totSu - 1000);
		$("#nOi").html("(1 item)");

        $("#se").change(function() {

            var tot = $(this).children("option:selected").val();
            var totM = tot * tot1;
            $("#totBag").html(totM);
            $("#final").html(totM - 1000);
        });
    });

});