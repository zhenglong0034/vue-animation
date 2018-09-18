<template>
  <div class="hello">

 			<div ref="bookBlock" class="bb-bookblock" v-bookblock="options">
        <div class="bb-item">
            <div class="page">
            	<img src="./images/demo1/1.jpg" alt="image01"/>
            </div>
            <div class="page">
            	<img src="./images/demo1/2.jpg" alt="image02"/>
            </div>
            <!-- 翻页的时候 显示在下面的文字 -->
            <div class="bb-div">{{ data[data.length - 1].text }}</div>
        </div>
        <div class="bb-item">
            <div class="page">
            	<img src="./images/demo1/3.jpg" alt="image03"/>
              <div style="width: 200%; overflow: hidden;">{{ data[data.length - 1].text }}</div>
            </div>
            <div class="bb-div">{{ data[data.length - 1].text }}</div>
            <div class="page">
            	<img src="./images/demo1/4.jpg" alt="image04"/>
            </div>
        </div>
        <div class="bb-item">
            <div class="page">
            	<img src="./images/demo1/5.jpg" alt="image05"/>
            </div>
            <div class="page">
            	<img src="./images/demo1/1.jpg" alt="image01"/>
            </div>
            <div class="bb-div">{{ data[data.length - 1].text }}</div>
          </div>
        <div class="bb-item">
            <div class="page">
            	<img src="./images/demo1/1.jpg" alt="image01"/>
            </div>
            <div class="page">
            	<img src="./images/demo1/2.jpg" alt="image02"/>
            </div>
            <div class="bb-div">{{ data[data.length - 1].text }}</div>
          </div>
        <my-swiper :data="data" :bookblock="newbookblock"></my-swiper>
			</div>

</div>
</template>

<script>
import { data } from '../data/data'
import mySwiper from './my-swiper.vue'

export default {
  data: function () {
    return {
      options: {
        speed: 1000,
        shadowSides : 0.8,
				shadowFlip : 0.7,
        hasCover: false,
        // onEndFlip: this.onEndFlip,
      },
      newbookblock: null,
      data: data,
    }
  },
  components: {
    mySwiper
  },
  computed: {
    bookblock: function () {
      return this.$refs.bookBlock.bookblock
    },
  },
  mounted() {
    this.newbookblock = this.bookblock
  },
  // methods: {
  //   onEndFlip(page, limit) {
  //     this.bookblockLimit = limit
  //   },
  // }
}
</script>
<style lang="stylus">
  @import './css.styl'
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
