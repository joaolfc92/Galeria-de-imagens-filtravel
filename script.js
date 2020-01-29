function gerenciarImagens(c){
    var x,i,todasImagens;

    x=document.getElementsByClassName('img')

    for(i=0; i<x.length; i++){
        x[i].style.display ="none";
    }

    if(c=='tudo'){
        for(i=0; i<x.length; i++){
            x[i].style.display ="block";
        }
    }else{
        x=document.getElementsByClassName(c)
        for(i=0; i<x.length; i++){
            x[i].style.display ="block";
        }
    }

    var btnAtual;
    var btns = document.getElementsByClassName('btn')

    for(i=0; i<btns.length; i++){
    btns[i].addEventListener('click',function(){
        btnAtual = document.getElementsByClassName('ativo')[0];
        btnAtual.className = btnAtual.className.replace('ativo','');
        this.className+=' ativo';
        console.log(btnAtual)
    })
}

}


gerenciarImagens('tudo')