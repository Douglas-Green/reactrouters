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
  if (prop === "director") {
    const uniqueDirectors = [];
    list.forEach(film => {
      const director = film.director.toLowerCase();
      if (!uniqueDirectors.includes(director)) {
        uniqueDirectors.push(director);
      }
    });
    return uniqueDirectors;
  } else {
    const uniqueValues = new Set();
    list.forEach(item => {
      uniqueValues.add(item[prop].toLowerCase());
    });
    return Array.from(uniqueValues);
  }
}
