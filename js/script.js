$(document).ready(function() {
    $("a[href^='#']").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });


    $(window).on("load", function () {
        setTimeout(() => {
            $('#preloader').css('display', 'none');
        }, 800);
         loadData();
    });

 function loadData() {
        $.ajax({
            url: "Json/data.json",
            type: 'GET',
            dataType: 'json',
            success: function (data) { 
                 var htmlStr="";
                myJsonData = data.data;
                myJsonData.map(project => {
                    htmlStr+= `
                           <div data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" id="project"  className="">
                                <img src=${project.img} alt=${project.name}/>
                                <h4  className=" p-3">${project.name}</h4>
                                <button><a href=${project.link} 
                                target="_blank">Show Code
                            </a></button>
                            </div>`;
                })
                $('.projects').html(htmlStr);
            },
            error: function () {
                console.log("There was an error with data...");

            }
        });
    }
});

$(function() {
    $('.btn-group-fab').on('click', function() {
        $('.btn-group-fab').toggleClass('active');
    });
});
