//tono 2 hari 1x
//anton, 4 hari 1x
//budi, 5 hari 1x

var month = 31;
var opening = 7;
var visitor1 = "Tono";
var visitor2 = "Anton";
var visitor3 = "Budi";

for (var i = opening; i <= month; i++) {
    if(i%5 === 0){
        console.log("Tanggal " + i + " : Tempat Fitness Tutup");
    }else if(i%2 === 1){
        console.log("Tanggal " + i + " : " +visitor1);
    }else if(i%4 === 1){
        console.log("Tanggal " + i + " : " + visitor1 + " , " + visitor2);
    }
    else{
        console.log("Tanggal " + i + " :");
    }
}

// for (var j = opening; j <= month; j+=2){
//     console.log("Tanggal " + j + " : " + visitor1);
//     for (var k = opening; k <= month; k+=4){
//         console.log("Tanggal " + j + " : " + visitor1, visitor2);
//     }
// }