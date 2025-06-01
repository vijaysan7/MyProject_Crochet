import db from "$lib/db.js";
import { ObjectId } from "mongodb";
import { redirect } from "@sveltejs/kit";

export async function load() {
  // Nur Projekte ohne Status anzeigen
  const all = await db.getCrochets();
  const inspo = all.filter(crochet => crochet.status === "offen");
  return { inspo };
}

export const actions = {
  addToCollection: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");
    if (id) {
      await db.updateCrochet({ _id: new ObjectId(id), status: "in Bearbeitung" });
    }
    throw redirect(303, "/crochet");
  }
};