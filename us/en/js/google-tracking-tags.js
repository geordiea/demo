$(document).ready(function () {
    
/* Replaced with GTM - March 2017
    // Any element with this class must have a data-tag-google="" inline to be tracked
    function googleDelay() {
        $(".tagged").click(triggerEvent);
    }
    setTimeout(googleDelay, 800);
*/

    lang = 'ENU'; // ENC, FRC, ENU (RedDot language variant value)
    langType = '';

    if (lang == 'ENC') 
        langType = ' - EN';
        
    else if (lang == 'FRC') 
        langType = ' - FR';

    else if (lang == 'ENU') 
        langType = ' - US';
    
    //  For multiple tracking pixels, use the data-tracking-pixels attribute with URLS separated by commas, like so:
    //  <a data-tracking-pixels="https://company1.com/path/to/pixel.png, https://company2.org/another/pixel.aspx"></a>
    
    $('[data-tracking-pixels]').on('click.tracking', function() {
      var pixels = (this.getAttribute('data-tracking-pixels') || '').split(',');
      pixels.forEach(function(pixel) {
        if (pixel) {
          var iframe = document.createElement('iframe');
          iframe.style.position = 'absolute';
          iframe.style.width = '1px';
          iframe.style.height = '1px';
          iframe.style.top = '-99999px';
          iframe.style.left = '-99999px';
          iframe.src = pixel.replace(/^\s+|\s+$/g, '');
          document.body.appendChild(iframe);
        }
      });
    });
    
});//end docReady



function triggerEvent(event) {
    return; // Replaced with GTM - March 2017
    
    var googleCategory = this.getAttribute('data-google-category') || '';
    var googleAction = this.getAttribute('data-google-action') || '';
    var googleLabel = this.getAttribute('data-google-label') || '';

    var lang = 'ENU', langType = '';
    
    if ('ENC' == lang) langType = ' - EN';
    else if ('FRC' == lang)  langType = ' - FR';
    else if ('ENU' == lang) langType = ' - US';

    //GA Event 
    if(googleCategory &&  googleAction &&  googleLabel)
        _gaq.push(['_trackEvent', googleCategory + langType, googleAction, googleLabel]);


    // For floodlight iframe tracking
    var tagSrc = this.getAttribute('data-floodlight') || '';
    
    if (tagSrc) {
        var iframe = $(document.createElement('iframe'))
        .attr('src', tagSrc)
        .css({ position: 'absolute', width: '1px', height: '1px', left: '-1337px', top: '-1337px' })
        .appendTo('body');
    }

}

function triggerCustomEvent(data) {
    return; // Replaced with GTM - March 2017
    
    if (Object(data) !== data) data = {};
    if (data.category && data.action && data.label) {
        
        var lang = 'ENU', langType = '';
    
        if ('ENC' == lang) langType = ' - EN';
        else if ('FRC' == lang)  langType = ' - FR';
        else if ('ENU' == lang) langType = ' - US';
            
        _gaq.push(['_trackEvent', data.category + langType, data.action, data.label]);
    }
    
}


// Google Analytics Tracking
// Define environment
var stagingAnalyticsAccount = 'UA-27807194-3';
var productionAnalyticsAccount = 'UA-27807194-1';

// Set the environment (staging or production)
var activeAnalyticsAccount = (!!~window.location.hostname.indexOf('staging') || !!~window.location.hostname.indexOf('dev') || !!~window.location.hostname.indexOf('qa') || !!~window.location.hostname.indexOf('uat')) ? stagingAnalyticsAccount : productionAnalyticsAccount;

// Tell Google Analytics which environment this is
var _gaq = _gaq || [];
_gaq.push(['_setAccount', activeAnalyticsAccount ]);
    
_gaq.push(['_setLocalRemoteServerMode']);
_gaq.push(['_setLocalGifPath', 'http://www.timhortons.com']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();