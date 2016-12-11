<template>
	<ul class="bar">
		<li><router-link class="button" id="all" to="/foo"></route-link></li>
		<li><router-link class="button" id="mine" to="/foo"></route-link></li>
	</ul>
</template>

<script>
	export default {
		name : 'bar',

	}
</script>

<style>
	ul{
		position:fixed;
		height: 60px;
		width: 100%;
		bottom: 0;
		padding: 0;
		margin: 0;
		box-shadow: #bdc1cd -1px 0px 50px;
	}
	li{
		list-style-type: none;
		float: left;
		height: 100%;
		width: 50%;
	}
	li>.button{
		display: block;
		height: 100%;
		width: 60px;
		margin-left: auto;
		margin-right: auto;
	}
	li>#all{
		background: url(../assets/logo.png) center;
		background-size: cover;
	}
	li>#all:hover{
		background: url(../assets/dinner.svg) center;
		background-size: cover;
	}
	li>#mine{
		background: url(../assets/logo.png) center;
		background-size: cover;
	}
	li>#mine:hover{
		background: url(../assets/dinner.svg) center;
		background-size: cover;
	}
</style>