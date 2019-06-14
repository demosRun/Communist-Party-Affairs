
$(function () {
  // 第一个项目默认展开
  var first = $('.drop-down-item .panel:first')
  $('.drop-down-item:first').addClass('active')
  first.height(first.children().length * 58 + 'px')

  $('.drop-down-item .title-bar').click(function(e) {
    $('.drop-down-item').removeClass('active')
    var eventTarget = $(e.target)
    // 标记为激活
    eventTarget.parent().addClass('active')
    $('.drop-down-item .panel').height(0)
    var panel = eventTarget.siblings('.panel')
    panel.height(panel.children().length * 58 + 'px')
  })
})
