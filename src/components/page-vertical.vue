<template>
  <div class="hello">

 			<div ref="doubleBookBlock" class="bb-bookblock" v-bookblock="options">
        <div class="bb-item">
            <div class="page">
            	<img :src="dd" alt="image01"/>
              <swiper-slide>{{ data[data.length - 1].text }}</swiper-slide>
            </div>
        </div>
        <div class="bb-item">
            	<img src="./images/demo1/2.jpg" alt="image01"/>
              <swiper-slide>{{ data[data.length - 1].text }}</swiper-slide>
        </div>
        <div class="bb-item">
            	<img src="./images/demo1/3.jpg" alt="image01"/>
              <swiper-slide>{{ data[data.length - 1].text }}</swiper-slide>
          </div>
        <div class="bb-item">
            	<img src="./images/demo1/4.jpg" alt="image01"/>
              <swiper-slide>{{ data[data.length - 1].text }}</swiper-slide>
          </div>
        <div class="bb-item">
            	<img src="./images/demo1/5.jpg" alt="image01"/>
              <swiper-slide>{{ data[data.length - 1].text }}</swiper-slide>
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
    const imgsrc = './images/demo1/1.jpg'
    return {
      dd: require('./images/demo1/1.jpg'),
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
      return this.$refs.doubleBookBlock.bookblock
    },
  },
  mounted() {
    console.log('vvv')
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
