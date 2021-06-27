<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item link>
					<v-list-item-action><v-icon>mdi-home</v-icon></v-list-item-action>
					<v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
				</v-list-item>
				<v-list-item link>
					<v-list-item-action><v-icon>mdi-email</v-icon></v-list-item-action>
					<v-list-item-content><v-list-item-title>Contact</v-list-item-title></v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>Application</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<!--  -->
			<!-- <h1>main message here</h1>-->
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({ drawer: true })
};
</script>
