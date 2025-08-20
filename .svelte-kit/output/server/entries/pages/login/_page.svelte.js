import { a as attr } from "../../../chunks/attributes.js";
import { P as pop, N as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
function _page($$payload, $$props) {
  push();
  let email = "", password = "";
  $$payload.out.push(`<h1>Login</h1> <form><input${attr("value", email)} placeholder="E-Mail"/> <input type="password"${attr("value", password)} placeholder="Passwort"/> <button>Login</button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></form>`);
  pop();
}
export {
  _page as default
};
