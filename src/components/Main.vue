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
			this.vq = this.$route.path;
			let vq = this.$route.query.verify_request;
			this.$http.get('http://localhost:8086/ballot/getallballot?vq='+vq).then(
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