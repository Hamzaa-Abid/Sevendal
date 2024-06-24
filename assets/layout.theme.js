!function(e){function t(t){for(var o,i,c=t[0],a=t[1],l=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(f&&f(t);p.length;)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},u=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.shopifySlateJsonp=window.shopifySlateJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=a;u.push([47,0]),n()}({129:function(e,t){},47:function(e,t,n){"use strict";n(48),n(49),n(50),n(51),n(6),n(52),n(53),n(129);var o=n(29);(0,o.focusHash)(),(0,o.bindInPageLinks)(),function(){var e=navigator.cookieEnabled;return e||(document.cookie="testcookie",e=-1!==document.cookie.indexOf("testcookie")),e}()&&(document.documentElement.className=document.documentElement.className.replace("supports-no-cookies","supports-cookies"))},53:function(e,t,n){}});
jQuery(document).ready(function($){
  
  jQuery('#shopify-section-product-billboard-custom-jewelry').prepend(`
  <div class="scroll sticky_sec">
  <div class="left_sticky">
  <img src="//cdn.shopify.com/s/files/1/0298/5990/5669/products/Forlovelsesring_tynn_gult-gull_14K_fire-klor_rund-briljant_0.50-carat_diamant_front_7d52efbd-78e1-4517-b28f-2abe06ae3386_1107x.progressive.png?v=1660168195" />
  <h2>Ring</h2>
  <br>
  <h2 class="sticky_price"></h2>
  </div>
  <div class="right_sticky">
  <button> Legg i handlekurv</button>
</div>
  </div>`);

   window.addEventListener('scroll', function() {
		var element = document.querySelector('#shopify-section-product-grid-guarantee');
		var position2 = element.getBoundingClientRect();
        var element2 = document.querySelector('#shopify-section-product');
        var position3 = element2.getBoundingClientRect();

		// checking for partial visibility
		if(position2.top < window.innerHeight && position2.bottom >= 0) {
          $('.left_sticky h2').html($('.c-product__title').html());
          $('.sticky_price').html(' -'+$('.c-product__prices__main__price').html());
          $('.left_sticky img').attr('src',jQuery('.rondell-item-focused img').attr('src'));
          $('.scroll.sticky_sec').css('opacity','1');
          
		}
     if(position3.top < window.innerHeight && position3.bottom >= 0) {
          $('.scroll.sticky_sec').css('opacity','0');
          
		}
	});  

 jQuery(document).on('click','.right_sticky button',function(){
    $('button[name="add"]').trigger('click');
  });         
});

//$(window).on('load', function () 


// remove extra divs
$('.template-index .c-grid__items .Gult:not(:first)').remove();
$('.template-index .c-grid__items .Hvitt:not(:first)').remove();
$('.template-index .c-grid__items .Rosé:not(:first)').remove();


$(document).ready(function()             
{

  var timeout_resize = null;
  $(window).on('resize', function(){

      if($(document).width() > 767) {
        clearTimeout(timeout_resize);
        timeout_resize = setTimeout(function(){
          $('body').removeClass('mobile');
        }, 1);
      }
      
      else {
        clearTimeout(timeout_resize);
        timeout_resize = setTimeout(function(){
          $('body').addClass('mobile');

          $('.main-header__nav--primary').find('li').hover(
            function(){
              $('.main-header__nav--primary .main-header__nav__sub-menu').fadeOut('fast');
              $(this).addClass('hover');
              $(this).find('.main-header__nav__sub-menu').fadeIn('fast');
              $(this).find('.main-header__nav__sub-menu').css('display', 'flex');
              var height_primary_category = $(this).find('.main-header__nav__sub-menu').outerHeight();
              $('.main-header__nav--secondary').css('top', height_primary_category);
              $('.main-header__nav--primary li.hover').on('click', function () {
                $(this).find('a').addClass('active');
              });
            },
            function(){
              $('.main-header__nav--secondary').css('top', '0');
              $(this).removeClass('hover');
              $(this).find('a').removeClass('active');
              $(this).find('.main-header__nav__sub-menu').fadeOut('fast');
          });
        }, 1);
      }

  }).trigger('resize');


  $('.c-grid--columns-3 .c-grid__item').each(function(){
      if($(this).children().length == 0){
        $(this).hide();
      }
  });

  $('.template-collection .c-billboard__lead p').each(function() {
    const $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length === 0)
        $this.remove();
});

  
});