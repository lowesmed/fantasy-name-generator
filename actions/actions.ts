"use server";

import { generateFantasyName } from "@/lib/generate-fantasy-name";

/**
 * Handle data from submitted form, gets a single first name only & generates a fantasy version of it.
 *
 * @param previousState - Default empty string
 * @param formData - Data from form submit
 * @returns - A fantasy styled name
 */
export async function submitNameForm(
  previousState: string,
  formData: FormData,
) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  let name = formData.get("name");

  if (name === null || typeof name !== "string") {
    name = "";
  }

  const firstName = name.split(/[\s-]+/)[0].trim();

  const fantasyName = generateFantasyName(firstName);

  return fantasyName;
}
