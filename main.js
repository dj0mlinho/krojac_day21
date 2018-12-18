$('dd').hide()
$('dl').on('click', 'dt', function () {
  $(this).next().siblings('dd').slideUp()
  $(this).next().slideDown()
})

$('dt').on('click', function () {})