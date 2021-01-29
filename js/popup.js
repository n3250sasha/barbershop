/* Show/Hiden modal window login */

    var link = document.querySelector(".login-link");
    var popup = document.querySelector(".modal-login");
    var form = popup.querySelector("form");
    var close = document.querySelector(".modal-close");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");

    var isStorageSupport = true;
    var storage = "";

    /* Если логин заполненый переключить фокус на пароль */
    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

    /* Login */
    /* Открытия формы */
    link.addEventListener("click", function(evt) {
      evt.preventDefault(); /* Отменить действие по умолчанию */
      popup.classList.add("modal-show");

      /* подстваить значение в поле логин с локал сторедж */
      if (storage) {
        login.value = storage;
        /* Password focus */
        password.focus();
      } else {
        /* Login focus */
        login.focus();
      }
    });

    /* Закрытие формы при нажатии крестик на форме */
    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    /* Отправка формы */
    form.addEventListener("submit", function(evt) {
      if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth; /*  */
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", login.value);
        }
      }
    });

    /* Закрытие модальной формы при нажатии Esc */
    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
          evt.preventDefault(); /* отмена события по умолчанию */
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }

    });

    /*modal Map*/
    var mapLink = document.querySelector(".contacts-button-map");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
        }
      }
    });






    /* Як зробить так шоб все працювало */
    var mapLinkA = document.querySelector(".contacts-button-mapA");
    
    mapLinkA.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (mapPopupA.classList.contains("modal-show")) {
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
        }
      }
    });


var iframeLoad = false;

document.onreadystatechange = function () {
  if (document.querySelector("iframe").readyState == "complete") {
    iframeLoad = true;
    initApplication();
  }
}




if (iframeLoad) {
  console.log(iframeLoad);
} else {
  console.log(iframeLoad);
}



/*
if (!iframeLoad) {
  mapPopup.classList.add("visually-hiden");
} else {
	mapPopup.classList.remove("visually-hiden");
} */