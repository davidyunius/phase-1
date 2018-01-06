//Logic Spiralizer
//testcase untuk 2 dimensi

/*
let array_masalah = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

function polaSpiral(array_masalah)
// output yang diharapakan => [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
{
    var i = 0;
    var x = 0;
    var y = 0;
    var m = array_masalah[x].length;
    var n = array_masalah[y].length;


    var result = [];


    while (x < m && y < n) {
        for (i = y; i < n; i++) {
            result.push(array_masalah[x][i]);
        }
        x++;

        for (i = x; i < n; i++) {
            result.push(array_masalah[i][n - 1]);
        }
        n--;

        if (x < m) {
            for (i = n - 1; i >= y; i--) {
                result.push(array_masalah[m - 1][i]);
            }
            m--;
        }

        if (y < n) {
            for (i = m - 1; i >= x; i--) {
                result.push(array_masalah[i][y])
            }
            y++;
        }
    }
    console.log(result);
}
polaSpiral(array_masalah);
*/

//testcase untuk 5 dimensi

let array_masalah = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
]

function polaSpiral(array_masalah)
// output yang diharapkan => [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
{
    var i = 0;
    var x = 0;
    var y = 0;
    var k = array_masalah[0].length;
    var l = array_masalah.length;
    var result = [];


    while (x < k && y < l) {
        for (i = y; i < k; i++) {
            result.push(array_masalah[x][i])
        }
        x++;
        for (i = x; i < l; i++) {
            result.push(array_masalah[i][l]);
        }
        k--;
        for (i = k - 1; i >= y; i--) {
            result.push(array_masalah[l - 1][i]);
        }
        l--;
        for (i = l - 1; i >= x; i--) {
            result.push(array_masalah[i][y]);
        }
        y++;
    }
    console.log(result);
}
polaSpiral(array_masalah);