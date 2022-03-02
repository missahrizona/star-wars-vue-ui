const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: ['vuetify'],
	devServer: {
		public: 'https://star-wars-vue-ui-g6hn2.ondigitalocean.app',
	},
});
