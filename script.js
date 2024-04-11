var popupImgs = document.querySelectorAll('.popupImg');
var popupOverlay = document.getElementById('popupOverlay');
var popupImgPlaceholder = document.getElementById('popupImgPlaceholder');

popupImgs.forEach(function(img) {
    img.addEventListener('click', function() {
        var popupSrc = this.getAttribute('data-popup');
        popupImgPlaceholder.src = popupSrc;
        popupOverlay.style.display = 'flex';
    });
});

function closePopup() {
    popupOverlay.style.display = 'none';
}

function moveWhite() {
	location.href = "index.html";
}document.getElementById('linkedImg').addEventListener('click', function() {
    var linkURL = this.parentNode.href;

    window.open(linkURL, '_blank');
});