// Object literal behaving as multi-dictionary
var arrLang = {
    "eng": {
        "_home": "HOME",
        "_movies": "MOVIES",
        "_shows": "TVshows",
        "_cartoon": "CARTOONS",
        "_sign": "Sign In"
    },
    "geo": {
      "_home": "მთავარი",
      "_movies": "ფილმები",
      "_shows": "სერიალები",
      "_cartoon": "მულტფილმები",
      "_sign": "შესვლა"
    }
};

$(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });

