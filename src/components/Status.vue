<template>
	<div class="status">
		<div class="ticket" v-show="!toalert&&!success">
			<h1>已抽签
			<span style="color:green">{{count}}</span>/
			<span style="color:blue">{{tickets.length}}</span></h1>
			<div class="detail" v-for="ticket in tickets">{{ticket.ybname}}:{{ticket.number}}</div>
		<button class="button" id="delete-btn" @click="DeleteTicket()">删除</button>
		</div>
		<transition name="fade">
			<div class="alert" v-show="toalert">
		<br>
			<h1 v-show="success">删除成功</h1><br>
			<router-link class="button" v-show="success" id="back" to="/index">返回列表</router-link><br><br>
			<div v-show="!success">请稍等</div>
		</div>
		</transition>
	</div>
</template>
<script>
import {APIURL} from '../config'
	export default {
		name : 'status',
		data () {
			return {
				tickets:[],
				count : '',
				toalert: false,
				success:false
			}
		},
		methods : {
			countIsGet : function (array) {
				let count = 0;
				array.forEach(function (ticket) {
					console.log(ticket.isGet);
					if(ticket.isGet){
						count++;
					}
				});
				console.log(count);
				return count;
			},
			DeleteTicket : function () {
        this.$http.get(APIURL+'/ballot/delete?id='+this.$route.params.id).then(response=>{
          		if(response.data.code == 1){
          			this.toalert = true;
          			this.success = true;
          		}
        	})
      		},
		},
		
		created () {
			this.$http.get(APIURL+'/ballot'+'/getballot?id='+this.$route.params.id).then(response=>{
					console.log(response.data);
					this.tickets = response.data;
					this.count = this.countIsGet(this.tickets);
			},response=>{
				alert('获取失败');
			})
		}
	}
</script>