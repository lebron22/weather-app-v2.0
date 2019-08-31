export const getLocalDate = (time, params) =>
  new Date(time * 1000).toLocaleString(window.navigator.userLanguage, params);
