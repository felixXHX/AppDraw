<template>
  <div>
    <el-row style="margin:50px 50px 0 ">
      <!-- 绘制支座1 -->
      <el-col :span="12">
        <canvas id="zhizuo1" width="100px" height="100px" style="border:1px solid #cccccc;padding-left:0px;padding-top:0px" />
      </el-col>
      <!-- 绘制支座2 -->
      <el-col :span="12">
        <canvas id="zhizuo2" width="100px" height="100px" style="border:1px solid #cccccc;padding-left:0px" />
      </el-col>
      <!-- 绘制支座3 -->
      <el-col :span="12">
        <canvas id="zhizuo3" width="100px" height="100px" style="border:1px solid #cccccc;padding-left:0px" />
      </el-col>
      <!-- 绘制支座4 -->
      <el-col :span="12">
        <canvas id="zhizuo4" width="100px" height="100px" style="border:1px solid #cccccc;padding-left:0px" />
      </el-col>
       <!-- 绘制支座5 -->
      <el-col :span="12">
        <canvas id="zhizuo5" width="100px" height="100px" style="border:1px solid #cccccc;padding-left:0px" />
      </el-col>
       <!-- 绘制梁式杆 -->
      <el-col :span="12">
        <canvas id="lianggan1" width="100px" height="100px" style="border:1px solid #cccccc;padding-left:0px" />
      </el-col>
       <!-- 绘制链杆 -->
      <el-col :span="12">
        <canvas id="liangan1" width="100px" height="100px" style="border:1px solid #cccccc;padding-left:0px" />
      </el-col> 
       <!-- 绘制单荷 -->
      <el-col :span="12">
        <canvas id="danhe1" width="100px" height="100px" style="border:1px solid #cccccc;padding-left:0px" />
      </el-col>
       <!-- 绘制铰接 -->
      <el-col :span="12">
        <canvas id="jiaojie1" width="100px" height="100px" style="border:1px solid #cccccc;padding-left:0px" />
      </el-col>

    </el-row>
  </div>
</template>

<script>
import {
  initCanvas,
  drawLine,
  drawArc
} from '@/plugins/sketchmap'
export default {
  data() {
    return {
      



      
    }
  },
  created() {
    this.$nextTick(() => {
      this.zhizuo1('zhizuo1')
      this.zhizuo2('zhizuo2')
      this.zhizuo3('zhizuo3')
      this.zhizuo4('zhizuo4')
      this.zhizuo5('zhizuo5')
      this.lianggan1('lianggan1')
      this.liangan1('liangan1')
      this.danhe1('danhe1')
      this.jiaojie1('jiaojie1')

    })
  },
  methods: {
    //drawLine(x, y, x, y, 1, '#000000')
    //drawArc(25, 25, 5, 0, 360,false, '#000000')
    zhizuo1(id) {
      const zhizuo1Canvas = document.getElementById(id)
      const ctx = zhizuo1Canvas.getContext('2d')
      const x1 = 50
      let y1 = 50
      initCanvas(ctx)
      drawLine(x1-12* 2, y1, x1+12* 2, y1, 1, '#000000')
      drawLine(x1-5* 2, y1, x1 - 10 * 2, y1 + 5 * 2, 1, '#000000')
      drawLine(x1, y1, x1 - 5 * 2, y1 + 5 * 2, 1, '#000000')
      drawLine(x1 + 5 * 2, y1, x1, y1 + 5 * 2, 1, '#000000')
      drawLine(x1 + 10 * 2, y1, x1 + 5 * 2, y1+5* 2, 1, '#000000')
    },

    zhizuo2(id) {
      const zhizuo2Canvas = document.getElementById(id)
      const ctx = zhizuo2Canvas.getContext('2d')
      const x1 = 50
      let y1 = 50
      initCanvas(ctx)
      drawLine(x1 - 12 * 2, y1 + 14, x1 + 12 * 2, y1 + 14, 1, '#000000')
      drawLine(x1 - 5 * 2, y1 + 14, x1 - 10 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1, y1 + 14, x1 - 5 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 + 5 * 2, y1 + 14, x1, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 + 10 * 2, y1 + 14, x1 + 5 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1, y1 + 14 - 3 * 2, x1, y1 + 14 - 12 * 2, 1, '#000000')

      drawArc(x1, y1 + 14 - 1 * 2 , 4, 0, 360, false, 2,'#000000')
      drawArc(x1, y1 + 14 - 14 * 2 , 4, 0, 360, false, 2,'#000000')
    },

    zhizuo3(id) {
      const zhizuo3Canvas = document.getElementById(id)
      const ctx = zhizuo3Canvas.getContext('2d')
      const x1 = 50
      let y1 = 50
      initCanvas(ctx)
      drawLine(x1 - 12 * 2, y1 + 14, x1 + 12 * 2, y1 + 14, 1, '#000000')
      drawLine(x1 - 5 * 2, y1 + 14, x1 - 10 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1, y1 + 14, x1 - 5 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 + 5 * 2, y1 + 14, x1, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 + 10 * 2, y1 + 14,x1 + 5 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 - 6 * 2, y1 + 14 - 2 * 2, x1 - 1 * 2, y1 + 14 - 14 * 2, 1, '#000000')
      drawLine(x1 + 6 * 2, y1 + 14 - 2 * 2, x1 - 1 * 2, y1 + 14 - 14 * 2, 1, '#000000')

      drawArc(x1 - 1 * 2, y1 + 14 - 14 * 2, 4, 0, 360, false, 2, '#000000')
      drawArc(x1 - 6 * 2, y1 + 14 - 1 * 2, 4, 0, 360, false, 2, '#000000')
      drawArc(x1 + 6 * 2, y1 + 14 - 1 * 2, 4, 0, 360, false, 2, '#000000')
    },

    zhizuo4(id) {
      const zhizuo4Canvas = document.getElementById(id)
      const ctx = zhizuo4Canvas.getContext('2d')
      const x1 = 50
      let y1 = 50
      initCanvas(ctx)
      drawLine(x1 - 12 * 2, y1 + 17, x1 + 12 * 2, y1 + 17, 1, '#000000')
      drawLine(x1 - 5 * 2, y1 + 17, x1 - 10 * 2, y1 + 17 + 5 * 2, 1, '#000000')
      drawLine(x1, y1 + 17, x1 - 5 * 2, y1 + 17 + 5 * 2, 1, '#000000')
      drawLine(x1 + 5 * 2, y1 + 17, x1, y1 + 17 + 5 * 2, 1, '#000000')
      drawLine(x1 + 10 * 2, y1 + 17, x1 + 5 * 2, y1 + 17 + 5 * 2, 1, '#000000')
      drawLine(x1 - 5 * 2, y1 + 17 - 3 * 2, x1 - 5 * 2, y1 + 17 - 12 * 2, 1, '#000000')
      drawLine(x1 + 4 * 2, y1 + 17 - 3 * 2, x1 + 4 * 2, y1 + 17 - 12 * 2, 1, '#000000')

      drawArc(x1 - 5 * 2, y1 + 21 - 3 * 2, 4, 0, 360, false, 2, '#000000')
      drawArc(x1 + 4 * 2, y1 + 21 - 3 * 2, 4, 0, 360, false, 2, '#000000')
      drawArc(x1 - 5 * 2, y1 + 24 - 17 * 2, 4, 0, 360, false, 2, '#000000')
      drawArc(x1 + 4 * 2, y1 + 24 - 17 *2, 4, 0, 360, false, 2, '#000000')
    },

    zhizuo5(id) {
      const zhizuo5Canvas = document.getElementById(id)
      const ctx = zhizuo5Canvas.getContext('2d')
      const x1 = 50
      let y1 = 50
      initCanvas(ctx)
      drawLine(x1 - 12 * 2, y1 + 14, x1 + 12 * 2, y1 + 14, 1, '#000000')
      drawLine(x1 - 5 * 2, y1 + 14, x1 - 10 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1, y1 + 14, x1 - 5 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 + 5 * 2, y1 + 14, x1, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 + 10 * 2, y1 + 14, x1 + 5 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      
      drawArc(x1, y1 + 14 - 1 * 2, 4, 0, 360, false, 2, '#000000')
    },
    lianggan1(id) {
      const lianggan1Canvas = document.getElementById(id)
      const ctx = lianggan1Canvas.getContext('2d')
      const x1 = 50
      let y1 = 50
      initCanvas(ctx)
      drawLine(x1 - 12 * 2, y1, x1 + 12 * 2, y1, 1, '#000000')
      /*drawLine(x1 - 5 * 2, y1 + 14, x1 - 10 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1, y1 + 14, x1 - 5 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 + 5 * 2, y1 + 14,x1, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 + 10 * 2, y1 + 14,x1 + 5 * 2, y1 + 14 + 5 * 2, 1, '#000000')
      drawLine(x1 - 6 * 2, y1 + 14 - 2 * 2,x1 - 1 * 2, y1 + 14 - 14 * 2, 1, '#000000')
      drawLine(x1 + 6 * 2, y1 + 14 - 2 * 2,x1 - 1 * 2, y1 + 14 - 14 * 2, 1, '#000000')

      drawArc(x1 - 1 * 2, y1 + 14 - 14 * 2, 4, 0, 360,false,2, '#000000')
      drawArc(x1 - 6 * 2, y1 + 14 - 1 * 2, 4, 0, 360,false, 2,'#000000')
      drawArc(x1 + 6 * 2, y1 + 14 - 1 * 2, 4, 0, 360,false,2, '#000000')
    */
    },
    liangan1(id) {
      const liangan1Canvas = document.getElementById(id)
      const ctx = liangan1Canvas.getContext('2d')
      const x1 = 50
      let y1 = 50
      initCanvas(ctx)
      drawLine(x1 - 12 * 2, y1, x1 + 12 * 2, y1, 1, '#000000')
      drawArc(x1 + 12 * 2, y1, 4, 0, 360, false, 2, '#000000')
      drawArc(x1 - 12 * 2, y1, 4, 0, 360, false, 2, '#000000')
    },

    danhe1(id) {
      const danhe1Canvas = document.getElementById(id)
      const ctx = danhe1Canvas.getContext('2d')
      const x1=50
      let y1=50
      initCanvas(ctx)
      drawLine(x1 - 12 * 2, y1, x1 + 12 * 2, y1, 1, '#000000')
      drawLine(x1 - 12 * 2, y1, x1 - 7 * 2, y1 + 4 * 2, 1, '#000000')
      drawLine(x1 - 12 * 2, y1, x1 - 7 * 2, y1 - 4 * 2, 1, '#000000')
      //drawLine(x1+5* 2, y1, x1, y1+5* 2, 1, '#000000')
      //drawLine(x1+10* 2, y1, x1+5* 2, y1+5* 2, 1, '#000000')
    },

    jiaojie1(id) {
      const jiaojie1Canvas = document.getElementById(id)
      const ctx = jiaojie1Canvas.getContext('2d')
      const x1=50
      let y1=50
      initCanvas(ctx)
      drawArc(x1, y1, 4, 0, 360,false,2, '#000000')
      }



  }
}
</script>