<template>
    <div class="header">
        <div class="bar">
            <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
                <el-menu-item index="1"> 
                    <img src="../../assets/logo.png" alt="" style="width: 100px;height: 40px;">
                </el-menu-item>
                <el-menu-item index="/FirstPage">首页</el-menu-item>
                <el-menu-item index="2">目的地</el-menu-item>
                <el-menu-item index="3">去旅行</el-menu-item>
                <el-submenu index="4">
                    <template slot="title">目的地</template>
                    <el-menu-item index="4-1">自由行</el-menu-item>
                    <el-menu-item index="4-2">跟团游</el-menu-item>
                    <el-menu-item index="4-3">当地游</el-menu-item>
                    <el-menu-item index="4-4">游轮</el-menu-item>
                    <el-menu-item index="4-5">签证</el-menu-item>
                </el-submenu>
                <el-menu-item index="5">机票火车票</el-menu-item>
                <el-menu-item index="6">订酒店</el-menu-item>
                <el-submenu index="7">
                    <template slot="title">社区</template>
                    <el-menu-item index="7-1">问答</el-menu-item>
                    <el-menu-item index="7-2">马蜂窝周边</el-menu-item>
                    <el-menu-item index="7-3">蜂首俱乐部</el-menu-item>
                    <el-menu-item index="7-4">结伴</el-menu-item>
                </el-submenu>
                <el-menu-item index="8">APP</el-menu-item>
                <el-menu-item index="9">logo2</el-menu-item>
                <div class="other">
                    <span>微博</span>
                    <span>qq</span>
                    <span>微信</span>
                    <span>
                        <router-link to="/Login">登录</router-link>
                    </span>
                    <span>
                        <router-link to="/Register">注册</router-link>
                    </span>
                    
                </div>
            </el-menu>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>