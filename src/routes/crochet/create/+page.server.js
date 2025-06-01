import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let crochet = {

    name: data.get("name"),
    pattern: data.get("pattern"),
    material: data.get("material"),
    hook_size: data.get("hook_size"),
    time: data.get("time"),
    schwierigkeitslevel: data.get("schwierigkeitslevel"),
    status: data.get("status"),
    };

    await db.createCrochet(crochet);
    return { success: true };
  },
};
