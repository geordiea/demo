var sticky_copy = {
    //links
    nutcalc_nutCalGetNutrition:  "/us/en/php/nutCalGetNutrition.php",

    //text
    nutcalc_sticky_menu: "sticky_menu_",


        nutcalc_country: "us",nutcalc_lang: "en",


    nutcalc_no_specific_product: "Your search query did not match a specific product. Please try again.",
    nutcalc_product_limit: "A maximum of 20 items can be added to your meal. To add this menu item, please remove another menu item from your meal.",
     
};

// click event on sticky menu
$(document).ready(function() {
    $('#meal-builder-content').on('click', function() {
            $(document.documentElement).toggleClass('meal-builder-open');
            var main_content = $('#mb-main-content');
            var mb_close = $('#mb-close');
            var mb_open = $('#mb-open');
            
            main_content.slideToggle(600);
            if (mb_close.is(':hidden')) mb_open.stop(true, true).fadeOut(400, function() { mb_close.fadeIn(400); });
            else mb_close.stop(true, true).fadeOut(400, function() { mb_open.fadeIn(400); });
        });
});

// save to sticky meal
function saveStickyNut (nutId) {
    if (nutId > 0) {    
        $.getJSON( sticky_copy.nutcalc_nutCalGetNutrition, { nid: ""+nutId+"" }, function( data ) {
            //console.log(data);
            storeLocalContent(data);
            
        })
        .error(function() { alert(sticky_copy.nutcalc_no_specific_product); });
    }
}
function checkViewType(ls) {
    var prodArray = ls.menu;
    ls.excess = false;
    if (prodArray.length > 4) {
        ls.excess = true;
    } else {
        var drink = 0;
        var soup = 0;
        var snack = 0;
        var sand = 0;
        $.each( ls.menu, function( key, value ) {
            if (value['prod']['tags_type'] == "drink")
                drink ++;
            else if (value['prod']['tags_type'] == "soup")
                soup ++;
            else if (value['prod']['tags_type'] == "sandwich")
                sand ++;
            else if (value['prod']['tags_type'] == "snack")
                snack ++;
                
            if (drink > 1 || soup > 1 || sand > 1 || snack > 1) {
                ls.excess = true;
                return false;
            }
        });        
    }
}
function storeLocalContent(product) {
    if (localStorage.getItem(sticky_copy.nutcalc_sticky_menu + sticky_copy.nutcalc_country +   sticky_copy.nutcalc_lang) === null ) {
        
        var a = { menu: [] };
        a.menu.push(product);
        a.excess = false;
        localStorage.setItem(sticky_copy.nutcalc_sticky_menu + sticky_copy.nutcalc_country +   sticky_copy.nutcalc_lang, JSON.stringify(a));
        json1 = a;
        //console.log(localStorage.getItem(sticky_copy.nutcalc_sticky_menu + sticky_copy.nutcalc_country +   sticky_copy.nutcalc_lang));  
                                                
    } else {
        b = JSON.parse(localStorage.getItem(sticky_copy.nutcalc_sticky_menu + sticky_copy.nutcalc_country +   sticky_copy.nutcalc_lang));
        if (b.menu.length >= 20) {
            alert(sticky_copy.nutcalc_product_limit);
            return false;
        }
        b.menu.push(product);
        if (!b.excess) {
            checkViewType(b);
        }
        window.json1 = b;
        localStorage.setItem(sticky_copy.nutcalc_sticky_menu + sticky_copy.nutcalc_country +   sticky_copy.nutcalc_lang, JSON.stringify(b));                                                 
        //console.log(localStorage.getItem(sticky_copy.nutcalc_sticky_menu + sticky_copy.nutcalc_country +   sticky_copy.nutcalc_lang));
    }
    if (typeof(render_menu_list) == "function")
        render_menu_list();
}
function removeStickyNut(nid) {
    if (localStorage.getItem(sticky_copy.nutcalc_sticky_menu + sticky_copy.nutcalc_country +   sticky_copy.nutcalc_lang) === null )
        return;
    var currentMeal = JSON.parse(localStorage.getItem(sticky_copy.nutcalc_sticky_menu + sticky_copy.nutcalc_country +   sticky_copy.nutcalc_lang));
    $.each( currentMeal.menu, function( key, value ) {
        if (value['prod']['nid'] == nid) {
            currentMeal.menu.splice(key,1);                                                             
            return false;
        }
    });
    if (currentMeal.excess) {
        checkViewType(currentMeal);
    }
    localStorage.setItem(sticky_copy.nutcalc_sticky_menu + sticky_copy.nutcalc_country +   sticky_copy.nutcalc_lang, JSON.stringify(currentMeal));
    if (typeof(render_menu_list) == "function")
        render_menu_list();
    else if (typeof(render_menu_list2) == "function")
        render_menu_list2();
}