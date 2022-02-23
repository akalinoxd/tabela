var array = [$('.array')];
var quadros = array[0];

for(var c = 0; c < $(quadros).length; c++){
    var valores = $(quadros[c]).text();
    var numbers = parseInt(valores);
    
    if(!!numbers == false){
        numbers = valores;
    }

    if(typeof(numbers) == 'string'){
        $(quadros[c]).css('background', 'black');
        console.log(valores)
        if(valores === ''){
            console.log('sim')
        }
    }
}