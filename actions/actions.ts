"use server";

import { generateFantasyName } from "@/lib/generate-fantasy-name";

/**
 * Handle data from submitted form, get the name & make it into a fantasy version.
 * 
 * @param previousState - Default empty string
 * @param formData - Data from form submit
 * @returns - A fantasy styled name
 */
export async function submitNameForm(
  previousState: string,
  formData : FormData) {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  let firstName = formData.get("name");

  if (firstName === null || typeof firstName !== "string") {
    firstName = ""
  }
  
  const fantasyName = generateFantasyName(firstName);
  
  return fantasyName;
}