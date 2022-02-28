// get rid of group with too much -, spaces and underlines
const cleanStr = (str) => (str ? str.replace(/[\s-_]+/g, "-") : false);

module.exports = {
  /**
   * asdQwe or AsdQwe ---> asd-qwe
   *
   * @param str
   * @returns {*}
   */
  kebabCase: (str) => {
    if (str) {
      str = str.trim().replace(/[A-Z]+/g, (found, offset) => {
        return (offset > 0 ? "-" : "") + found.toLowerCase();
      });

      return cleanStr(str);
    }
  },

  /**
   * asd-qwe ---> asdQwe
   *
   * @param str
   * @returns {*}
   */
  camelCase: (str) => {
    str = cleanStr(str);

    if (str) {
      return str.replace(/-[a-zA-Z]/g, (found, offset) => {
        return found.slice(1).toUpperCase();
      });
    }
  },

  /**
   * asd-qwe ---> AsdQwe
   *
   * @param str
   * @returns {string}
   */
  pascalCase: (str) => {
    str = cleanStr(str);
    str = str ? str.slice(0, 1).toUpperCase() + str.slice(1) : false;
    if (str) {
      return str.replace(/-[a-zA-Z]/g, (found, offset) => {
        return found.slice(1).toUpperCase();
      });
    }
  },
};
