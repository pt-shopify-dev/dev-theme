/**
 * DEVELOPER DOCUMENTATION
 *
 * Include your custom JavaScript here.
 *
 * The theme Focal has been developed to be easily extensible through the usage of a lot of different JavaScript
 * events, as well as the usage of custom elements (https://developers.google.com/web/fundamentals/web-components/customelements)
 * to easily extend the theme and re-use the theme infrastructure for your own code.
 *
 * The technical documentation is summarized here.
 *
 * ------------------------------------------------------------------------------------------------------------
 * BEING NOTIFIED WHEN A VARIANT HAS CHANGED
 * ------------------------------------------------------------------------------------------------------------
 *
 * This event is fired whenever a the user has changed the variant in a selector. The target get you the form
 * that triggered this event.
 *
 * Example:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   let variant = event.detail.variant; // Gives you access to the whole variant details
 *   let form = event.target;
 * });
 *
 * ------------------------------------------------------------------------------------------------------------
 * MANUALLY CHANGE A VARIANT
 * ------------------------------------------------------------------------------------------------------------
 *
 * You may want to manually change the variant, and let the theme automatically adjust all the selectors. To do
 * that, you can get the DOM element of type "<product-variants>", and call the selectVariant method on it with
 * the variant ID.
 *
 * Example:
 *
 * const productVariantElement = document.querySelector('product-variants');
 * productVariantElement.selectVariant(12345);
 *
 * ------------------------------------------------------------------------------------------------------------
 * BEING NOTIFIED WHEN A NEW VARIANT IS ADDED TO THE CART
 * ------------------------------------------------------------------------------------------------------------
 *
 * This event is fired whenever a variant is added to the cart through a form selector (product page, quick
 * view...). This event DOES NOT include any change done through the cart on an existing variant. For that,
 * please refer to the "cart:updated" event.
 *
 * Example:
 *
 * document.addEventListener('variant:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 * });
 *
 * ------------------------------------------------------------------------------------------------------------
 * BEING NOTIFIED WHEN THE CART CONTENT HAS CHANGED
 * ------------------------------------------------------------------------------------------------------------
 *
 * This event is fired whenever the cart content has changed (if the quantity of a variant has changed, if a variant
 * has been removed, if the note has changed...). This event will also be emitted when a new variant has been
 * added (so you will receive both "variant:added" and "cart:updated"). Contrary to the variant:added event,
 * this event will give you the complete details of the cart.
 *
 * Example:
 *
 * document.addEventListener('cart:updated', function(event) {
 *   var cart = event.detail.cart; // Get the updated content of the cart
 * });
 *
 * ------------------------------------------------------------------------------------------------------------
 * REFRESH THE CART/MINI-CART
 * ------------------------------------------------------------------------------------------------------------
 *
 * If you are adding variants to the cart and would like to instruct the theme to re-render the cart, you cart
 * send the cart:refresh event, as shown below:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 *
 * ------------------------------------------------------------------------------------------------------------
 * USAGE OF CUSTOM ELEMENTS
 * ------------------------------------------------------------------------------------------------------------
 *
 * Our theme makes extensive use of HTML custom elements. Custom elements are an awesome way to extend HTML
 * by creating new elements that carry their own JavaScript for adding new behavior. The theme uses a large
 * number of custom elements, but the two most useful are drawer and popover. Each of those components add
 * a "open" attribute that you can toggle on and off. For instance, let's say you would like to open the cart
 * drawer, whose id is "mini-cart", you simply need to retrieve it and set its "open" attribute to true (or
 * false to close it):
 *
 * document.getElementById('mini-cart').open = true;
 *
 * Thanks to the power of custom elements, the theme will take care automagically of trapping focus, maintaining
 * proper accessibility attributes...
 *
 * If you would like to create your own drawer, you can re-use the <drawer-content> content. Here is a simple
 * example:
 *
 * // Make sure you add "aria-controls", "aria-expanded" and "is" HTML attributes to your button:
 * <button type="button" is="toggle-button" aria-controls="id-of-drawer" aria-expanded="false">Open drawer</button>
 *
 * <drawer-content id="id-of-drawer">
 *   Your content
 * </drawer-content>
 *
 * The nice thing with custom elements is that you do not actually need to instantiate JavaScript yourself: this
 * is done automatically as soon as the element is inserted to the DOM.
 *
 * ------------------------------------------------------------------------------------------------------------
 * THEME DEPENDENCIES
 * ------------------------------------------------------------------------------------------------------------
 *
 * While the theme tries to keep outside dependencies as small as possible, the theme still uses third-party code
 * to power some of its features. Here is the list of all dependencies:
 *
 * "vendor.js":
 *
 * The vendor.js contains required dependencies. This file is loaded in parallel of the theme file.
 *
 * - custom-elements polyfill (used for built-in elements on Safari - v1.0.0): https://github.com/ungap/custom-elements
 * - web-animations-polyfill (used for polyfilling WebAnimations on Safari 12, this polyfill will be removed in 1 year - v2.3.2): https://github.com/web-animations/web-animations-js
 * - instant-page (v5.1.0): https://github.com/instantpage/instant.page
 * - tocca (v2.0.9); https://github.com/GianlucaGuarini/Tocca.js/
 * - seamless-scroll-polyfill (v2.0.0): https://github.com/magic-akari/seamless-scroll-polyfill
 *
 * "flickity.js": v2.2.0 (with the "fade" package). Flickity is only loaded on demand if there is a product image
 * carousel on the page. Otherwise it is not loaded.
 *
 * "photoswipe": v4.1.3. PhotoSwipe is only loaded on demand to power the zoom feature on product page. If the zoom
 * feature is disabled, then this script is never loaded.
 */


  // Custom code of previous theme
  
/******** New Menu ********/
jQuery('.desktop-nav .desktop-nav__linklist .soccer-futbol .mega-menu .mega-menu__linklist > li').hover(function() {
     jQuery('.desktop-nav .desktop-nav__linklist .soccer-futbol .mega-menu .mega-menu__linklist > li').removeClass('active');
    $(this).addClass('active');   
  
});

if(jQuery( ".desktop-nav .desktop-nav__linklist .soccer-futbol .mega-menu .mega-menu__linklist > li" ).first().text().trim() == "All SOCCER/FUTBOL")
{
	jQuery( ".desktop-nav .desktop-nav__linklist .soccer-futbol .mega-menu .mega-menu__linklist  li:nth-child(2)").addClass('active');
}
else
{
	jQuery( ".desktop-nav .desktop-nav__linklist .soccer-futbol .mega-menu .mega-menu__linklist > li" ).first().addClass('active');
}

//List stylestylelist1
jQuery('.mega-menu__grid.stylelist1 a:eq(0), .mega-menu__grid.stylelist1 a:eq(1), .mega-menu__grid.stylelist1 a:eq(2), .mega-menu__grid.stylelist1 a:eq(3), .mega-menu__grid.stylelist1 a:eq(4), .mega-menu__grid.stylelist1 a:eq(5), .mega-menu__grid.stylelist1 a:eq(6), .mega-menu__grid.stylelist1 a:eq(7), .mega-menu__grid.stylelist1 a:eq(8), .mega-menu__grid.stylelist1 a:eq(9), .mega-menu__grid.stylelist1 a:eq(10)').wrapAll('<div class="stylelist1-col-1"></div>');
jQuery('.mega-menu__grid.stylelist1 a:eq(11), .mega-menu__grid.stylelist1 a:eq(12), .mega-menu__grid.stylelist1 a:eq(13), .mega-menu__grid.stylelist1 a:eq(14), .mega-menu__grid.stylelist1 a:eq(15), .mega-menu__grid.stylelist1 a:eq(16), .mega-menu__grid.stylelist1 a:eq(17), .mega-menu__grid.stylelist1 a:eq(18), .mega-menu__grid.stylelist1 a:eq(19), .mega-menu__grid.stylelist1 a:eq(20), .mega-menu__grid.stylelist1 a:eq(21)').wrapAll('<div class="stylelist1-col-2"></div>');
jQuery('.mega-menu__grid.stylelist1 a:eq(22), .mega-menu__grid.stylelist1 a:eq(23), .mega-menu__grid.stylelist1 a:eq(24), .mega-menu__grid.stylelist1 a:eq(25), .mega-menu__grid.stylelist1 a:eq(26), .mega-menu__grid.stylelist1 a:eq(27), .mega-menu__grid.stylelist1 a:eq(28), .mega-menu__grid.stylelist1 a:eq(29), .mega-menu__grid.stylelist1 a:eq(30), .mega-menu__grid.stylelist1 a:eq(31), .mega-menu__grid.stylelist1 a:eq(32)').wrapAll('<div class="stylelist1-col-3"></div>');
jQuery('.mega-menu__grid.stylelist1 a:eq(33), .mega-menu__grid.stylelist1 a:eq(34), .mega-menu__grid.stylelist1 a:eq(35), .mega-menu__grid.stylelist1 a:eq(36), .mega-menu__grid.stylelist1 a:eq(37), .mega-menu__grid.stylelist1 a:eq(38), .mega-menu__grid.stylelist1 a:eq(39), .mega-menu__grid.stylelist1 a:eq(40), .mega-menu__grid.stylelist1 a:eq(41), .mega-menu__grid.stylelist1 a:eq(42), .mega-menu__grid.stylelist1 a:eq(43)').wrapAll('<div class="stylelist1-col-4"></div>');
jQuery('.mega-menu__grid.stylelist1 a:eq(44), .mega-menu__grid.stylelist1 a:eq(45), .mega-menu__grid.stylelist1 a:eq(46), .mega-menu__grid.stylelist1 a:eq(47), .mega-menu__grid.stylelist1 a:eq(48), .mega-menu__grid.stylelist1 a:eq(49)').wrapAll('<div class="stylelist1-col-5"></div>');

//List stylestylelist2
jQuery('.mega-menu__grid.stylelist2 a:eq(0), .mega-menu__grid.stylelist2 a:eq(1), .mega-menu__grid.stylelist2 a:eq(2), .mega-menu__grid.stylelist2 a:eq(3), .mega-menu__grid.stylelist2 a:eq(4), .mega-menu__grid.stylelist2 a:eq(5), .mega-menu__grid.stylelist2 a:eq(6), .mega-menu__grid.stylelist2 a:eq(7), .mega-menu__grid.stylelist2 a:eq(8)').wrapAll('<div class="stylelist2-col-1"></div>');
jQuery('.mega-menu__grid.stylelist2 a:eq(9), .mega-menu__grid.stylelist2 a:eq(10), .mega-menu__grid.stylelist2 a:eq(11), .mega-menu__grid.stylelist2 a:eq(12), .mega-menu__grid.stylelist2 a:eq(13), .mega-menu__grid.stylelist2 a:eq(14), .mega-menu__grid.stylelist2 a:eq(15), .mega-menu__grid.stylelist2 a:eq(16), .mega-menu__grid.stylelist2 a:eq(17)').wrapAll('<div class="stylelist2-col-2"></div>');
jQuery('.mega-menu__grid.stylelist2 a:eq(18), .mega-menu__grid.stylelist2 a:eq(19), .mega-menu__grid.stylelist2 a:eq(20), .mega-menu__grid.stylelist2 a:eq(21), .mega-menu__grid.stylelist2 a:eq(22), .mega-menu__grid.stylelist2 a:eq(23), .mega-menu__grid.stylelist2 a:eq(24), .mega-menu__grid.stylelist2 a:eq(25), .mega-menu__grid.stylelist2 a:eq(26)').wrapAll('<div class="stylelist2-col-3"></div>');
jQuery('.mega-menu__grid.stylelist2 a:eq(27), .mega-menu__grid.stylelist2 a:eq(28), .mega-menu__grid.stylelist2 a:eq(29), .mega-menu__grid.stylelist2 a:eq(30), .mega-menu__grid.stylelist2 a:eq(31)').wrapAll('<div class="stylelist2-col-4"></div>');
    
        
//Style 1    
jQuery('.mega-menu__grid.style1 a:eq(0), .mega-menu__grid.style1 a:eq(1), .mega-menu__grid.style1 a:eq(2), .mega-menu__grid.style1 a:eq(3)').wrapAll('<div class="stye1-col-1"></div>');
jQuery('.mega-menu__grid.style1 a:eq(4), .mega-menu__grid.style1 a:eq(5)').wrapAll('<div class="stye1-col-2"></div>');
jQuery('.mega-menu__grid.style1 a:eq(6), .mega-menu__grid.style1 a:eq(7), .mega-menu__grid.style1 a:eq(8), .mega-menu__grid.style1 a:eq(9), .mega-menu__grid.style1 a:eq(10), .mega-menu__grid.style1 a:eq(11), .mega-menu__grid.style1 a:eq(12), .mega-menu__grid.style1 a:eq(13)').wrapAll('<div class="stye1-col-3"></div>');

//Style 2    
jQuery('.mega-menu__grid.style2 a:eq(0), .mega-menu__grid.style2 a:eq(1), .mega-menu__grid.style2 a:eq(2)').wrapAll('<div class="stye2-col-1"></div>');
jQuery('.mega-menu__grid.style2 a:eq(3), .mega-menu__grid.style2 a:eq(4)').wrapAll('<div class="stye2-col-2"></div>');
jQuery('.mega-menu__grid.style2 a:eq(5)').wrapAll('<div class="stye2-col-3"></div>');
jQuery('.mega-menu__grid.style2 a:eq(6)').wrapAll('<div class="stye2-col-4"></div>');
  
//Style 3    
jQuery('.mega-menu__grid.style3 a:eq(0)').wrapAll('<div class="stye3-col-1"></div>');
jQuery('.mega-menu__grid.style3 a:eq(1)').wrapAll('<div class="stye3-col-2"></div>');
jQuery('.mega-menu__grid.style3 a:eq(2)').wrapAll('<div class="stye3-col-3"></div>');
jQuery('.mega-menu__grid.style3 a:eq(3)').wrapAll('<div class="stye3-col-4"></div>');

//Style 4    
jQuery('.mega-menu__grid.style4 a:eq(0), .mega-menu__grid.style4 a:eq(1), .mega-menu__grid.style4 a:eq(2)').wrapAll('<div class="stye4-col-1"></div>');
jQuery('.mega-menu__grid.style4 a:eq(3)').wrapAll('<div class="stye4-col-2"></div>');
jQuery('.mega-menu__grid.style4 a:eq(4)').wrapAll('<div class="stye4-col-3"></div>');
jQuery('.mega-menu__grid.style4 a:eq(5)').wrapAll('<div class="stye4-col-4"></div>');
    
//Style 5    
jQuery('.mega-menu__grid.style5 a:eq(0), .mega-menu__grid.style5 a:eq(1)').wrapAll('<div class="stye5-col-1"></div>');
jQuery('.mega-menu__grid.style5 a:eq(2)').wrapAll('<div class="stye5-col-2"></div>');
jQuery('.mega-menu__grid.style5 a:eq(3)').wrapAll('<div class="stye5-col-3"></div>');
jQuery('.mega-menu__grid.style5 a:eq(4)').wrapAll('<div class="stye5-col-4"></div>');  
    
//Style 6
jQuery('.mega-menu__grid.style6 a:eq(0)').wrapAll('<div class="stye6-col-1"></div>');
jQuery('.mega-menu__grid.style6 a:eq(1)').wrapAll('<div class="stye6-col-2"></div>');
jQuery('.mega-menu__grid.style6 a:eq(2)').wrapAll('<div class="stye6-col-3"></div>');
    

jQuery( ".mega-menu__grid.style7.HEADWEAR" ).insertAfter( jQuery( ".desktop-nav__link-container.headwear .mega-menu__linklist" ) );    
jQuery( ".mega-menu__grid.style7.Headwear" ).insertAfter( jQuery( ".desktop-nav__link-container.headwear .mega-menu__linklist" ) );  

jQuery( ".mega-menu__grid.stylelist2.Sale.headwear" ).insertAfter( jQuery( ".desktop-nav__link-container.sale .mega-menu__linklist" ) );    
jQuery( ".desktop-nav__link-container.sale.desktop-nav__link-container--has-links .mega-menu__grid.Sale.headwear" ).remove(); 

    
//Style 7
jQuery('.mega-menu__grid.style7 a:eq(0), .mega-menu__grid.style7 a:eq(1)').wrapAll('<div class="stye7-col-1"></div>');
jQuery('.mega-menu__grid.style7 a:eq(2), .mega-menu__grid.style7 a:eq(3)').wrapAll('<div class="stye7-col-2"></div>');
jQuery('.mega-menu__grid.style7 a:eq(4), .mega-menu__grid.style7 a:eq(5)').wrapAll('<div class="stye7-col-3"></div>');
jQuery('.mega-menu__grid.style7 a:eq(6), .mega-menu__grid.style7 a:eq(7)').wrapAll('<div class="stye7-col-4"></div>');
    
//sale menu
jQuery( "li.sale .mega-menu__grid.style1.SALE" ).insertAfter( jQuery( ".desktop-nav__link-container.sale .mega-menu__linklist" ) );    
jQuery( ".desktop-nav__link-container.sale .mega-menu__grid.style5.Equipment, .desktop-nav__link-container.sale .mega-menu__grid.style4.Goalkeeper" ).remove();    
    
jQuery('.Fan.shop a span').val(jQuery(this).val().toLowerCase());    

    
// /*********Mobile menu custom entry**********/    
// var width = $(window).width();
// if (width <= 1024) {
// //  jQuery( ".desktop-nav__link-container.mlb .mega-menu__grid.stylelist2" ).insertAfter( jQuery( ".mobile-nav__link-item.mlb .mobile-nav__link" ) ); 
// jQuery( ".desktop-nav__link-container.mlb .mega-menu__grid.stylelist2" ).insertAfter( jQuery( ".mobile-nav__link-item.mlb .mobile-nav__link" ) );
// jQuery( ".desktop-nav__link-container.nfl .mega-menu__grid.stylelist1" ).insertAfter( jQuery( ".mobile-nav__link-item.nfl .mobile-nav__link" ) );
// jQuery( ".desktop-nav__link-container.nba .mega-menu__grid.stylelist1" ).insertAfter( jQuery( ".mobile-nav__link-item.nba .mobile-nav__link" ) );  
  
// }   
    
// jQuery('.Fan.shop a span').text(function(i, oldText) {
//   return oldText.toLowerCase();
// });
    
// /********* equal hieght *******/
// equalheight = function(container){

// var currentTallest = 0,
//      currentRowStart = 0,
//      rowDivs = new Array(),
//      $el,
//      topPosition = 0;
//  $(container).each(function() {

//    $el = $(this);
//    $($el).height('auto')
//    topPostion = $el.position().top;

//    if (currentRowStart != topPostion) {
//      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
//        rowDivs[currentDiv].height(currentTallest);
//      }
//      rowDivs.length = 0; // empty the array
//      currentRowStart = topPostion;
//      currentTallest = $el.height();
//      rowDivs.push($el);
//    } else {
//      rowDivs.push($el);
//      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
//   }
//    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
//      rowDivs[currentDiv].height(currentTallest);
//    }
//  });
// }

// $(window).load(function() {
//   equalheight('.equal-height');
// });


// $(window).resize(function(){
//   equalheight('.equal-height');
// });

// /**** Mobile menu dropdown custom js *******/
// jQuery(document).ready(function(){
// 	jQuery('.mobile-nav__link-list > .custom_menu_dorp_down > .mobile-nav__link').click(function(){
//     jQuery(this).siblings('.mega-menu__grid').toggleClass("open");
// 	jQuery(this).toggleClass("active");
// });
// });     
