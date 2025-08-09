
$('.proj-img').hover(() => {
  $('.proj-title').addClass('hover');
}, () => {
  $('.proj-title').removeClass('hover');
})

const changeTainer = (el) => {
  $('.contentainer').removeClass('active');

  if ($(el).hasClass('made')) {
    $('.contentainer.made').addClass('active');

    $('.nav-link.learned').addClass('two');
    $('.nav-link.hobbied').addClass('three');
  } else if ($(el).hasClass('learned')) {
    $('.contentainer.learned').addClass('active');

    $('.nav-link.made').addClass('two');
    $('.nav-link.hobbied').addClass('three');
  } else if ($(el).hasClass('hobbied')) {
    $('.contentainer.hobbied').addClass('active');

    $('.nav-link.made').addClass('two');
    $('.nav-link.learned').addClass('three');
  }
}

$('.nav-link').on("click", (e) => {

  if ($(e.target).hasClass('active')) {
    return;
  } else {
    $('.nav-link').removeClass('active two three');

    $(e.target).addClass('active');
    changeTainer(e.target);
  }
})


$(document).on('scroll', () => {
  let navOffset = $('.nav').offset();
  console.log(window.scrollY, navOffset.top);
  if (window.scrollY >= navOffset.top) {
    $('.nav').addClass('nav-fix');
  } else {
    $('.nav').removeClass('nav-fix');
  }
})