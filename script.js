

let x = []
for (var index = 0; index < 10; index++) {
        x.push(`Push - ${index + 1} == ` + index);      
}
for (var i = 0; i < x.length; i++) {
    document.write(x[i] + " ")
    document.write(typeof x[i] + "<br>")
    if (i%2 != 0) {
        document.write("<br>")
    }
}
