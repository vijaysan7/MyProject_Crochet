import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let crochet = {

    name: data.get("name"),
    level: data.get("level"),
    time: data.get("time"),
    material: data.get("material"),
    hook_size: data.get("hook_size"),
    pattern: data.get("pattern"),
    status: data.get("status"),
    };

    await db.createCrochet(crochet);
    return { success: true };
  },
};
