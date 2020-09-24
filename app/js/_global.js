// Global
app.global = {
    init: function() {
        // Load all global functions here
        app.global.hellowWord();
        // app.global.slideMainMenuMobile();
        // app.global.initCalendar();
        // app.global.sliderDown();
    },
    hellowWord: function() {
        console.log("Hello word , generated js work !! ");
    },
    /* allows to see the main menu in mobile  */
    slideMainMenuMobile: function() {
        var mobileMenu = $(".header_main-menu.mobile-display");
        var btnClose = $(".header_btn-close icon-close-white");
        var btnBurger = $(".header_btn-burger");
        if (!mobileMenu.length) {
            return;
        }
        btnBurger.click(function() {
            mobileMenu.toggleClass("show");
            event.stopPropagation();
        });

        mobileMenu.click(function() {
            //event.stopPropagation();
        });

        btnClose.click(function() {
            mobileMenu.removeClass("show");
            console.log("test");
            // event.stopPropagation();
        });

        // remove the menu if click outside
        $(document).click(function() {
            mobileMenu.removeClass("show");
        });
    },

    /* initialize a calendar in the date fields that contain the '.calendar' class  */
    initCalendar: function() {
        var optional_config = {};
        $(".calendar").flatpickr(optional_config);
    },

    /* slider-down : component to slid down content  */
    sliderDown: function() {
        var sliderDownTitle = $(".slider-down_title");
        if (!sliderDownTitle.length) {
            return;
        }
        sliderDownTitle.click(function(evt) {
            $(evt.currentTarget)
                .parents(".slider-down")
                .toggleClass("slider-down--close");
        });
    }
};

// Run the global stuff
app.global.init();