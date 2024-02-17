$("#menu_product_button").click(function (e) { 
    if($("#product_menu_container").css("display") == "none"){
        $("#product_menu_container").css("display", "block");
        $("#menu_product_button").find(".chervon").eq(0).css("transform", "rotate(0)");
    }
    else{
        $("#product_menu_container").css("display", "none");
        $("#menu_product_button").find(".chervon").eq(0).css("transform", "rotate(180deg)");
    }
});

$("#menu_order_button").click(function (e) { 
    if($("#order_menu_container").css("display") == "none"){
        $("#order_menu_container").css("display", "block");
        $("#menu_order_button").find(".chervon").eq(0).css("transform", "rotate(0)");
    }
    else{
        $("#order_menu_container").css("display", "none");
        $("#menu_order_button").find(".chervon").eq(0).css("transform", "rotate(180deg)");
    }
});

$("#menu_promotion_button").click(function (e) { 
    if($("#promotion_menu_container").css("display") == "none"){
        $("#promotion_menu_container").css("display", "block");
        $("#menu_promotion_button").find(".chervon").eq(0).css("transform", "rotate(0)");
    }
    else{
        $("#promotion_menu_container").css("display", "none");
        $("#menu_promotion_button").find(".chervon").eq(0).css("transform", "rotate(180deg)");
    }
});

$("#menu_customer_button").click(function (e) { 
    if($("#customer_menu_container").css("display") == "none"){
        $("#customer_menu_container").css("display", "block");
        $("#menu_customer_button").find(".chervon").eq(0).css("transform", "rotate(0)");
    }
    else{
        $("#customer_menu_container").css("display", "none");
        $("#menu_customer_button").find(".chervon").eq(0).css("transform", "rotate(180deg)");
    }
});