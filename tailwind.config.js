module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				primary: "#24336A",
				label: "#6E84D2",
			},
			backgroundImage: {
				"site-offline": "url('/images/site_offline.jpg')",
			},
		},
	},
};
