jQuery(document).ready(function() {
	"use strict";
    initRevSlider();
});

//Revolution slider init

function initRevSlider(){
    "use strict";
     var setREVStartSize = function() {
		 "use strict";
            var tpopt = new Object();
            tpopt.startwidth = 1250;
            tpopt.startheight = 650;
            tpopt.container = jQuery('#rev_slider_1_1');
            tpopt.fullScreen = "off";
            tpopt.forceFullWidth = "off";

            tpopt.container.closest(".rev_slider_wrapper").css({
                height: tpopt.container.height()
            });
            tpopt.width = parseInt(tpopt.container.width(), 0);
            tpopt.height = parseInt(tpopt.container.height(), 0);
            tpopt.bw = tpopt.width / tpopt.startwidth;
            tpopt.bh = tpopt.height / tpopt.startheight;
            if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw;
            if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh;
            if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw;
            if (tpopt.bh > 1) {
                tpopt.bw = 1;
                tpopt.bh = 1
            }
            if (tpopt.bw > 1) {
                tpopt.bw = 1;
                tpopt.bh = 1
            }
            tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
            if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight;
            if (tpopt.fullScreen == "on") {
                tpopt.height = tpopt.bw * tpopt.startheight;
                var cow = tpopt.container.parent().width();
                var coh = jQuery(window).height();
                if (tpopt.fullScreenOffsetContainer != undefined) {
                    try {
                        var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
                        jQuery.each(offcontainers, function(e, t) {
							"use strict";
                            coh = coh - jQuery(t).outerHeight(true);
                            if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight
                        })
                    } catch (e) {}
                }
                tpopt.container.parent().height(coh);
                tpopt.container.height(coh);
                tpopt.container.closest(".rev_slider_wrapper").height(coh);
                tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
                tpopt.container.css({
                    height: "100%"
                });
                tpopt.height = coh;
            } else {
                tpopt.container.height(tpopt.height);
                tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
                tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
            }
        };

        /* CALL PLACEHOLDER */
        setREVStartSize();

        var tpj = jQuery;
        tpj.noConflict();
        var revapi1;

        tpj(document).ready(function() {
			"use strict";

            if (tpj('#rev_slider_1_1').revolution == undefined) {
                revslider_showDoubleJqueryError('#rev_slider_1_1');
            } else {
                revapi1 = tpj('#rev_slider_1_1').show().revolution({
                    dottedOverlay: "none",
                    delay: 9000,
                    startwidth: 1250,
                    startheight: 650,
                    hideThumbs: 200,

                    thumbWidth: 100,
                    thumbHeight: 50,
                    thumbAmount: 2,

                    minHeight: 200,

                    simplifyAll: "off",

                    navigationType: "bullet",
                    navigationArrows: "none",
                    navigationStyle: "round",

                    touchenabled: "on",
                    onHoverStop: "on",
                    nextSlideOnWindowFocus: "off",

                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    drag_block_vertical: false,

                    parallax: "mouse",
                    parallaxBgFreeze: "off",
                    parallaxLevels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],

                    keyboardNavigation: "off",

                    navigationHAlign: "center",
                    navigationVAlign: "bottom",
                    navigationHOffset: 0,
                    navigationVOffset: 20,

                    soloArrowLeftHalign: "left",
                    soloArrowLeftValign: "center",
                    soloArrowLeftHOffset: 20,
                    soloArrowLeftVOffset: 0,

                    soloArrowRightHalign: "right",
                    soloArrowRightValign: "center",
                    soloArrowRightHOffset: 20,
                    soloArrowRightVOffset: 0,

                    shadow: 0,
                    fullWidth: "on",
                    fullScreen: "off",

                    spinner: "spinner1",

                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,

                    shuffle: "off",

                    autoHeight: "off",
                    forceFullWidth: "off",

                    hideTimerBar: "on",
                    hideThumbsOnMobile: "off",
                    hideNavDelayOnMobile: 1500,
                    hideBulletsOnMobile: "off",
                    hideArrowsOnMobile: "off",
                    hideThumbsUnderResolution: 0,

                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    startWithSlide: 0
                });

            }
        });
		

		var ajaxRevslider = function(obj) {
		"use strict";
                var content = "";

                data = {};

                data.action = 'revslider_ajax_call_front';
                data.client_action = 'get_slider_html';
                data.token = 'e213d1b41c';
                data.type = obj.type;
                data.id = obj.id;
                data.aspectratio = obj.aspectratio;

                // SYNC AJAX REQUEST
                jQuery.ajax({
                    type: "post",
                    url: "#",
                    dataType: 'json',
                    data: data,
                    async: false,
                    success: function(ret, textStatus, XMLHttpRequest) {
						"use strict";
                        if (ret.success == true)
                            content = ret.data;
                    },
                    error: function(e) {
						"use strict";
                        console.log(e);
                    }
                });

                // FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
                return content;
            };

            // CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
            var ajaxRemoveRevslider = function(obj) {
				"use strict";
                return jQuery(obj.selector + " .rev_slider").revkill();
            };

            // EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
            var extendessential = setInterval(function() {
				"use strict";
                if (jQuery.fn.tpessential != undefined) {
                    clearInterval(extendessential);
                    if (typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
                        jQuery.fn.tpessential.defaults.ajaxTypes.push({
                            type: "revslider",
                            func: ajaxRevslider,
                            killfunc: ajaxRemoveRevslider,
                            openAnimationSpeed: 0.3
                        });
                    }
                }
            }, 30);
			
			
			var setREVStartSize = function() {
				"use strict";
		var tpopt = new Object();
		tpopt.startwidth = 1250;
		tpopt.startheight = 600;
		tpopt.container = jQuery('#rev_slider_3_1');
		tpopt.fullScreen = "off";
		tpopt.forceFullWidth = "off";

		tpopt.container.closest(".rev_slider_wrapper").css({
			height: tpopt.container.height()
		});
		tpopt.width = parseInt(tpopt.container.width(), 0);
		tpopt.height = parseInt(tpopt.container.height(), 0);
		tpopt.bw = tpopt.width / tpopt.startwidth;
		tpopt.bh = tpopt.height / tpopt.startheight;
		if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw;
		if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh;
		if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw;
		if (tpopt.bh > 1) {
			tpopt.bw = 1;
			tpopt.bh = 1
		}
		if (tpopt.bw > 1) {
			tpopt.bw = 1;
			tpopt.bh = 1
		}
		tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
		if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight;
		if (tpopt.fullScreen == "on") {
			tpopt.height = tpopt.bw * tpopt.startheight;
			var cow = tpopt.container.parent().width();
			var coh = jQuery(window).height();
			if (tpopt.fullScreenOffsetContainer != undefined) {
				try {
					var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
					jQuery.each(offcontainers, function(e, t) {
						"use strict";
						coh = coh - jQuery(t).outerHeight(true);
						if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight
					})
				} catch (e) {}
			}
			tpopt.container.parent().height(coh);
			tpopt.container.height(coh);
			tpopt.container.closest(".rev_slider_wrapper").height(coh);
			tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
			tpopt.container.css({
				height: "100%"
			});
			tpopt.height = coh;
		} else {
			tpopt.container.height(tpopt.height);
			tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
			tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
		}
	};

	/* CALL PLACEHOLDER */
	setREVStartSize();

	var tpj = jQuery;
	tpj.noConflict();
	var revapi3;

	tpj(document).ready(function() {
		"use strict";

		if (tpj('#rev_slider_3_1').revolution == undefined) {
			revslider_showDoubleJqueryError('#rev_slider_3_1');
		} else {
			revapi3 = tpj('#rev_slider_3_1').show().revolution({
				dottedOverlay: "none",
				delay: 90000,
				startwidth: 1250,
				startheight: 600,
				hideThumbs: 200,

				thumbWidth: 100,
				thumbHeight: 50,
				thumbAmount: 1,

				minHeight: 200,

				simplifyAll: "off",

				navigationType: "none",
				navigationArrows: "none",
				navigationStyle: "round",

				touchenabled: "on",
				onHoverStop: "on",
				nextSlideOnWindowFocus: "off",

				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,

				parallax: "mouse",
				parallaxBgFreeze: "off",
				parallaxLevels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],

				keyboardNavigation: "off",

				navigationHAlign: "center",
				navigationVAlign: "bottom",
				navigationHOffset: 0,
				navigationVOffset: 20,

				soloArrowLeftHalign: "left",
				soloArrowLeftValign: "center",
				soloArrowLeftHOffset: 20,
				soloArrowLeftVOffset: 0,

				soloArrowRightHalign: "right",
				soloArrowRightValign: "center",
				soloArrowRightHOffset: 20,
				soloArrowRightVOffset: 0,

				shadow: 0,
				fullWidth: "on",
				fullScreen: "off",

				spinner: "spinner1",

				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,

				shuffle: "off",

				autoHeight: "off",
				forceFullWidth: "off",

				hideThumbsOnMobile: "off",
				hideNavDelayOnMobile: 1500,
				hideBulletsOnMobile: "off",
				hideArrowsOnMobile: "off",
				hideThumbsUnderResolution: 0,

				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				startWithSlide: 0
			});
		}
	});
	
	
	
	var setREVStartSize = function() {
		"use strict";
		var tpopt = new Object();
		tpopt.startwidth = 1250;
		tpopt.startheight = 600;
		tpopt.container = jQuery('#rev_slider_4_1');
		tpopt.fullScreen = "off";
		tpopt.forceFullWidth = "off";

		tpopt.container.closest(".rev_slider_wrapper").css({
			height: tpopt.container.height()
		});
		tpopt.width = parseInt(tpopt.container.width(), 0);
		tpopt.height = parseInt(tpopt.container.height(), 0);
		tpopt.bw = tpopt.width / tpopt.startwidth;
		tpopt.bh = tpopt.height / tpopt.startheight;
		if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw;
		if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh;
		if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw;
		if (tpopt.bh > 1) {
			tpopt.bw = 1;
			tpopt.bh = 1
		}
		if (tpopt.bw > 1) {
			tpopt.bw = 1;
			tpopt.bh = 1
		}
		tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
		if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight;
		if (tpopt.fullScreen == "on") {
			tpopt.height = tpopt.bw * tpopt.startheight;
			var cow = tpopt.container.parent().width();
			var coh = jQuery(window).height();
			if (tpopt.fullScreenOffsetContainer != undefined) {
				try {
					var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
					jQuery.each(offcontainers, function(e, t) {
						"use strict";
						coh = coh - jQuery(t).outerHeight(true);
						if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight
					})
				} catch (e) {}
			}
			tpopt.container.parent().height(coh);
			tpopt.container.height(coh);
			tpopt.container.closest(".rev_slider_wrapper").height(coh);
			tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
			tpopt.container.css({
				height: "100%"
			});
			tpopt.height = coh;
		} else {
			tpopt.container.height(tpopt.height);
			tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
			tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
		}
	};

	/* CALL PLACEHOLDER */
	setREVStartSize();

	var tpj = jQuery;
	tpj.noConflict();
	var revapi4;

	tpj(document).ready(function() {
		"use strict";

		if (tpj('#rev_slider_4_1').revolution == undefined) {
			revslider_showDoubleJqueryError('#rev_slider_4_1');
		} else {
			revapi4 = tpj('#rev_slider_4_1').show().revolution({
				dottedOverlay: "none",
				delay: 9000,
				startwidth: 1250,
				startheight: 600,
				hideThumbs: 200,

				thumbWidth: 100,
				thumbHeight: 50,
				thumbAmount: 3,

				minHeight: 200,

				simplifyAll: "off",

				navigationType: "bullet",
				navigationArrows: "none",
				navigationStyle: "round",

				touchenabled: "on",
				onHoverStop: "on",
				nextSlideOnWindowFocus: "off",

				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,

				parallax: "mouse",
				parallaxBgFreeze: "off",
				parallaxLevels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],

				keyboardNavigation: "off",

				navigationHAlign: "center",
				navigationVAlign: "bottom",
				navigationHOffset: 0,
				navigationVOffset: 20,

				soloArrowLeftHalign: "left",
				soloArrowLeftValign: "center",
				soloArrowLeftHOffset: 20,
				soloArrowLeftVOffset: 0,

				soloArrowRightHalign: "right",
				soloArrowRightValign: "center",
				soloArrowRightHOffset: 20,
				soloArrowRightVOffset: 0,

				shadow: 0,
				fullWidth: "on",
				fullScreen: "off",

				spinner: "spinner1",

				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,

				shuffle: "off",

				autoHeight: "off",
				forceFullWidth: "off",

				hideThumbsOnMobile: "off",
				hideNavDelayOnMobile: 1500,
				hideBulletsOnMobile: "off",
				hideArrowsOnMobile: "off",
				hideThumbsUnderResolution: 0,

				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				startWithSlide: 0
			});

		}
	});
			
			
}