<template>
	<div class=" ticket get">
		<h1>{{title}}</h1>
		<h1 class="num" v-show="show">{{ticketNum}}</h1>
		<h1 v-show="!show">{{message}}</h1>
	</div>
</template>

<script>
import {APIURL} from '../config'
	export default {
		name:'get',
		data () {
			return {
				title : '您抽到的号码为：',
				ticketNum:'请稍后...',
				message : '',
				show : true
			}
		},
		created () {
			if(!sessionStorage.getItem('get_id')){
				let id = this.$route.query.id;
				sessionStorage.setItem('get_id',id);
			}
			let id = this.$route.query.id;
				this.$http.get(APIURL+'/ballot/doballot?id='+id).then(response=>{
					console.log(response.data);
					if(response.data.code==-1){
					this.ticketNum = response.data.message;
					this.title = "对不起";
					if (response.data.message != '没有登陆') {
						console.log('没有登陆');
						sessionStorage.removeItem('get_id');
					}else{
						this.ticketNum = '需要易班认证';
					}
					}else{
						this.ticketNum = response.data.number;
						sessionStorage.removeItem('get_id');
					}
				},response=>{
					this.show = false;
					this.message = "没有找到所对应的抽签";
					this.title = "对不起";
					sessionStorage.removeItem('get_id');
				})
			
			
		}
	}
</script>

<style>
	.get{
		height: auto;
		margin: 100px auto ;
		border: 0px solid;
		border-radius: 5px;
		box-shadow: gainsboro 1px 1px 40px;
	}
	.get>.num{
		font-size: 100px;
	}
</style>