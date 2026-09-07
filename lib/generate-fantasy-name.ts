/**
 * Creates a fantasy name based on a single first name using random suffix, prefix & titles. A short name will use a shorter suffix, a longer name uses first three letters and suffix or prefix in case name starts with vocal. All names has an added title.
 *
 * @param firstName - The name to be made into fantasy name
 * @returns {string} - A fantasy inspired name
 */
export function generateFantasyName(firstName: string): string {
  const vocals = "aeiouy";

  const suffixShort = ["in", "ar", "en", "on", "al"];
  const randomShortSuffix =
    suffixShort[Math.floor(Math.random() * suffixShort.length)];

  const suffix = ["dor", "thar", "wyn", "gorn", "mar", "ion", "riel"];
  const randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];

  const prefix = ["Ar", "Bel", "Thal", "Mor", "Kael", "Eld", "Shad", "Val"];
  const randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];

  const titles = [
    " of the North",
    " the Brave",
    " Flamehand",
    " the Protector",
    " the Bold",
    " Shadowborn",
    " the Wise",
    " Dragonslayer",
    " of the Highlands",
    " Nightbringer",
    " Doomcaller",
    " Ash-born",
    " the Wanderer",
    " the Assasin",
    " Iron Tower",
  ];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];

  if (firstName.length < 4) {
    return firstName + randomShortSuffix + randomTitle;
  }

  const firstLetter = firstName.charAt(0).toLowerCase();

  if (vocals.includes(firstLetter)) {
    return firstName.substring(0, 2) + randomSuffix + randomTitle;
  }

  return randomPrefix + firstName.substring(0, 3).toLowerCase() + randomTitle;
}
