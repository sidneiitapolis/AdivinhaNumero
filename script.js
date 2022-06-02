

    
    let numero=Math.floor(Math.random() * 1000)
    let inputJog=document.getElementById('idInput')
    let botao=document.getElementById('botaook')
    let aviso=document.getElementById('msg')
    document.getElementById('jogar').hidden=true
   
    let jogadorN =0
    let erros=0
    inputJog.disabled=true

    
 
    function peganumero(n){
        let num =document.getElementById('idInput').value
        document.getElementById('idInput').value=num+n
        jogadorN=document.getElementById('idInput').value
        
        
    }

    //inputJog.addEventListener('keyup',(e)=>{
       // let tecla=e.keyCode
       // if(tecla==13){
            //jogadorN=document.getElementById('idInput').value
            
    botao.addEventListener('click',()=>{

     console.log(numero)
    console.log(jogadorN)
    console.log(erros)
       

                if(jogadorN>numero){
                    
                    aviso.textContent=('Escolha um numero menor')
                    
                    limpa()}
                if(jogadorN<numero){
                    
                    aviso.textContent=('Escolha um numero maior')
                    limpa()}
                if(jogadorN==numero){
                    limpa()
                    document.getElementById('jogar').hidden=false
                    document.getElementById('botaook').hidden=true
                    
                    inputJog.disabled=true;
                    aviso.textContent=(`Vc acertou o numero que é ${numero} em ${erros} tentativas`)
                    numero=Math.floor(Math.random() * 1000)
                    erros=0
                    
                    }
          
        
                })   

    function jogar(){
        location.reload();
        document.getElementById('jogar').hidden=true
        document.getElementById('botaook').hidden=false
        document.getElementsByClassName('numero').disabled = false;
    }

    function apagar(){
        document.getElementById('idInput').value=''
        jogadorN=0
       
    }

    function limpa(){
        erros+=1
        inputJog.value=''
        inputJog.focus()
    }



