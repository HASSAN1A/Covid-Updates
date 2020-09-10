// Business Logic
// constructors
function commonsigns(price, fever, drycough, tirednes){
    this.fever = fever[0];
    this.drycough = drycough[0];
    this.tirednes = tirednes[0];
    this.price = price[0];
}

// calculate common
commonsigns.prototype.getTotal = function() {
    var total = 0;
    if (this.fever.checked) {
        total = total + this.price;
    }
    if (this.drycough.checked) {
        total = total + this.price;
    }
    if (this.tiredness.checked) {
        total = total + this.price;
    }
    return total;
}

// less common
//constructors
function lesscommon(price, aches, sorethroat, diarrhoea, conjunctivitis, headache, lossoftaste, rashonskin) {
    this.aches = aches[0];
    this.sorethroat = sorethroat[0];
    this.diarrhoea = diarrhoea[0];
    this.conjunctivitis = conjunctivitis[0];
    this.headache = headache[0];
    this.lossoftaste = lossoftaste[0];
    this.rashonskin = rashonskin[0];
    this.price = price[0];
}

// calculate less common
lesscommon.prototype.getTotal = function() {
    var total = 0;
    if (this.aches.checked) {
        total = total + this.price;
    }
    if (this.sorethroat.checked) {
        total = total + this.price;
    }
    if (this.diarrhoea.checked) {
        total = total + this.price;
    }
    if (this.conjunctivitis.checked) {
        total = total + this.price;
    }
    if (this.headache.checked) {
        total = total + this.price;
    }
    if (this.lossoftaste.checked){
        total = total + this.price;
    }
    if (this.rashonskin.checked){
        total = total + this.price;
    }
}

// serious signs
// constructors
function serious(price, shortnessofbreath, chestpains, movement) {
    this.shortnessofbreath = shortnessofbreath[0];
    this.chestpains = chestpains[0];
    this.movement = movement[0];
    this.price = price[0];
}

// calculate serious
serious.prototype.getTotal = function() {
    var total = 0;
    if (this.shortnessofbreath.checked){
        total = total + this.price;
    }
    if (this.chestpains.checked){
        total = total + this.price;
    }
    if (this.movement.checked){
        total = total + this.price;
    }
}


// User Interface logic
$(document).ready(function () {
    $(".pic1").click(function () {
        $(".pic1").hide(100);
        $(".p1").show(100);
    })
    $(".p1").click(function () {
        $(".p1").hide(100);
        $(".pic1").show(100);
    });
});
$(document).ready(function () {
    $(".pic2").click(function () {
        $(".pic2").hide(100);
        $(".p2").show(100);
    })
    $(".p2").click(function () {
        $(".p2").hide(100);

        $(".pic2").show(100);
    });
});
$(document).ready(function () {
    $(".pic3").click(function () {
        $(".pic3").hide(100);
        $(".p3").show(100);
    })
    $(".p3").click(function () {
        $(".p3").hide(100);
        $(".pic3").show(100);
    });
    $(document).ready(function () {
        $(".pic4").click(function () {
            $(".pic4").hide(100);
            $(".p4").show(100);
        })
        $(".p4").click(function () {
            $(".p4").hide(100);
            $(".pic4").show(100);

        });
    });


});

$(document).ready(function(){
    $('li').click(function(){
        var input = $(this).find('input');
        if (input.length > 0) {
            if (input[0].checked) {
                input[0].checked = false
            } else {
                input[0].checked = true
            };
        }
    });
    $("#submit").click(function (event) {
        var clients = $("#name").value;
        alert (' Dear ' + clients + ' your form has been received and details are being reviewed you will receive feedback shortly ')
        event.preventDefault();
        
    });
});

$(document).ready(function(){
    function commonpoints() {
      var  commonsignstotal = 2,
      fever = ('#fever'),
      drycough = ('#drycough'),
      tiredness = ('#tiredness');
      var mostcommonsigns = new commonsigns(commonsignstotal, fever, drycough, tiredness);
      var firsttotal = mostcommonsigns.getTotal();


        // corona points total
        var totalcovidpoints = firsttotal + secondtotal + thirdtotal;
        return totalCovidPoints
    }


    // less common signs
        function lesscommonpoints() {
        var lesspoints = 11,
        aches = $('#aches'),
        sorethroat = $('#sore'),
        diarrhoea = $('#diarrhoea'),
        conjunctivitis = $('#conjunctivitis'),
        headache = $('#headache'),
        lossoftaste = $('#lossoftaste'),
        rashonskin = $('#rashonskin');
        var secondsigns = new lesscommon(lesspoints, aches, sorethroat, diarrhoea, conjunctivitis, headache, lossoftaste, rashonskin);
        var secondtotal = secondsigns.getTotal();

            // corona points total
        var totalcovidpoints = firsttotal + secondtotal + thirdtotal;
        return totalCovidPoints
    }

    

    //serious
    function seriouspoints() {
        var serioussigns = 22,
        shortnessofbreath = $('#shortness'),
        chestpains = $('#chestpains'),
        movement = $('#movement');
        var thirdsigns = new serious(serioussigns, shortnessofbreath, chestpains, movement);
        var thirdtotal = thirdsigns.getTotal();


            // corona points total
        var totalcovidpoints = firsttotal + secondtotal + thirdtotal;
        return totalCovidPoints 
    }

    function calcTotal(){
        var allofit = total + seriouspoints() + lesscommonpoints() + commonpoints();
    }

    // corona points total
    var totalPoints = calcTotal();
    $('#total').text(totalPoints);
    var totalcovidpoints = firsttotal + secondtotal + thirdtotal;
    return totalCovidPoints
})
