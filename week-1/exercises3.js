function getCombinations(value) {
    //write your code here
    var result = [];
    for (var x = 0; x < value.length; x++) {
        var string = "";
        for (var y = x; y < value.length; y++) {
            string += value[y]
            result.push(string);
        }
        string = "";
    }
    console.log(result);
}

getCombinations('cros')
getCombinations('artic')
getCombinations('darwin')