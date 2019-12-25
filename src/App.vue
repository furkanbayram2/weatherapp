<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<router-view/>
			</div>
		</div>
	</div>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:300&display=swap');
html {
	height: 100%;
}

body {
	font-family: 'Raleway', sans-serif;
	font-weight: 300 !important;
	color: #ffffff !important;
	min-height: 100%;
	background-image: linear-gradient(238deg, rgb(70, 61, 115), rgb(91, 0, 106) 50%, rgb(197, 51, 210), rgb(86, 25, 122));
	background-repeat: no-repeat;
}
</style>