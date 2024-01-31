// global jQuery:false 
// Video and Audio tag wrapper
var THEMEREX_useMediaElement = true;

//fonts
var THEMEREX_GLOBAL_FONTS = 'Laila';
var THEMEREX_HEADER_FONTS = 'Laila';

// E-mail mask
THEMEREX_EMAIL_MASK = '^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$';
THEMEREX_MAGNIFIC_EFFECT_OPEN = "mfp-zoom-in";
THEMEREX_RESPONSIVE_MENU = "800";

// Javascript String constants for translation
THEMEREX_MESSAGE_EMAIL_ADDED = "Your address %s has been successfully added to the subscription list";
THEMEREX_REVIEWS_VOTE = "Thanks for your vote! New average rating is:";
THEMEREX_REVIEWS_ERROR = "Error saving your vote! Please, try again later.";
THEMEREX_MAGNIFIC_LOADING = "Loading image %curr% ...";
THEMEREX_MAGNIFIC_ERROR = "<a href=\"%url%\">The image %curr%</a> could not be loaded.";
THEMEREX_MESSAGE_ERROR_LIKE = "Error saving your like! Please, try again later.";
THEMEREX_SC_SKILLS = "Skills";
THEMEREX_GLOBAL_ERROR_TEXT = "Global error text";
THEMEREX_NAME_EMPTY = "The name can't be empty";
THEMEREX_NAME_LONG = "Too long name";
THEMEREX_EMAIL_EMPTY = "Too short (or empty) email address";
THEMEREX_EMAIL_LONG = "Too long email address";
THEMEREX_EMAIL_NOT_VALID = "Invalid email address";
THEMEREX_TERMS_NOT_AGREE = "Please check terms";
THEMEREX_SUBJECT_EMPTY = "The subject can't be empty";
THEMEREX_SUBJECT_LONG = "Too long subject";
THEMEREX_MESSAGE_EMPTY = "The message text can't be empty";
THEMEREX_MESSAGE_LONG = "Too long message text";
THEMEREX_SEND_COMPLETE = "Send message complete!";
THEMEREX_SEND_ERROR = "Transmit failed!";
THEMEREX_LOGIN_EMPTY = "The Login field can't be empty";
THEMEREX_LOGIN_LONG = "Too long login field";
THEMEREX_PASSWORD_EMPTY = "The password can't be empty and shorter then 5 characters";
THEMEREX_PASSWORD_LONG = "Too long password";
THEMEREX_PASSWORD_NOT_EQUAL = "The passwords in both fields are not equal";
THEMEREX_REGISTRATION_SUCCESS = "Registration success! Please log in!";
THEMEREX_REGISTRATION_FAILED = "Registration failed!";
THEMEREX_REGISTRATION_AUTHOR = "Your account is waiting for the site admin moderation!";
THEMEREX_GEOCODE_ERROR = "Geocode was not successful for the following reason:";
THEMEREX_GOOGLE_MAP_NOT_AVAIL = "Google map API not available!";
THEMEREX_NAVIGATE_TO = "Navigate to...";

THEMEREX_SAVE_SUCCESS = "Post content saved!";
THEMEREX_SAVE_ERROR = "Error saving post data!";
THEMEREX_DELETE_POST_MESSAGE = "You really want to delete the current post?";
THEMEREX_DELETE_POST = "Delete post";
THEMEREX_DELETE_SUCCESS = "Post deleted!";
THEMEREX_DELETE_ERROR = "Error deleting post!";

// AJAX parameters
var THEMEREX_ajax_url = "";
var THEMEREX_ajax_nonce = "007fb26e5f";

// Site base url
var THEMEREX_site_url = "";
var THEMEREX_ADMIN_MODE = false;
var THEMEREX_error_msg_box = null;
var THEMEREX_VIEWMORE_BUSY = false;
var THEMEREX_REMEMBERSCROLL = 0;
var THEMEREX_isotopeInitCounter = 0;
var THEMEREX_isotopeMemoryID = '';
var THEMEREX_isotopeFilter = '*';

var tribe_js_config = {
    "permalink_settings": "\/%postname%\/",
    "events_post_type": "tribe_events",
    "events_base": ""
};
var tribe_events_linked_posts = {
    "post_types": {
        "tribe_venue": "venue",
        "tribe_organizer": "organizer"
    }
};
var woocommerce_price_slider_params = {
    "currency_symbol": "$",
    "currency_pos": "left",
    "min_price": "",
    "max_price": ""
};
var wc_add_to_cart_params = {
    "ajax_url": "",
    "wc_ajax_url": "",
    "i18n_view_cart": "View Cart",
    "cart_url": "",
    "is_cart": "",
    "cart_redirect_after_add": "no"
};
var woocommerce_params = {
    "ajax_url": "",
    "wc_ajax_url": ""
};
var wc_checkout_params = {
    "ajax_url": "",
    "wc_ajax_url": "",
    "update_order_review_nonce": "b88adf48c0",
    "apply_coupon_nonce": "31fbb0493e",
    "remove_coupon_nonce": "d1004e1c75",
    "option_guest_checkout": "yes",
    "checkout_url": "\/wooc-checkout\/?wc-ajax=checkout",
    "is_checkout": "1",
    "debug_mode": "",
    "i18n_checkout_error": "Error processing checkout. Please try again."
};
var wc_single_product_params = {
    "i18n_required_rating_text": "Please select a rating",
    "review_rating_required": "yes"
};
var wc_cart_fragments_params = {
    "ajax_url": "",
    "wc_ajax_url": "",
    "fragment_name": "wc_fragments"
};

jQuery(document).ready(function() {
    "use strict";
    isotopeReadHeight();
    timelineResponsive()
    ready();
    itemPageFull();
    scrollAction();
    fullSlider();
});

jQuery(window).resize(function() {
    "use strict";
    itemPageFull();
    timelineResponsive();
    fullSlider();
    scrollAction();
});

jQuery(window).smartresize(function() {
    mobileMenuShow();
    isotopeReadHeight();
})

jQuery(window).scroll(function() {
    "use strict";
    scrollAction();
});

function ready() {
    "use strict";
    //textarea Autosize
    if (jQuery('textarea.textAreaSize').length > 0) {
        jQuery('textarea.textAreaSize').autosize({
            append: "\n"
        });
    }

    // Share button
    if (jQuery('ul.shareDrop').length > 0) {
        jQuery(document).click(function(e) {
            "use strict";
            jQuery('ul.shareDrop').slideUp().siblings('a.shareDrop').removeClass('selected');
        });
        jQuery('li.share a').click(function(e) {
            "use strict";
            if (jQuery(this).hasClass('selected')) {
                jQuery(this).removeClass('selected').siblings('ul.shareDrop').slideUp();
            } else {
                jQuery(this).addClass('selected').siblings('ul.shareDrop').slideDown();
            }
            e.preventDefault();
            return false;
        });
        jQuery('li.share li a').click(function(e) {
            "use strict";
            jQuery(this).parents('ul.shareDrop').slideUp().siblings('a.shareDrop').removeClass('selected');
            e.preventDefault();
            return false;
        });
    }

    // Like button
    jQuery('.postSharing,.masonryMore').on('click', '.likeButton a', function(e) {
        "use strict";
        var button = jQuery(this).parent();
        var inc = button.hasClass('like') ? 1 : -1;
        var post_id = button.data('postid');
        var likes = Number(button.data('likes')) + inc;
        var grecko_likes = jQuery.cookie('grecko_likes');
        if (grecko_likes === undefined) grecko_likes = '';
        jQuery.post(THEMEREX_ajax_url, {
            action: 'post_counter',
            nonce: THEMEREX_ajax_nonce,
            post_id: post_id,
            likes: likes
        }).done(function(response) {
            "use strict";
            var rez = JSON.parse(response);
            if (rez.error === '') {
                if (inc == 1) {
                    var title = button.data('title-dislike');
                    button.removeClass('like').addClass('likeActive');
                    grecko_likes += (grecko_likes.substr(-1) != ',' ? ',' : '') + post_id + ',';
                } else {
                    var title = button.data('title-like');
                    button.removeClass('likeActive').addClass('like');
                    grecko_likes = grecko_likes.replace(',' + post_id + ',', ',');
                }
                button.data('likes', likes).find('a').attr('title', title).find('.likePost').html(likes);
                jQuery.cookie('grecko_likes', grecko_likes, {
                    expires: 365,
                    path: '/'
                });
            } else {
                themerex_message_warning(THEMEREX_MESSAGE_ERROR_LIKE);
            }
        });
        e.preventDefault();
        return false;
    });

    //hoverZoom img effect
    jQuery('.hoverIncrease').each(function() {
        "use strict";
        var img = jQuery(this).data('image');
        var title = jQuery(this).data('title');
        if (img) {
            jQuery(this).append('<span class="hoverShadow"></span><a href="' + img + '" title="' + title + '"><span class="hoverIcon"></span></a>');
        }
    });

    // ====== isotope =====================================================================
    setTimeout(function() {
        "use strict";
        if (jQuery('.isotopeWrap').length > 0) {

            isotopeFilterClass('*');

            var isotopeWrap = jQuery('.isotopeWrap');
            var isotopeItem = isotopeWrap.find('.isotopeItem');
            var isotopeWrapWidth = isotopeWrap.width();
			
			if(isotopeWrapWidth % 12 != 0){
				var x = isotopeWrapWidth % 12;
				isotopeWrapWidth = isotopeWrapWidth - x;
				isotopeWrap.width(isotopeWrapWidth);
			}
			
            var isotopeWrapFoliosize = isotopeWrap.data('foliosize');
            var isotopeItemIncw = jQuery(this).data('incw');
            var isotopeItemInch = jQuery(this).data('inch');

            isotopeReadHeight();

            //isotope
            isotopeWrap.isotope({
                layoutMode: 'masonry',
                resizable: false,
                filter: THEMEREX_isotopeFilter,
                //masonry: {
                //columnWidth: isotopeSize[0]
                //},
                itemSelector: '.isotopeItem',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            isotopeRow(isotopeWrap, isotopeItem);

            setTimeout(function() {
                isotoreEffect()
            }, 200);

            isotopeResize(isotopeWrap, isotopeItem);

            //isotope Full post 
            isotopeWrap.on('click', 'article.isotopeItem', function() {
                "use strict";
                if (jQuery(this).hasClass('post_format_link')) {
                    location.href = jQuery(this).find('.isotopeLinks').attr('href');
                } else {
                    var scrollPos = jQuery(window).scrollTop();
                    isotopeRow(isotopeWrap, isotopeItem);
                    isotopeAjaxLoad(isotopeWrap, jQuery(this));
                    jQuery('html,body').animate({
                        scrollTop: scrollPos
                    }, 0);
                }
            });

            //isotope navigation
            isotopeWrap.on('click', '.isotopeNav', function() {
                "use strict";
                var scrollPos = jQuery(window).scrollTop();
                var nav_id = jQuery(this).data('nav-id');
                jQuery('html,body').animate({
                    scrollTop: scrollPos
                }, 0);
                isotopeAjaxLoad(isotopeWrap, jQuery('.isotopeItem[data-postid="' + nav_id + '"]'));
            });


            //isotope Fullpost closed 
            isotopeWrap.on('click', '.fullItemClosed', function() {
                "use strict";
                isotopeRemove(isotopeWrap, jQuery(this).parent('.fullItemWrap'));
            });


            //isotope filtre
            jQuery('.isotopeFiltr li a').click(function() {
                "use strict";

                isotopeRemove(isotopeWrap, isotopeWrap.find('.fullItemWrap'));

                jQuery('.isotopeFiltr li').removeClass('active');
                jQuery(this).parent().addClass('active');

                var selectorFilter = jQuery(this).attr('data-filter');

                isotopeFilterClass(selectorFilter);

                isotopeWrap.isotope({
                    layoutMode: 'masonry',
                    itemSelector: '.isotopeItem',
                    filter: selectorFilter,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                }).isotope('on', 'layoutComplete', function() {
                    "use strict";
                    isotopeRow(isotopeWrap, isotopeItem);
                });


                THEMEREX_isotopeFilter = selectorFilter;
                return false;
            });


        }
    }, 500);
    // main Slider
    if (jQuery('.sliderBullets, .sliderHeader').length > 0) {
        if (jQuery.rsCSS3Easing != undefined && jQuery.rsCSS3Easing != null) {
            jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
        }
        jQuery('.sliderHeader').addClass('hsInit');
        initShortcodes(jQuery(this));
    }


    // ====================================================================================
    // Page Navigation
    jQuery(document).click(function() {
        "use strict";
        jQuery('.pageFocusBlock').slideUp();
    });
    jQuery('.pageFocusBlock').click(function(e) {
        "use strict";
        e.preventDefault();
        return false;
    });
    jQuery('.navInput').click(function(e) {
        "use strict";
        jQuery('.pageFocusBlock').slideDown();
        e.preventDefault();
        return false;
    });

    //related links
    jQuery('.postBoxItem').click(function() {
        "use strict";
        var link = jQuery(this).find('h5 a').attr('href');
        if (link != '') {
            window.location.href = link;
        }
    })


    // topMenu DROP superfish
    jQuery('.topMenu ul, .userMenuWrap ul').superfish({
        delay: 500,
        animation: {
            opacity: 'show',
            height: 'show'
        },
        animationOut: {
            opacity: 'hide',
            height: 'hide'
        },
        speed: 'fast',
        autoArrows: false,
        dropShadows: false
    });



    // top menu animation
    jQuery(document).click(function() {
        "use strict";
        jQuery('.hideMenuDisplay #header').removeClass('topMenuShow');
    });
    jQuery('.hideMenuDisplay .wrapTopMenu').click(function(e) {
        "use strict";
        e.stopPropagation();
    });
    jQuery('.hideMenuDisplay .openTopMenu').click(function(e) {
        "use strict";
        e.stopPropagation();
        jQuery(this).parent().toggleClass('topMenuShow');
        return false;
    });


    // top menu animation	
    jQuery('.usermenuWrap').click(function(e) {
        "use strict";
        e.stopPropagation();
    });
    jQuery('.openUserArea').click(function(e) {
        "use strict";
        e.stopPropagation();
        jQuery('#header').toggleClass('userAreaShow');
        return false;
    });




    // Sidemenu DROP
    jQuery('.sidemenu_area > ul > li.dropMenu ').click(function(e) {
        "use strict";
        e.preventDefault();
        return false;
    });
    jQuery('.sidemenu_area > ul > li.dropMenu, .sidemenu_area > ul > li.dropMenu li').click(function(e) {
        "use strict";
        initScroll('sidemenu_scroll');
        jQuery(this).toggleClass('dropOpen');
        jQuery(this).find('ul').first().slideToggle();
        e.preventDefault();
        return false;
    });

    jQuery('#sidemenu_scroll a').click(function(e) {
        "use strict";
        initScroll('sidemenu_scroll');
        jQuery('#sidemenu_scroll').mCustomScrollbar("update");
        e.preventDefault();
        return false;
    });

    jQuery(document).click(function(e) {
        "use strict";
        jQuery('body').removeClass('openMenuFixRight openMenuFix');
        jQuery('.sidemenu_overflow').fadeOut(400);
        jQuery('body').attr('style', '');;

    });
    jQuery('.sidemenu_wrap.swpLeftPos, .swpRightPos, .openRightMenu').click(function(e) {
        "use strict";
        e.preventDefault();
        return false;
    });

    jQuery('.sidemenu_wrap .sidemenu_button').click(function(e) {
        "use strict";
        jQuery('body').addClass('openMenuFix');
        if (jQuery('.sidemenu_overflow').length == 0) {
            jQuery('body').append('<div class="sidemenu_overflow"></div>')
        }
        jQuery('.sidemenu_overflow').fadeIn(400);
        jQuery('body').css('overflow', 'hidden');
        e.preventDefault();
        return false;
    });

    jQuery('.openRightMenu').click(function(e) {
        "use strict";
        jQuery('body').addClass('openMenuFixRight');
        if (jQuery('.sidemenu_overflow').length == 0) {
            jQuery('body').append('<div class="sidemenu_overflow"></div>')
        }
        jQuery('.sidemenu_overflow').fadeIn(400);
        jQuery('body').css('overflow', 'hidden');
        e.preventDefault();
        return false;
    });


    //Hover DIR
    jQuery(' .portfolio > .isotopeItem > .hoverDirShow').each(function() {
        "use strict";
        jQuery(this).hoverdir();
    });


    //Portfolio item Description
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        jQuery('.toggleButton').show();
        jQuery('.itemDescriptionWrap,.toggleButton').click(function(e) {
            "use strict";
            jQuery(this).toggleClass('descriptionShow');
            jQuery(this).find('.toggleDescription').slideToggle();
            e.preventDefault();
            return false;
        });
    } else {
        jQuery('.itemDescriptionWrap').hover(function() {
            "use strict";
            jQuery(this).toggleClass('descriptionShow');
            jQuery(this).find('.toggleDescription').slideToggle();
        })
    }




    jQuery('input[type="text"], input[type="password"], input[type="search"], textarea').focus(function() {
            "use strict";
            jQuery(this).attr('data-placeholder', jQuery(this).attr('placeholder')).attr('placeholder', '')
            jQuery(this).parent('li').addClass('iconFocus');
        })
        .blur(function() {
            "use strict";
            jQuery(this).attr('placeholder', jQuery(this).attr('data-placeholder'))
            jQuery(this).parent('li').removeClass('iconFocus');
        });

    //responsive Show menu
    jQuery('.openMobileMenu').click(function(e) {
        "use strict";
        var ul = jQuery('.wrapTopMenu .topMenu > ul');
        ul.slideToggle();
        jQuery(this).parents('.menuFixedWrap').toggleClass('menuMobileShow');
        e.preventDefault();
        return false;
    });


    // IFRAME width and height constrain proportions 
    if (jQuery('iframe').length > 0) {
        jQuery(window).resize(function() {
            "use strict";
            videoDimensions();
        });
        videoDimensions();
    }

    // Hide empty pagination
    if (jQuery('#nav_pages > ul > li').length < 3) {
        jQuery('#nav_pages').remove();
    } else {
        jQuery('.theme_paginaton a').addClass('theme_button');
    }

    // View More button
    jQuery('#viewmore_link').click(function(e) {
        "use strict";
        if (!THEMEREX_VIEWMORE_BUSY) {
            jQuery(this).addClass('loading');
            THEMEREX_VIEWMORE_BUSY = true;
            jQuery.post(THEMEREX_ajax_url, {
                action: 'view_more_posts',
                nonce: THEMEREX_ajax_nonce,
                page: THEMEREX_VIEWMORE_PAGE + 1,
                data: THEMEREX_VIEWMORE_DATA,
                vars: THEMEREX_VIEWMORE_VARS
            }).done(function(response) {
                "use strict";
                var rez = JSON.parse(response);
                jQuery('#viewmore_link').removeClass('loading');
                THEMEREX_VIEWMORE_BUSY = false;
                if (rez.error === '') {

                    var posts_container = jQuery('.content').eq(0);

                    if (posts_container.find('section.isotopeWrap').length > 0) posts_container = posts_container.find('section.isotopeWrap').eq(0);

                    if (posts_container.hasClass('isotopeWrap')) {
                        posts_container.append(rez.data);
                        THEMEREX_isotopeInitCounter = 0;
                        initAppendedIsotope(posts_container, rez.filters);
                    } else {
                        jQuery('.ajaxContainer').append(rez.data);
                    }

                    initPostFormats();
                    THEMEREX_VIEWMORE_PAGE++;
                    if (rez.no_more_data == 1) {
                        jQuery('#viewmore_link').hide();
                    }
                    if (jQuery('#nav_pages ul li').length >= THEMEREX_VIEWMORE_PAGE) {
                        jQuery('#nav_pages ul li').eq(THEMEREX_VIEWMORE_PAGE).toggleClass('pager_current', true);
                    }
                }
            });
        }
        e.preventDefault();
        return false;
    });

    // Infinite pagination
    if (jQuery('#viewmore_link.pagination_infinite').length > 0) {
        jQuery(window).scroll(infiniteScroll);
    }

    //custom panel scroll
    if (jQuery('#custom_options').length > 0) {
        jQuery('#custom_options .sc_scroll').css('height', jQuery('#custom_options').height() - 46);
    }

    // Scroll to top
    jQuery('.buttonScrollUp').click(function(e) {
        "use strict";
        jQuery('html,body').animate({
            scrollTop: 0
        }, 'slow');
        e.preventDefault();
        return false;
    });

    // Added to cart
    jQuery('body').bind('added_to_cart', function() {
        "use strict";
        // Update amount on the cart button
        var total = jQuery('.widget_shopping_cart').eq(0).find('.total .amount').text();
        if (total != undefined) {
            jQuery('.usermenuCart .cart_total').text(total);
        }
    });

    if (jQuery(window).width() <= 669) {
        jQuery('#registerForm .sc_columns_item:nth-child(3) .formList').append(jQuery('#registerForm .formList .i-agree, #registerForm .formList .formButton'));
    }

    if (jQuery(window).width() <= 800 && jQuery('.topMenu.main').length > 0) {
        jQuery('#mainmenu').append(jQuery('#mainmenu_right > li'));
    }

    initPostFormats();
}; //end ready




// Fit video frame to document width
function videoDimensions() {
    jQuery('iframe').each(function() {
        "use strict";
        var iframe = jQuery(this).eq(0);
        var w_attr = iframe.attr('width');
        var h_attr = iframe.attr('height');
        if (!w_attr || !h_attr) {
            return;
        }
        var w_real = iframe.width();
        if (w_real != w_attr) {
            var h_real = Math.round(w_real / w_attr * h_attr);
            iframe.height(h_real);
        }
    });
}

function initPostFormats() {
    "use strict";

    // MediaElement init
    if (THEMEREX_useMediaElement) {

        if (jQuery('audio').length > 0) {
            jQuery('audio').each(function() {
                "use strict";
                if (jQuery(this).hasClass('inited')) return;
                jQuery(this).addClass('inited').mediaelementplayer({
                    audioWidth: '100%', // width of audio player
                    audioHeight: 30, // height of audio player
                    success: function(mediaElement, domObject) {
                        "use strict";
                        jQuery(domObject).parents('.sc_audio').addClass('sc_audio_show');
                    },
                });
            });
        }

        jQuery('video').each(function() {
            "use strict";
            if (jQuery(this).hasClass('inited')) return;
            jQuery(this).addClass('inited').mediaelementplayer({
                videoWidth: -1, // if set, overrides <video width>
                videoHeight: -1, // if set, overrides <video height>
                audioWidth: '100%', // width of audio player
                audioHeight: 30 // height of audio player
            });
        });
    } else {
        jQuery('.sc_audio').addClass('sc_audio_show');
    }

    // Popup init image
    jQuery("a[href$='jpg']:not(.prettyphoto), a[href$='jpeg']:not(.prettyphoto), a[href$='png']:not(.prettyphoto), a[href$='gif']:not(.prettyphoto)").attr('rel', 'magnific');
//	jQuery("a.woocommerce-main-image,.woocommerce .images a.zoom").attr('rel', '');
    jQuery("a[rel*='magnific']:not(.inited)").addClass('inited').attr('data-effect', THEMEREX_MAGNIFIC_EFFECT_OPEN).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        removalDelay: 500,
        midClick: true,
        preloader: true,
        gallery: {
            enabled: true
        },
        tLoading: '<span></span>',
        image: {
            tError: THEMEREX_MAGNIFIC_ERROR,
            verticalFit: true,
        },
        callbacks: {
            beforeOpen: function() {
                "use strict";
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });
    // Popup init video
    jQuery("a[href*='youtube'],a[href*='vimeo']").attr('rel', 'magnific-video');
    jQuery("a[rel*='magnific-video']:not(.inited)").addClass('inited').attr('data-effect', THEMEREX_MAGNIFIC_EFFECT_OPEN).magnificPopup({
        type: 'iframe',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        removalDelay: 500,
        midClick: true,
        preloader: true,
        callbacks: {
            open: function() {
                //open function
            },
            close: function() {
                //close function
            }
        }
    });



    // Popup windows with any html content
    jQuery('.user-popup-link:not(.inited)').addClass('inited').magnificPopup({
        type: 'inline',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                "use strict";
                this.st.mainClass = 'mfp-zoom-in';
                initShortcodes(jQuery('.sc_popup'));
            },
            open: function() {
                "use strict";
                jQuery('html').css({
                    overflow: 'visible',
                    margin: 0
                });
            },
            close: function() {}
        },
        midClick: true
    });


    // Add video on thumb click
    jQuery('.sc_video_frame').each(function() {
        "use strict";
        if (jQuery(this).hasClass('sc_inited')) return;
        if (jQuery(this).hasClass('sc_video_frame_auto_play')) {
            scVideoAutoplay(jQuery(this));
        }
        jQuery(this).addClass('sc_inited').click(function(e) {
            "use strict";
            scVideoAutoplay(jQuery(this));
            e.preventDefault();
        });
    });
    jQuery('.sc_video_frame').hover(function() {
        jQuery(this).find('.sc_video_frame_player_title').slideDown(400);
    }, function() {
        "use strict";
        jQuery(this).find('.sc_video_frame_player_title').slideUp(400);
    });

    function scVideoAutoplay($videoObject) {
        "use strict";
        var video = $videoObject.data('videoframe');
        if (video !== '' && !$videoObject.hasClass('sc_video_active')) {
            $videoObject.addClass('sc_video_active');
            $videoObject.empty().html(video);
            videoDimensions();
        }
        return false;
    }

    //hover Underline effect
    jQuery('.hoverUnderline').each(function() {
        "use strict";
        jQuery(this).find('a').each(function() {
            jQuery(this).append('<span class="hoverLine"></span>');
        });
    });

}

//mobile menu init, resize
function mobileMenuShow() {
    "use strict";
    if (THEMEREX_RESPONSIVE_MENU < jQuery(window).width()) {
        jQuery('.wrapTopMenu .topMenu > ul').removeAttr('style');
    }
}

// Infinite Scroll 
function infiniteScroll() {
    "use strict";
    var v = jQuery('#viewmore_link.pagination_infinite').offset();
    if (jQuery(this).scrollTop() + jQuery(this).height() + 100 >= v.top && !THEMEREX_VIEWMORE_BUSY) {
        jQuery('#viewmore_link').eq(0).trigger('click');
    }
}

//itemPageFull
function itemPageFull() {
    "use strict";
    var bodyHeight = jQuery(window).height();
    jQuery('.itemPageFull').css('height', bodyHeight - jQuery('.topWrap').height());
    jQuery('#sidemenu_scroll').css('height', bodyHeight);
}


//init scroll
function initScroll(idScroll) {
    "use strict";

    if (!jQuery('#' + idScroll).hasClass("scrollInit")) {
        jQuery('#' + idScroll).addClass('scrollInit').mCustomScrollbar({
            scrollButtons: {
                enable: false
            },
        });

        jQuery('.scrollPositionAction > .roundButton').click(function(e) {
            "use strict";
            var scrollAction = jQuery(this).data('scroll');
            jQuery('#' + idScroll).mCustomScrollbar("scrollTo", scrollAction);
            e.preventDefault();
            return false;
        });

    }
}



//scroll Action
function scrollAction() {
    "use strict";
    var head = jQuery('header');
    var buttonScrollTop = jQuery('.upToScroll');
    var scrollPos = jQuery(window).scrollTop();
    var headHeight = jQuery(window).height();
    var topMemuHeight = head.height();
    var menuMinWidth = jQuery(window).width() > 990;
    var menuMinWidth = head.find('.menuFixedWrap').height();

    //fixed menu
    if (scrollPos <= topMemuHeight / 3 && menuMinWidth) {
        head.removeClass('fixedTopMenuShow');
    } else if (scrollPos >= topMemuHeight / 1.5 && menuMinWidth) {
        head.addClass('fixedTopMenuShow');
        //smartScroll
        if (THEMEREX_REMEMBERSCROLL < scrollPos) {
            //scroll up
            head.removeClass('smartScrollDown');
            jQuery('.menuFixedWrap').height(menuMinWidth);
        } else if (THEMEREX_REMEMBERSCROLL > scrollPos) {
            //scroll down
            head.addClass('smartScrollDown');
            jQuery('.menuFixedWrap').height('auto');
        }

    }

    THEMEREX_REMEMBERSCROLL = scrollPos;

    //button UP 
    if (scrollPos > topMemuHeight) {
        buttonScrollTop.addClass('buttonShow');
    } else {
        buttonScrollTop.removeClass('buttonShow');
    }
}

function fullSlider() {
    "use strict";
    if (jQuery('.fullScreenSlider').length > 0) {
        jQuery('.sliderHeader, .sliderHeader .rsContent').css('height', jQuery(window).height())
    }
}


//Time Line
function timelineResponsive() {
    "use strict";
    var bodyHeight = jQuery(window).height();
    var headHeight = jQuery(window).height() - jQuery('.contentTimeLine h2').height() - 150;
    var leftPosition = (jQuery('.main_content').width() - jQuery('.main').width()) / 2 + jQuery('.sidemenu_wrap').width();
    jQuery('.TimeLineScroll .tlContentScroll').css('height', headHeight);

}

//============= isotope function ============

//isotope effect
function isotoreEffect() {
    "use strict";
    var isotopeWrap = jQuery('.isotopeWrap ');
    isotopeWrap.find('.isotopeItem:not(.isotopeItemShow)').addClass('isotopeItemShow');
}

// isotope rows
function isotopeRow(itemWrap, item) {
    "use strict";
    var isotopeWrap = itemWrap;
    var isotopeItem = itemWrap.find('.isotopeItem:not(:hidden)');
    var i = 0;
    var positionCounter = 1;
    var items_sum = 0;
    var row_num = 1;
    var positionCounterArr = [];
    var isotope_width = isotopeWrap.width();
	
	if(isotope_width % 12 != 0){
		var x = isotope_width % 12;
		isotope_width = isotope_width - x;
		isotopeWrap.width(isotope_width);
	}

    item.removeClass('itemFirst itemLast').removeAttr('data-row-num');
    isotopeItem.filter(':visible:last').addClass('itemLast');

    itemWrap.find('.isotopeItem:not(:hidden)').each(function() {

        var item_l = jQuery(this).position().left;

        if (item_l == 0) {
            jQuery(this).addClass('itemFirst');
        }

    });

}

//scrolling
function isotopeScrolling(item) {
    "use strict";
    setTimeout(function() {
        jQuery('html,body').animate({
            scrollTop: item.offset().top + item.height() - 100
        }, 'slow');
    }, 2000);
}



//isotope Ajax Load
function isotopeAjaxLoad(itemWrap, item) {
    "use strict";
    if (item.hasClass('isotopeActive') || !itemWrap.hasClass('singeAjaxLoad')) {
        return;
    }

    var itemRow = item.data('row-num');
    var istPostID = item.data('postid');
    var navFirstID = item.parent('.isotopeWrap').find('article.isotopeItem:visible:first').data('postid');
    var navLastID = item.parent('.isotopeWrap').find('article.isotopeItem:visible:last').data('postid');
    var navPrevID = item.prevAll('article.isotopeItem:visible').data('postid');
    var navNextID = item.nextAll('article.isotopeItem:visible').data('postid');
    var isoFilter = THEMEREX_isotopeFilter.replace('.', '').replace('*', '');

    jQuery('.isotopeItem[data-postid="' + THEMEREX_isotopeMemoryID + '"]').removeClass('isotopeActive')
    jQuery('.isotopeItem[data-postid="' + istPostID + '"]').addClass('isotopeActive');

    var itemContent = jQuery('<div class="fullItemWrap isotopeItem sc_loader_show ' + isoFilter + '" data-postid="' + istPostID + '"><span class="fullItemClosed icon-cancel-line" title="Closed"></span><div class="fullContent"></div></div>');

    isotopeRemove(itemWrap, itemWrap.find('.fullItemWrap'));

    var next_before = item.nextAll('.itemFirst').eq(0);
    if (!item.hasClass('itemLast') && next_before.length > 0) {
        item.nextAll('.itemFirst:visible').eq(0).before(itemContent);
    } else {
        itemWrap.find('article.itemLast').after(itemContent);
    }

    itemWrap.isotope('destroy').isotope({
        layoutMode: 'masonry',
        itemSelector: '.isotopeItem',
        filter: THEMEREX_isotopeFilter,
        animationOptions: {
            duration: 300,
            easing: 'linear',
            queue: false
        }

    }).isotope('on', 'layoutComplete', function() {
        //function complete
    });


    //add effect
    setTimeout(function() {
        "use strict";
        isotoreEffect();
        var item_content = item.data('content');
        jQuery.get(item_content, function(response) {
            "use strict";
            var logfile = response;
            jQuery('.fullItemWrap').addClass('ajaxShow').find('.fullContent').html(logfile);
            initShortcodes(jQuery('.fullItemWrap'));
            initPostFormats();

            //nav prev
            jQuery('.isotopeNav.isoPrev').data('nav-id', (navPrevID != undefined ? navPrevID : navLastID));
            jQuery('.isotopeNav.isoNext').data('nav-id', (navNextID != undefined ? navNextID : navFirstID));

            THEMEREX_isotopeInitCounter = 0;
            initRelayoutIsotope(jQuery('.fullItemWrap .fullContent'));
        });

        THEMEREX_isotopeMemoryID = istPostID;
    }, 500);
    return false;
}


function isotopeFilterClass(selector) {
    "use strict";
    jQuery('.isotopeWrap .isotopeItem').removeClass('isotopeVisible').each(function() {
        if (selector == '*') {
            jQuery(this).addClass('isotopeVisible');
        } else {
            jQuery(selector).addClass('isotopeVisible');
        }
    });
}


//isotope remove
function isotopeRemove(itemWrap, item) {
    "use strict";
    var isotopeWrap = itemWrap;
    isotopeWrap.find('.isotopeItem[data-postid="' + THEMEREX_isotopeMemoryID + '"]').removeClass('isotopeActive')
    isotopeWrap.isotope('remove', item).isotope('layout');
}

//isotope Images Complete
function initRelayoutIsotope(content) {
    "use strict";
    if (!imagesCompleteLoad(content) && THEMEREX_isotopeInitCounter++ < 30) {
        setTimeout(function() {
            initRelayoutIsotope(content);
        }, 300);
        return;
    }
    jQuery('.isotopeWrap').isotope('layout');
}

//init Appended Isotope
function initAppendedIsotope(isotopeWrap, filters) {
    "use strict";
    if (!imagesCompleteLoad(isotopeWrap) && THEMEREX_isotopeInitCounter++ < 30) {
        setTimeout(function() {
            initAppendedIsotope(isotopeWrap, filters);
        }, 300);
        return;
    }

    var flt = isotopeWrap.siblings('.isotopeFiltr');
    var item = isotopeWrap.find('.isotopeItem:not(.isotopeItemShow)').addClass('isotopeItemShow');
    var isotopeWrapWidth = isotopeWrap.width();
	
	if(isotopeWrapWidth % 12 != 0){
		var x = isotopeWrapWidth % 12;
		isotopeWrapWidth = isotopeWrapWidth - x;
		isotopeWrap.width(isotopeWrapWidth);
	}
	
    var isotopeItemWidth = isotopeWrap.data('foliosize');

    isotopeRow(isotopeWrap, isotopeWrap.find('isotopeItem'))

    isotopeWrap.isotope('appended', item);
    for (var i in filters) {
        if (flt.find('a[data-filter=".flt_' + i + '"]').length == 0) {
            flt.find('ul').append('<li><a href="#" data-filter=".flt_' + i + '">' + filters[i] + '</a></li>');
        }
    }
}


//isotope resize
function isotopeResize(itemWrap, item) {
    "use strict";
    var isotopeWrap = itemWrap;
    var isotopeItem = item;
    var isotopeWrapFoliosize = isotopeWrap.data('foliosize');

    jQuery(window).smartresize(function() {
        "use strict";

        if (itemWrap.find('.fullItemWrap').length > 0) {
            isotopeRemove(itemWrap, itemWrap.find('.fullItemWrap'));
        }


        initRelayoutIsotope(itemWrap);
    });
}

function isotopeReadHeight() {
    "use strict";
    jQuery('.isotopeWrap').each(function() {
        var isotopeWrap = jQuery('.isotopeWrap');
        var isotopeItem = isotopeWrap.find('.isotopeItem');
        var isotopeWrapWidth = isotopeWrap.parent().width();
		
		if(isotopeWrapWidth % 12 != 0){
			var x = isotopeWrapWidth % 12;
			isotopeWrapWidth = isotopeWrapWidth - x;
			isotopeWrap.width(isotopeWrapWidth);
		}
	
        var isotopeWrapFoliosize = isotopeWrap.data('foliosize'); // columns number
		
		if(jQuery(window).width() <= 1440 && isotopeWrapFoliosize == 6) isotopeWrapFoliosize = 4;
		if(jQuery(window).width() < 960) isotopeWrapFoliosize = 3;
		if(jQuery(window).width() < 640) isotopeWrapFoliosize = 2;
		if(jQuery(window).width() < 400) isotopeWrapFoliosize = 1;
		
        isotopeItem.each(function() {
            var isotopeItemIncw = jQuery(this).data('incw');
            var isotopeItemInch = jQuery(this).data('inch');
			if(jQuery(window).width() < 400) isotopeItemIncw = 1;
            var inch = isotopeItemIncw == 2 ? 0.5 : 1;
			var width = isotopeWrapWidth / isotopeWrapFoliosize * isotopeItemIncw;
			var height = width * inch;
				
            jQuery(this).filter(':not(fullItemWrap)').css({
                'height': height,
				'width' : width
            });
        });
    });
}


//isotope Images Complete
function imagesCompleteLoad(content) {
    "use strict";
    var complete = true;
    content.find('img').each(function() {
        if (!complete) return;
        if (!jQuery(this).get(0).complete) complete = false;
    });
    return complete;
}