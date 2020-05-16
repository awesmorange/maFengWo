<template>
  <div class="page">
    <!-- 轮播背景区域 -->
    <div class="container1">
      <el-row>
        <el-col :span="24">
          <div class="content1">
            <div class="title">
              {{title}}
            </div>
            <div class="right">
                <img src="../../src/assets/img/firstPage/c1_1.png" alt="">
                <img src="../../src/assets/img/firstPage/c1_2.png" alt="">
                <img src="../../src/assets/img/firstPage/c1_3.png" alt="">
                <img src="../../src/assets/img/firstPage/c1_4.png" alt="">
                <img src="../../src/assets/img/firstPage/c1_5.png" alt="">
            </div>
            <div class="bottom">
              <div class="search">
                <div class="radio">
                  <el-radio-group v-model="radio">
                    <el-radio :label="3">全部</el-radio>
                    <el-radio :label="6">酒店</el-radio>
                    <el-radio :label="9">目的地</el-radio>
                    <el-radio :label="12">去旅行</el-radio>
                    <el-radio :label="15">机票</el-radio>
                  </el-radio-group>
                </div>
                <div class="search_input">
                  <div class="input">
                    <el-input v-model="input" placeholder="搜目的地/攻略/酒店/旅行特价"></el-input>
                  </div>
                  <div class="icon">
                    <img src="../../src/assets/img/firstPage/search.png" alt="">
                  </div>
                </div>
              </div>
              <div class="author">
                <span>图片来自塞尔维亚，此目的地共收藏了50000张塞尔维亚图片。本片由XXX荣誉出品！</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 间隔小方格 -->
    <div class="container2">
      <el-row>
        <el-col :span="24">
          <div class="content2">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 内容展示区域 -->
    <div class="container3">
      <el-row>
        <!-- 左侧内容 -->
        <el-col :span="5">
          <div class="container3_1">
            <div class="notice">
              安全提示
            </div>
            <div class="tourist">
              旅行家专栏
            </div>
            <div class="recommend">
              旅游攻略推荐
            </div>
            <div class="lasted">
              最新活动
            </div>
            <div class="lab">
              未知旅行实验室
            </div>
            <div class="join">
              加入马蜂窝
            </div>
            <div class="news">
              马蜂窝旅游网最新资讯
            </div>
          </div>
        </el-col>
        <!-- 右侧内容 -->
        <el-col :span="19">
          <div class="container3_2">
            <div class="ad">
              广告
            </div>
            <div class="bar3_2">
              小导航栏
            </div>
            <div class="content3_2">
              内容展示区域
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'FirstPage',
        data() {
            return {
                title: "this is a title",
                radio: 3,
                input: ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('../../src/assets/css/firstPage.css');
</style>