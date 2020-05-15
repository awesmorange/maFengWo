<template>
  <div class="page">
    <div class="container1">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            container1
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container2">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            container2
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container3">
      <el-row>    
          <el-col :span="5">
            <div class="grid-content bg-purple container3_1" >
              container3_1
            </div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content bg-purple-light container3_2">
              container3_2
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
        msg: 'Welcome to Your FirstPage'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container1 {
    width: auto;
    height: 380px;
    background-image: url('../assets/firstPage/c1_1.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation:frams 20s infinite;
  }
  @keyframes frams {
            10%{
                background-image: url("../assets/firstPage/c1_1.png");background-size: 100% 100%;background-repeat: no-repeat
            }
            30%{
                background-image: url("../assets/firstPage/c1_2.png");background-size: 100% 100%;background-repeat: no-repeat
            }
            50%{
                background-image: url("../assets/firstPage/c1_3.png");background-size: 100% 100%;background-repeat: no-repeat
            }
            70%{
                background-image: url("../assets/firstPage/c1_4.png");background-size: 100% 100%;background-repeat: no-repeat
            }
            90%{
                background-image: url("../assets/firstPage/c1_5.png");background-size: 100% 100%;background-repeat: no-repeat
            }
        }

  .container2 {
    width: auto;
    height: 70px;
    background-color: darksalmon;
  }

  .container3 {
    width: auto;
  }

  .container3_1 {
    width: auto;
    height: 600px;
    background-color: dimgrey;
  }

  .container3_2 {
    width: auto;
    height: 600px;
    background-color: goldenrod;
  }
</style>