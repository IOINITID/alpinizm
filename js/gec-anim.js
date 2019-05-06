$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animateIn = $(".animate-in");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIn.addClass("pre-animate");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIn.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animateIns = $(".animate-ins");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIns.addClass("pre-animate1");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIns.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animateIn1 = $(".animate-in1");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIn1.addClass("pre-animate");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIn1.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animateIn1s = $(".animate-in1s");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIn1s.addClass("pre-animate1");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIn1s.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animateIn2 = $(".animate-in2");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIn2.addClass("pre-animate");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIn2.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animateIn2s = $(".animate-in2s");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIn2s.addClass("pre-animate1");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIn2s.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animateIn3 = $(".animate-in3");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIn3.addClass("pre-animate");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIn3.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animateIn4 = $(".animate-in4");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIn4.addClass("pre-animate");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIn4.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animateIn5 = $(".animate-in5");
  var animateOutOffset = 1;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animateIn5.addClass("pre-animate2");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animateIn5.each(function(i, element) {
      if ($(element).offset().top + animateOutOffset < bottomScrollPosition) {
        $(element).removeClass('pre-animate2');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab = $(".animate-mirab");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab.addClass("mirab-animate1");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab2 = $(".animate-mirab2");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab2.addClass("mirab-animate2");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab2.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate2');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab3 = $(".animate-mirab3");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab3.addClass("mirab-animate3");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab3.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate3');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatestr = $(".animate-str");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatestr.addClass("str-animate");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatestr.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('str-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatestr2 = $(".animate-str2");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatestr2.addClass("str-animate2");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatestr2.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('str-animate2');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatestr3 = $(".animate-str3");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatestr3.addClass("str-animate3");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatestr3.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('str-animate3');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatestr4 = $(".animate-str4");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatestr4.addClass("str-animate4");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatestr4.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('str-animate4');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab4 = $(".animate-mirab4");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab4.addClass("mirab-animate4");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab4.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate4');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab5 = $(".animate-mirab5");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab5.addClass("mirab-animate5");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab5.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate5');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab6 = $(".animate-mirab6");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab6.addClass("mirab-animate6");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab6.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate6');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab7 = $(".animate-mirab7");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab7.addClass("mirab-animate7");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab7.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate7');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab8 = $(".animate-mirab8");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab8.addClass("mirab-animate8");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab8.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate8');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab9 = $(".animate-mirab9");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab9.addClass("mirab-animate9");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab9.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate9');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab10 = $(".animate-mirab10");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab10.addClass("mirab-animate10");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab10.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate10');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab11 = $(".animate-mirab11");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab11.addClass("mirab-animate11");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab11.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate11');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab12 = $(".animate-mirab12");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab12.addClass("mirab-animate12");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab12.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate12');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab13 = $(".animate-mirab13");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab13.addClass("mirab-animate13");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab13.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate13');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab14 = $(".animate-mirab14");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab14.addClass("mirab-animate14");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab14.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate14');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab15 = $(".animate-mirab15");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab15.addClass("mirab-animate15");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab15.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate15');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab16 = $(".animate-mirab16");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab16.addClass("mirab-animate16");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab16.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate16');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab17 = $(".animate-mirab13");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab13.addClass("mirab-animate17");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab17.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate17');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
$(function() {

  $.ajax({
    url: 'js/changelog.jsonp',
    dataType: 'jsonp'
  })

  $animatemirab18 = $(".animate-mirab18");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    $animatemirab18.addClass("mirab-animate18");
  }

  $(window).scroll(function(e) {
    var windowHeight = $(window).height(),
      windowScrollPosition = $(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    $animatemirab18.each(function(i, element) {
      if ($(element).offset().top + animateInOffset < bottomScrollPosition) {
        $(element).removeClass('mirab-animate18');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    $('body').addClass('unsupported-os');
  }
})
// Called from changelog.jsonp-------------------------------------------------------------------------------------------------------------------------------
function JsonParse(data) {
  buildReleaseNotesFromData(data);
}

function buildReleaseNotesFromData(data) {
  var releases = $("<ul class='releases'/>")
    .append($.map(data.releases, createRelease));

  $("#changelog").empty().append(releases);
}

function createRelease(r) {
  return $("<li/>")
      .append($("<div class='release-header'/>")
        .append($("<span class='release-version'/>").text(r.version))
        .append($("<span class='release-name'/>").text(r.name ? r.name : r.description))
        .append($("<span class='release-date'/>").text(r.date ? r.date : "")))
      .append($("<ul class='changes'/>")
      .append($.map(r.changes, createChange)));
}

function createChange(changeText) {
  var m = changeText.match(/^(fixed|improved|removed|added)\s*:\s*(.*)/i);

  if (m) {
    return $("<li/>")
      .append($("<div class='change-label-container'/>")
        .append($("<em/>").addClass('change-label change-' + m[1].toLowerCase()).text(m[1])))
      .append(document.createTextNode(m[2]));
  }

  return $("<li/>").text(changeText);
}

function isUsingUnsupportedOS() {
  // Windows XP is not supported
  var userAgent = window.navigator.userAgent;
  return userAgent.indexOf('Windows NT 5.1') > -1 ||
    userAgent.indexOf('Windows NT 5.2') > -1;
}

function browserSupportsCSSProperty(propertyName) {
  var elm = document.createElement('div');
  propertyName = propertyName.toLowerCase();

  if (elm.style[propertyName] != undefined)
    return true;

  var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
    domPrefixes = 'Webkit Moz ms O'.split(' ');

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
      return true;
  }

  return false;
}