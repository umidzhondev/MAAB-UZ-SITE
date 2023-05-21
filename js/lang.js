let param = {
  nowLanguage: "en",
};

function changeNowLanguage(language) {
  param.nowLanguage = language;
}
function getNowLanguage(language) {
  return param.nowLanguage
}

export {changeNowLanguage};