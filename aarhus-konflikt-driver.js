(function() {
    if (typeof (SeptimaD) == 'undefined') {
        SeptimaD = {};
        var checkReady = function(callback) {
            if (window.jQuery) {
                callback();
            } else {
                window.setTimeout(function() {
                    checkReady(callback);
                }, 100);
            }
        };
        checkReady(function() {
            
		var scriptlocation = 'http://widget.cdn.septima.dk/1.13.12/';

            var lib = decodeURIComponent((new RegExp('[?|&]widget-debug=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||'widget_.js';

            jQuery.ajax({
                url: scriptlocation + lib,
                dataType: "script",
                cache: true,
                success: function() {
                    SeptimaLoad.scriptlocation = scriptlocation;
                    jQuery('[data-widget]').each(function () {

                        SeptimaLoad.init({
                            id: jQuery(this).attr('data-widget'),
                            url: '' + jQuery(this).attr('data-widget') + '.json',
                            dataType: 'json'
                        });

                    });
                }
            });
        });
    }
})();
