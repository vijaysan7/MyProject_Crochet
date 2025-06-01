import db from "$lib/db.js";

export async function load() {
const all = await db.getCrochets();
  const project = all.filter(crochet => crochet.status && crochet.status !== "offen"); // Nur mit Status
  return { project };
}
