<template>
	<v-app>
		<v-app-bar app color="secondary" dark>
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://www.programmableweb.com/sites/default/files/TheStarWarsAPI.png"
					transition="scale-transition"
					width="40"
				/>

				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
					width="100"
				/>
			</div>

			<v-spacer></v-spacer>
		</v-app-bar>

		<v-main>
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
	name: 'App',

	components: {
		HelloWorld,
	},

	data: () => ({
		//
	}),
};
</script>
