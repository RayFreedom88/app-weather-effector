export const getLocalStorage = () => {
  let searches = localStorage.getItem("cities");
  if (searches) {
    return JSON.parse(searches);
  } else {
    return [];
  }
};

export const saveLocalStorage = (string) => {
  let searches = getLocalStorage();
  if (!searches || searches.indexOf(string) > -1) {
    return false;
  }
  searches.push(string);
  localStorage.setItem("cities", JSON.stringify(searches));
  return true;
};

export const removeSearches = () => {
  localStorage.setItem("cities", JSON.stringify([]));
};
