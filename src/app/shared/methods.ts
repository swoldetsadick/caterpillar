
/**********************************************************************************************************************/
/************************************************** Exported Methods **************************************************/
/**********************************************************************************************************************/

/**
 * This method used in combination with the filter lambda function filters array too return array with only the unique
 * values as per example below.
 * ```ts
 * var a = ['a', 1, 'a', 2, '1', true, true, false];
 * var unique = a.filter(onlyUnique);
 * console.log(unique);
 * ```
 * @param value Value currently observed in filtered array.
 * @param index Index of currently observed element in filtered array.
 * @param self A version of the array to be filtered.
 * @returns {{boolean}} True if value at index is unique False if not.
 */
const onlyUnique = ( value: string | number | boolean | null | undefined, index: number, self: Array<string | number | boolean | null | undefined> ) => {
  return self.indexOf( value ) === index;
};

/**********************************************************************************************************************/
/*************************************************** Support Methods **************************************************/
/**********************************************************************************************************************/

/**********************************************************************************************************************/
/*************************************************** Export Methods ***************************************************/
/**********************************************************************************************************************/

module.exports = { onlyUnique };
