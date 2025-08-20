export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.BzJcAXgq.js",app:"_app/immutable/entry/app.BCwH_D1b.js",imports:["_app/immutable/entry/start.BzJcAXgq.js","_app/immutable/chunks/C_YsT66M.js","_app/immutable/chunks/CEqdB-KQ.js","_app/immutable/chunks/Ck2SJaXJ.js","_app/immutable/chunks/HJkSM5js.js","_app/immutable/entry/app.BCwH_D1b.js","_app/immutable/chunks/Ck2SJaXJ.js","_app/immutable/chunks/CEqdB-KQ.js","_app/immutable/chunks/HJkSM5js.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BB0Sk2HG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base_path = "";
