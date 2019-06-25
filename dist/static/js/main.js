
$(function () {
  var ratio = window.innerWidth / window.innerHeight
  if (ratio < 1) {
    document.body.classList.add('min')
  }
  // 第一个项目默认展开
  var first = $('.drop-down-item .panel:first')
  $('.drop-down-item:first').addClass('active')
  first.height(first.children().length * 58 + 'px')

  $('.drop-down-item .title-bar').click(function(e) {
    var eventTarget = $(e.target)
    console.log(eventTarget)
    // console.log(eventTarget.parent()[0].classList.contains('active'))
    if (eventTarget.parent()[0].classList.contains('active')) {
      // console.log(eventTarget.parent())
      var panel = eventTarget.siblings('.panel')
      eventTarget.parent().removeClass('active')
      panel.height(0)
    } else {
      eventTarget.parent().addClass('active')
      var panel = eventTarget.siblings('.panel')
      panel.height(panel.children().length * 58 + 'px')
    }
  })

  // 轮播图
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: 3000,
    loop: true,
    // 禁用鼠标点击
    simulateTouch: false,
    calculateHeight: true,
    useCSS3Transforms: true,
    slidesPerView: 3,
    //其他设置
    tdFlow: {
      rotate : 0,
      stretch : ratio < 1 ? 120 : 80,
      depth: ratio < 1 ? 240 : 80,
      modifier : 1,
      roundLengths : true
    }
  })
  $('.last').click(function(e) {
    mySwiper.swipePrev()
  })
  $('.next').click(function(e) {
    mySwiper.swipeNext()
  })
  // 轮播图空区域点击事件
  $('.swiper-container').click(function(e) {
    var value = (e.pageX / document.body.offsetWidth) * 2
    if (value < 1) {
      mySwiper.swipePrev()
    } else {
      mySwiper.swipeNext()
    }
  })
})
