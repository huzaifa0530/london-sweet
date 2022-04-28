$(document).ready(function(){
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.carousel-main').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    // $(".btn_gallery").each(function(){
    //     $(this).click( function(){
    //         var filterValue = $(this).attr("data-type");
    //         console.log(filterValue)
    //         var new_s=$(".main_gallery div").data('type');
    //         console.log(new_s)
    //         if(new_s == 'one'){
    //             $(".main_gallery div").addClass('active')
    //         }
    //         else{
    //             $(".main_gallery div").removeClass('active')
    //         }
    //     })
     
    // })

    

    const portfolio = document.querySelector('.portfolio-gallery'),
    portfolioItems = portfolio.querySelectorAll('.portfolio-item'),
    portfolioCats = document.querySelectorAll('.portfolio-cats > li');
let parentWidth = portfolio.offsetWidth,
  windowWidth = window.innerWidth;

portfolioCats.forEach(cat => {
  cat.addEventListener('pointerdown', function() {
      const dataFilter = this.dataset.filter;
      const el = [];

      if (dataFilter === '*') {
          positionItems(portfolioItems);
      } else {
          portfolioItems.forEach(item => {
              if (item.dataset.filter == dataFilter) {
                  el.push(item);
              } else {
                  item.style.cssText = 'transform: scale(0.1); opacity: 0;';
              }
          });
          positionItems(el);
      }
  });
});
// Count Number of Items Per Row
function countRowsItems() {
  let rowItems = 0;
  if (windowWidth <= 768) {
      rowItems = 1;
  } else if (windowWidth <= 992) {
      rowItems = 2;
  } else {
      rowItems = 2;
  }
  return rowItems;
}
// Position each item in its place
function positionItems(items) {
  let rowItems = countRowsItems();
  let y = 0;
  let x = 0;
  let itemCount = 0;
  items.forEach((item, i) => {
      item.style.cssText = `transform: translate3d(${x*(parentWidth/rowItems)}px, ${y*220}px, 0); opacity: 1;`;
      x++;
      if (x%rowItems == 0) {
          y++;
          x = 0;
      }
      itemCount = i;
  });
  portfolio.style.height = `${Math.ceil(itemCount/rowItems)*220}px`;
}

positionItems(portfolioItems);

window.addEventListener('resize', () => {
  parentWidth = portfolio.offsetWidth;
  windowWidth = window.innerWidth;
  positionItems(portfolioItems);
});



$('.count').counterUp({
    delay: 50,
    time: 8000
  });
});
 


function firstname() {
    var first = document.getElementsByTagName("input")[0].value;
    var reg_firstname = /^[a-zA-Z]{3,}$/

    if (first == "") {

        document.getElementById("p1").innerHTML = "**Please Enter Your first Name**"
    }
    else if (reg_firstname.test(first) != true) {

        document.getElementById("p1").innerHTML = "**Please name consist of minimum three albhabet*"
    }
    else {
        document.getElementById("p1").innerHTML = "****"

    }
}






function lastname() {
    var last = document.getElementsByTagName("input")[1].value;
    var reg_last = /^[a-zA-Z]{3,}$/
    if (last == "") {

        document.getElementById("p2").innerHTML = "**Please Enter Your last Name**"
    }
    else if (reg_last.test(last) != true) {

        document.getElementById("p2").innerHTML = "**Please name consist of minimum three albhabet**"
    }
    else {

        document.getElementById("p2").innerHTML = "****"
    }
}

function emailaddress() {
    var email = document.getElementsByTagName("input")[2].value;
    var reg_email = /^[a-zA-Z]{3,}[0-9]{0,}(@)[a-zA-Z]{5,}(.com)$/
    if (email == "") {

        document.getElementById("p3").innerHTML = "**Please Enter Your email id**"
    }
    else if (reg_email.test(email) != true) {

        document.getElementById("p3").innerHTML = "**Please Correct the format of email**"
    }
    else {

        document.getElementById("p3").innerHTML = "****"
    }
}

function comment_mess() {
    var comment = document.getElementsByTagName("input")[4].value;
    var reg_comment = /^[a-zA-Z]{4,}$/

    if (comment == "") {

        document.getElementById("p4").innerHTML = "**Please Fil Out**"
    }
    else if (reg_comment.test(comment) != true) {

        document.getElementById("p4").innerHTML = "**Please Comment consist of minimum 4 Letter*"
    }
    else {
        document.getElementById("p4").innerHTML = "****"

    }
}

