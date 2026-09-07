/**
 * Takes a regular name and creates a fantasy version of it. By using the first three letters 
 * 
 * @param firstName - The name to make fantasy style 
 * @returns {string} - Fantasy name
 */
export function generateFantasyName(firstName: string) : string {

  const suffix = ["dor", "thar", "wyn", "gorn", "mar", "ion", "riel"];

  const prefix = ["Ar", "Bel", "Thal", "Mor", "Kael", "Eld", "Shad", "Val"];

  const firstLetters = firstName.substring(0,2);

  console.log(firstLetters)

  return "A fantasy name of: " + firstLetters + suffix[Math.floor(Math.random() * suffix.length)];
}