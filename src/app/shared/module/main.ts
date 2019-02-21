import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
@Injectable()
export class Main {
    constructor(){}
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