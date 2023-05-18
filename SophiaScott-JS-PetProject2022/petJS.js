//sophia JS, pet project

jQuery(window).on("load", function () {
    // school hours
    $('#SHW').click(schW);
    var shw = document.getElementById("SHW");

    function schW() {
        var SHW = prompt("How many hours do you have school on Wednsday?");
        shw.innerHTML = (+SHW);
        console.log(shw.innerHTML);
        if (shw.innerHTML === "NaN") {
            shw.style.background = "red";
            return false;
        }
    }


    $('#SHT').click(schT);
    var sht = document.getElementById("SHT");

    function schT() {
        var SHT = prompt("How many hours do you have school on Thursday?");
        sht.innerHTML = (+SHT);
        if (sht.innerHTML === "NaN") {
            sht.style.background = "red";
            return false;
        }
    }
    $('#SHF').click(schF);
    var shf = document.getElementById("SHF");

    function schF() {
        var SHF = prompt("How many hours do you have school on Friday?");
        shf.innerHTML = (+SHF);
        if (shf.innerHTML === "NaN") {
            shf.style.background = "red";
            return false;
        }
    }

    // work hours
    $('#WHW').click(worW);
    var whw = document.getElementById("WHW");

    function worW() {
        var WHW = prompt("How many hours do you have work on Wednsday?");
        whw.innerHTML = (+WHW);
        if (whw.innerHTML === "NaN") {
            whw.style.background = "red";
            return false;
        }
    }
    $('#WHT').click(worT);
    var wht = document.getElementById("WHT");

    function worT() {
        var WHT = prompt("How many hours do you have work on Thursday?");
        wht.innerHTML = (+WHT);
        if (wht.innerHTML === "NaN") {
            wht.style.background = "red";
            return false;
        }
    }
    $('#WHF').click(worF);
    var whf = document.getElementById("WHF");

    function worF() {
        var WHF = prompt("How many hours do you have work on Friday?");
        whf.innerHTML = (+WHF);
        if (whf.innerHTML === "NaN") {
            whf.style.background = "red";
            return false;
        }
    }

    // all othe activitys hours
    $('#OtherW').click(OtherWed);
    var wother = document.getElementById("OtherW");

    function OtherWed() {
        var OtherW = prompt("Do you have any additional activitys on Wednsday? How many hours will it take?", "7 hours will be added for sleep");
        wother.innerHTML = (+OtherW + 7);
        if (wother.innerHTML === "NaN") {
            wother.style.background = "red";
            return false;
        }
    }
    $('#OtherT').click(OtherThu);
    var tother = document.getElementById("OtherT");

    function OtherThu() {
        var OtherT = prompt("Do you have any additional activitys on Thursday? How many hours will it take?", "7 hours will be added for sleep");
        tother.innerHTML = (+OtherT + 7);
        if (tother.innerHTML === "NaN") {
            tother.style.background = "red";
            return false;
        }
    }
    $('#OtherF').click(OtherFri);
    var fother = document.getElementById("OtherF");

    function OtherFri() {
        var OtherF = prompt("Do you have any additional activitys on Friday? How many hours will it take?", "7 hours will be added for sleep");
        fother.innerHTML = (+OtherF + 7);
        if (fother.innerHTML === "NaN") {
            fother.style.background = "red";
            return false;
        }
    }

    // hours left in the end

    var LeftW = document.getElementById("LeftW");
    $('#LeftW').mouseenter(LeftWed);
    function LeftWed() {
        var wedTotal = +shw.innerHTML + +whw.innerHTML + +wother.innerHTML;
        var twofour = 24 - wedTotal;
        console.log(wedTotal);
        LeftW.innerHTML = twofour;
    }

    var LeftT = document.getElementById("LeftT");
    $('#LeftT').mouseenter(LeftThu);
    function LeftThu() {
        var thuTotal = +sht.innerHTML + +wht.innerHTML + +tother.innerHTML;
        var two_four = 24 - thuTotal;
        console.log(thuTotal);
        LeftT.innerHTML = two_four;
    }

    var LeftF = document.getElementById("LeftF");
    $('#LeftF').mouseenter(LeftFri);
    function LeftFri() {
        var friTotal = +shf.innerHTML + +whf.innerHTML + +fother.innerHTML;
        var twofour = 24 - friTotal;
        console.log(friTotal);
        LeftF.innerHTML = twofour;
    }
});
