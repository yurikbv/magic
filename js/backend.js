'use strict';

(function () {
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';

  window.backend = {
    load: function (onLoad,onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = 10000;
      xhr.addEventListener('load',function () {
        if (xhr.status === 200) {
          onLoad(xhr.response)
        } else {
          onError('Статус ' + xhr.status + ' ' + xhr.statusText)
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения.')
      });

      xhr.addEventListener('timeout',function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'mc')
      });

      xhr.open('GET',URL_LOAD);
      xhr.send();
    },
    save: function (data,onLoad,onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load',function () {
        onLoad(xhr.response)
      });
      xhr.addEventListener('error',function () {
        onError('Ошибка ' + xhr.status + ' ' + xhr.statusText)
      });
      xhr.open('GET',URL_SAVE);
      xhr.send(data);
    }
  }
})();