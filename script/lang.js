// Object literal behaving as multi-dictionary
var arrLang = {
    'eng': {
        'home': 'HOME',
        'movies': 'MOVIES',
        'shows': 'TVshows',
        'cartoon': 'CARTOONS',
        'sign': 'Sign In'
    },
    'geo': {
      'home': 'მთავარი',
      'movies': 'ფილმები',
      'shows': 'სერიალები',
      'cartoon': 'მულტფილმები',
      'sign': 'შესვლა'
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

