const str1 = "rkqodlw" ;   
const str2 = "world";


function scramble(str1, str2) {
    const string_1 = {}
    const string_2 = {}
    const string_3 = {}

    for (const i of str2) {
        if (!str1[i]) {
           -str2[i]
        }  
        console.log(i)     
    }
    
    return console.log(str2)
    // for (const opt1 of str1) {
    //     if (string_1[opt1]) {
    //         string_1[opt1] ++
    //     } else {
    //         string_1[opt1] = 1
    //     }        
    // }
    // for (const opt2 of str2) {
    //     if (string_2[opt2]) {
    //         string_2[opt2] ++
    //     } else {
    //         string_2[opt2] = 1
    //     }        
    // }

    // for (const opt3 in string_1) {
    //     if (string_2.value[opt3]) {
    //         string_3[opt3]++
    //     }else{
    //         string_3[opt3]=1
    //     }
    //     console.log(string_2[opt3])
    // }
  }

  console.log(scramble('mueeig', 'iguee'))