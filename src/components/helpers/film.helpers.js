/** @format */
/**
 *
 * @param {array} list an array of films
 * @param {string} director the name of the director
 * @returns
 */
export function filterFilmsByDirector(list, director) {
  return list.filter(film => film.director === director);
}

export function getListOf(list, prop) {
  const uniqueValues = [];
  list.forEach(item => {
    if (!uniqueValues.includes(item[prop])) {
      uniqueValues.push(item[prop]);
    }
  });
  return uniqueValues;
}
