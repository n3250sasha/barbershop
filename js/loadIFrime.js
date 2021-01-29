
var mapPopup = document.querySelector(".modal-map");
var iframeLoad = false;

document.querySelector('iframe').onload = function() {
    iframeLoad = true;
};

if (!iframeLoad) {
  mapPopup.classList.add("visually-hiden");
} else {
	mapPopup.classList.remove("visually-hiden");
}






