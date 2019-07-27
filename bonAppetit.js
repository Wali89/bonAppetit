function bonAppetit(bill, k, b) {

    let total = function(arr) {
        return arr.reduce(function (a, b) {
            return a + b
        }, 0);
    }
    var actualCharge = b - ((total(bill) - bill[k]) / 2);

    if (actualCharge === 0) {
        console.log('Bon Appetit');
    } else {
        console.log(actualCharge)
    }
}
