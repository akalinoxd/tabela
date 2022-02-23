var array = [$('.array')];
var quadros = array[0];

for(var c = 0; c <= $(quadros).length; c++){

    if(c == 0 || c % 2 == 0){
        c++;
    }
    $(quadros[c]).css('background', 'blue');
}
