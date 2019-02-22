import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
@Injectable()
export class Main {
    constructor(){}
    loadVideoSlider(){
        function _defineProperty(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }
        $(function() {
            const logger =()=> {
              
                var a = !1;
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (a = !0, 1024 == window.innerWidth && 1366 == window.innerHeight && (a = !1));
                var r = $(".video-slider"),
                    i = (r.find(".embed-player"), r.find(".slide-image")),
                    o = 0,
                    n = $(".foto-slider"),
                    s = null;
                n.on("init", function(t, a) {
                    s = a.slideCount, $(".counter-text").find(".totImg").text(s), e(a.currentSlide)
                }), n.on("beforeChange", function(t, a, r, i) {
                    e(i)
                });
               
                r.on("lazyLoaded", function(e, t, a, n) {
                    ++o === i.length && (i.addClass("show"),  (<any>r).slick("slickPlay"))
                });
                function e(e) {
                    var t;
                    (<any>$("#" + e)).slick((t = {
                        infinite: !1,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        speed: 500,
                        focusOnSelect: !0
                    }, _defineProperty(t, "infinite", !0), _defineProperty(t, "autoplay", !1), _defineProperty(t, "prevArrow", "#prev" + e), _defineProperty(t, "nextArrow", "#next" + e), _defineProperty(t, "responsive", [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: !0,
                            autoplay: !1,
                            prevArrow: "#prev" + e,
                            nextArrow: "#next" + e
                        }
                    }, {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: !1,
                            prevArrow: "#prev" + e,
                            nextArrow: "#next" + e
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: !1,
                            prevArrow: "#prev" + e,
                            nextArrow: "#next" + e
                        }
                    }, {
                        breakpoint: 360,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: !1,
                            prevArrow: "#prev" + e,
                            nextArrow: "#next" + e
                        }
                    }]), t))
                }

                function t(e) {
                    var t = $("#" + e),
                        a = t.parent();
                    a.on("mouseenter", function() {
                        $(".arrowNavigation5").addClass("openArrow")
                    }), a.on("mouseleave", function() {
                        $(".arrowNavigation5").removeClass("openArrow")
                    })
                }
                var k = document.querySelector("#header"),
                    S = document.querySelector(".cloned"),
                    A = document.querySelector("nav.navigasi");
                document.querySelector("div.layerSearch");
                k ? screen.width > 768 && function() {
                        window.addEventListener("scroll", function() {
                            this.pageYOffset > 280 ? (S.classList.add("clonedShow"), $(".layerSearch").css({
                                position: "fixed",
                                top: S.clientHeight
                            })) : (S.classList.remove("clonedShow"), $(".layerSearch").css({
                                position: "absolute"
                            }))
                        })
                    }() : (screen.width,  (<any>A).style.top = "0px"), screen.width > 768 &&  (<any>$(".itemListAnalisis, .sprite-ico li, .berita-terpopuler ul li, .opini ul li, .itemList")).matchHeight(),
                    function() {
                        function e(e) {
                            var t;
                            (<any>$("#" + e)).slick(( (<any>t) = {
                                infinite: !1,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                speed: 500,
                                focusOnSelect: !0
                            }, _defineProperty(t, "infinite", !0), _defineProperty(t, "autoplay", !1), _defineProperty(t, "prevArrow", "#prev" + e), _defineProperty(t, "nextArrow", "#next" + e), _defineProperty(t, "responsive", [{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: !0,
                                    autoplay: !1,
                                    prevArrow: "#prev" + e,
                                    nextArrow: "#next" + e
                                }
                            }, {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    autoplay: !1,
                                    prevArrow: "#prev" + e,
                                    nextArrow: "#next" + e
                                }
                            }, {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    autoplay: !1,
                                    prevArrow: "#prev" + e,
                                    nextArrow: "#next" + e
                                }
                            }, {
                                breakpoint: 360,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    autoplay: !1,
                                    prevArrow: "#prev" + e,
                                    nextArrow: "#next" + e
                                }
                            }]), t))
                        }
        
                        function t(e) {
                            var t = $("#" + e),
                                a = t.parent();
                            a.on("mouseenter", function() {
                                $(".arrowNavigation5").addClass("openArrow")
                            }), a.on("mouseleave", function() {
                                $(".arrowNavigation5").removeClass("openArrow")
                            })
                        }
                        (<any>r).slick({
                            autoplaySpeed: 1e4,
                            lazyLoad: "progressive",
                            speed: 600,
                            prevArrow: ".prevArrowNav4",
                            nextArrow: ".nextArrowNav4",
                            cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)"
                        }), e("slideSection-telaah"), e("slideSection-analisis"), e("slideSection-databoks"), document.querySelector(".arrowNavigation5"), t("slideSection-telaah"), t("slideSection-analisis"), t("slideSection-databoks")
                    }()
            }
            logger()
        });
    }
    loadInputProps(){
        (<any>$("#tgl-lahir")).datetimepicker({
            format: "DD-MM-YYYY"
        }),  (<any>$("#fromDate")).datetimepicker({
            format: "DD-MM-YYYY"
        }),  (<any>$("#toDate")).datetimepicker({
            format: "DD-MM-YYYY",
            useCurrent: !1
        }),  (<any>$("#fromDate")).on("dp.change", function(e) {
            (<any>$("#toDate")).data("DateTimePicker").minDate(e.date)
        }),  (<any>$("#toDate")).on("dp.change", function(e) {
            (<any>$("#fromDate")).data("DateTimePicker").maxDate(e.date)
        }),  (<any>$(".chooseSchedule")).click(function() {
            (<any>$("#sevenDay")).is(":checked") || $("#thirdTeen").is(":checked") ? $("#fromDate, #toDate").prop("disabled", !0) : $("#fromDate, #toDate").removeAttr("disabled")
        }),  (<any>$('button[type="reset"]')).on("click", function() {
            (<any>$("#fromDate, #toDate")).removeAttr("disabled")
        })
    }
    loadSliderProps(){
        (<any>$(".berita-slide")).slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: !1,
            prevArrow: ".prevArrowNav",
            nextArrow: ".nextArrowNav",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: !0,
                    autoplay: !1,
                    prevArrow: ".prevArrowNav",
                    nextArrow: ".nextArrowNav"
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: !1,
                    prevArrow: ".prevArrowNav",
                    nextArrow: ".nextArrowNav"
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !1,
                    prevArrow: ".prevArrowNav",
                    nextArrow: ".nextArrowNav"
                }
            }]
        })
    }
    loadSlider(){
        (<any> $(".ekonoGraphics")).slick({
            infinite: !1,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: !1,
            prevArrow: ".prevArrowNav2",
            nextArrow: ".nextArrowNav2",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: !0,
                    autoplay: !1,
                    prevArrow: ".prevArrowNav2",
                    nextArrow: ".nextArrowNav2"
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !1,
                    prevArrow: ".prevArrowNav2",
                    nextArrow: ".nextArrowNav2"
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !1,
                    prevArrow: ".prevArrowNav2",
                    nextArrow: ".nextArrowNav2"
                }
            }, {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !1,
                    prevArrow: ".prevArrowNav2",
                    nextArrow: ".nextArrowNav2"
                }
            }]
          })
    }
}