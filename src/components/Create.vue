<template>
		<div id="create">
		<div class="ticket" id="ticket">
			<h1>创建抽签</h1>
			<form action="#" @submit.prevent="Create()" method="get">
				<label for="num">人数:</label><label class="danger" v-show="!verify.num">人数不可为空</label><br>
				<input type="number" name="num" v-model="ticket.num"><br>
				<label for="detail">简介:</label><label class="danger" v-show="!verify.detail">简介不可为空</label><br>
				<input type="text" name="detail" v-model="ticket.detail"><br>
				<label for="deadline">截至日期:</label><label class="danger" v-show="!verify.deadline">截止日期不可为空</label><br>
				<input type="number" name="deadline" v-model="ticket.deadline"><br><br>
				<button class="button" id="submit">确定</button>
			</form>
		</div>
		<div class="alert" v-show="toalert">
		<br>
			<h1>是否要继续发布</h1><br>
			<button class="button" id="back" onclick="window.location='/'">返回列表</button><br><br>
			<button class="button" id="continue" onclick="window.location='/create'">继续发布</button>
		</div>
		</div>
</template>

<script>
import {APIURL} from '../config';
	export default {
		name : 'create',
		data () {
			return {
				ticket : {
					num : '',
					detail : '',
					deadline : ''
				},
				verify : {
					num : true,
					detail : true,
					deadline : true
				},
				toalert : false
			}
		},
		methods : {
			Create : function () {
				if(this.Check()){
					let query = '?num='+this.ticket.num+'&detail='+this.ticket.detail+'&deadline='+this.ticket.deadline;
					this.$http.get(APIURL+'/ballot'+query).then(response=>{
						if(response.data.id){
							this.toalert = true;
						}
					})
				};
				
			},
			Check : function () {
				if(!this.ticket.num){this.verify.num=false}
				if(!this.ticket.detail){this.verify.detail=false}
				if(!this.ticket.deadline){this.verify.deadline=false}
				if(this.ticket.num&&this.ticket.detail&&this.ticket.deadline){
					return true;
				}else{
					return false;
				}
			}
		}
	}
</script>

<style>
	#create{
		height: 100%;
		width: 100%;
	}
	.button{
		margin: 0 auto;
	  	transition: all .3s;
		height:50px;
		width:60%;
		background:blue;
		border-radius: 30px;
		color:white;
  		font-family: 'Microsoft YaHei UI';
		font-size: 30px;
		box-shadow: gainsboro 5px 5px 30px;
		outline: none;
		border:none;
	}
	.button:hover{
		background: red;
	}
	form{
		height: 300px;
		width: 80%;
		margin: 0 auto;
	}
	form>input{
		height: 35px;
		width: 100%;
		border-radius: 5px;
		border: 2px solid blue;
		box-shadow: gainsboro 1px 1px 10px;
		outline: none;

	}
	form>input:focus{
		height: 35px;
		border-radius: 5px;
		border: 2px solid blue;
		box-shadow: gainsboro 1px 1px 10px;
	}
	#back:hover{
		background: blue;
	}
	#continue{
		border:2px solid blue;
		background: white;
		color: blue;
	}
	label{
		float: left;
	}
	.danger{
		color: red;
	}
	.alert{
		z-index: 10;
		position: fixed;
		height: 300px;
		width: 80%;
		margin: auto;
		top: 20%;
		left: 0;
		right: 0;
		box-shadow: gainsboro 1px 1px 40px;
		border-radius: 5px;
		background: white;
	}
</style>
