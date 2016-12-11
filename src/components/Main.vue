<template>
	<div id="main">
		{{string}}{{vq}}
	</div>
</template>

<script>
	export default {
		name:'main',
		data () {
			return {
				string:'123',
				vq:'vq'
			}
		},
		mounted() {
			this.$http.get('http://localhost:8086/ballot/getallballot').then(
				(response)=>{
					console.log(response);
					this.string = response.data;
				},(response)=>{
					console.log(response.data);
				}
				)
		}
	}
</script>

<style>
	
</style>