const selectBox = document.getElementById("change-language");
localStorage.setItem(
  "language",
  "uz"
);

selectBox.options[selectBox.selectedIndex].value =
  localStorage.getItem("language");

function changeLanguagePage(lang){
    localStorage.setItem("language", lang);
}

function getLanguagePage(){
    return localStorage.getItem("language");
}

export {changeLanguagePage, getLanguagePage}

