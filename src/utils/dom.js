/**
 * Given a HTMLElement, returns the list of its level 1 childrens.
 * 
 * @param {HTMLElement} el
 * @returns {HTMLCollection}
 */
export const getImmediateChildrens = el => {
  const childrens = [];
  for (let i = 0; i < el.children.length; i++) {
    childrens.push(el.children[i]);
  }
  return childrens;
}
