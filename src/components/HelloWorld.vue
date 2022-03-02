<template>
	<v-data-table
		fixed-header
		disable-pagination="true"
		:headers="headers"
		:items="planets"
		:single-expand="singleExpand"
		:expanded.sync="expanded"
		@item-expanded="getResidentsForPlanet"
		item-key="name"
		show-expand
		class="elevation-1"
		height="80vh"
		style="padding: 15px"
	>
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>All Planets</v-toolbar-title>
			</v-toolbar>
		</template>

		<template v-slot:expanded-item="{ item }">
			<v-card
				class="mx-auto"
				max-width="300"
				style="margin: 25px; margin-left: 25px !important"
				tile
			>
				<v-list dense>
					<v-subheader>Residents</v-subheader>
					<v-list-item-group color="primary">
						<v-list-item
							v-for="resident in item.residents"
							v-bind:key="resident.name"
						>
							<v-list-item-icon>
								<v-icon v-text="'mdi-account'"></v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title
									v-text="resident.name"
								></v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-card>
		</template>
	</v-data-table>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		const planets = [];
		axios
			.get(
				'https://star-wars--dotnet-api.azurewebsites.net/Home/GetPlanetsRaw'
			)
			.then((res) => {
				this.planets = res.data.planets;
			});
		return {
			expanded: [],
			singleExpand: false,
			headers: [
				{
					text: 'Name',
					align: 'start',
					sortable: true,
					value: 'name',
				},
				{ text: 'Population', value: 'formattedPopulation' },
				{ text: 'Diameter', value: 'diameter' },
				{ text: 'Terrain', value: 'terrain' },
				{ text: 'Length Of Year', value: 'lengthOfYear' },
			],
			planets: planets,
		};
	},
	methods: {
		getResidentsForPlanet({ item }) {
			let uri =
				'https://star-wars--dotnet-api.azurewebsites.net/home/GetResidentsRaw?planetname=' +
				item.name;
			axios.get(uri).then((res) => {
				item.residents = res.data;
				console.log(item);
			});
		},
	},
};
</script>
