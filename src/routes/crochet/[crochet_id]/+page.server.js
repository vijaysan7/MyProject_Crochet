import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const crochet = await db.getCrochet(params.crochet_id);
  return { crochet };
}

export const actions = {
  updateStatus: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");
    const status = data.get("status");

    await db.updateCrochet({ _id: id, status });
    return { success: true };
  },
  
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteCrochet(data.get("id"));
    redirect(303, "/crochet");
  },
};
