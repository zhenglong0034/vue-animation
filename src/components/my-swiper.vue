<template>
    <div class="my-swiper">
      <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <div class="self-audio-div">
            播放
            <audio class="self-audio" :src="item.source">
            </audio>
          </div>
          <span>{{item.text}}</span>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>

      </swiper>
    </div>
</template>
<script>
export default {
  props: {
    data: Array,
    bookblock: Object
  },
  data () {
    return {
      list: this.data,
      slideEndTouchDis: 0,
      slideBeginTouchDis: 0,
      bookblockLimit: true,
      reachend: false,
      reachbeginning: true,
      swiperOption: {
        resistanceRatio: 0,
        pagination: {
          el: '.swiper-pagination'
        },
        on: {
          reachEnd: this.reachEnd,
          reachBeginning: this.reachBeginning,
          fromEdge: this.fromEdge,
          touchStart: this.touchStart,
          touchEnd: this.touchEnd
        }
      }
    }
  },
  mounted() {
    const audio = document.querySelector('#mySwiper')
    console.log(audio)
    console.log(this.$refs.mySwiper)
    audio.addEventListener('click', (e) => {
      e.stopPropagation()
      console.log(e)
      if (e.srcElement.className === 'self-audio-div') {
        e.srcElement.children[0].play()
      }
    })
  },

  methods: {
    reachBeginning() {
      this.reachbeginning = true
      this.reachend = false
      console.log('reachbeginning', this.reachbeginning)
    },
    reachEnd() {
      this.reachend = true
      this.reachbeginning = false
      console.log('this.reachend', this.reachend)
    },
    fromEdge() {
      if (this.bookblockLimit) {
        this.reachbeginning = false
        this.reachEnd = false
      }
      console.log('this.reachbeginning', this.reachbeginning)
    },
    touchStart(e) {
      this.slideBeginTouchDis = 0
      this.slideEndTouchDis = 0
      if (this.reachbeginning) {
        this.slideBeginTouchDis = e.changedTouches[0].pageX
      }
      if (this.reachend) {
        this.slideEndTouchDis = e.changedTouches[0].pageX
      }
    },
    touchEnd(e) {
      if (this.reachbeginning) {
        if (e.changedTouches[0].pageX - this.slideBeginTouchDis > 0) {
          if(this.bookblockLimit) {
            this.bookblock.prev()
          }
        }
      }
      if (this.reachend) {
        if (e.changedTouches[0].pageX - this.slideEndTouchDis < 0) {
            this.bookblock.next()
            setTimeout(() => {
              this.$refs.mySwiper.swiper.slideTo(0, 0.5, () => {
                this.reachbeginning = true
              })
            }, 1000)
        } else if (e.changedTouches[0].pageX - this.slideEndTouchDis > 0) {
            // this.$refs.mySwiper.swiper.slidePrev()
        }
      }
    },
  }
}
</script>

<style lang="stylus">

 .my-swiper {
    position: absolute;
    top: 5.4rem;
    left: 0;
    width: 100%;
    height: 1.6rem;
    z-index: 100;
    overflow hidden
    background-color: white;
    .self-audio-div {
      width: 50px;
      height: 20px;
      // float left
      top 5px
      left 0
      position absolute
      display inline-block
      .self-audio {

      }
    }
    #mySwiper {

    }
  .swiper-pagination {
    float left
    top: 20px;
    left: 0px;
    width: 100px
    height: 20px;
    text-align: left;
  }
 }
</style>
