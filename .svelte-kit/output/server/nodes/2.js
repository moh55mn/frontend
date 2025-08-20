

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CNOOVBH4.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BYrY5Dwg.js","_app/immutable/chunks/Ck2SJaXJ.js"];
export const stylesheets = [];
export const fonts = [];
