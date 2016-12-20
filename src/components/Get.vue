<template>
	<div class="get">
		<h1>您抽到的号码为：</h1>
		<h1 class="num">{{ticketNum}}</h1>
	</div>
</template>

<script>
import {APIURL} from '../config'
	export default {
		name:'get',
		data () {
			return {
				ticketNum:'请稍后...'
			}
		},
		created () {
			let id = this.$route.query.id;
			this.$http.get(APIURL+'/ballot/doballot?id='+id).then(response=>{
				this.ticketNum = response.data.id;
			},response=>{
				alert('没有找到所对应的抽签')
			})
		}
	}
</script>

<style>
	.get{
		height: 500px;
		margin: 100px auto ;
		border: 0px solid;
		border-radius: 5px;
		box-shadow: gainsboro 1px 1px 40px;
	}
	.get>.num{
		font-size: 150px;
	}
</style>