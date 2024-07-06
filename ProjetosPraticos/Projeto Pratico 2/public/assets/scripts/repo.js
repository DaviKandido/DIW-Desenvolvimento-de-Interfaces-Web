document.addEventListener("DOMContentLoaded", () => {

    const divcontemDescricao = document.querySelector(".contemDescricao");
    const divcontemDataDeCriacao = document.querySelector(".contemDataDeCriacao");
    const divcontemLinguagens = document.querySelector(".contemLinguagens");
    const divcontemlinkDeAcesso = document.querySelector(".contemlinkDeAcesso");
    const h3titulo = document.querySelector("#Titulo");


//-------------------------------- FUNÇÕES JSONServer -----------------------------------//


const dataURLApiGIT = "https://api.github.com/users/DaviKandido";

const params = new URLSearchParams(location.search);
const id = params.get("id");


function ReadData(functionCallBack, URL,  objeto){
    fetch(`${URL}/${objeto}`, {
        method: 'GET'
      })
    .then(response => response.json())
    .then(data => {

        let dado = data.find(elem => elem.id == id)

        functionCallBack(dado);
        console.log(dado);
        return dado;
    })
    .catch(error => {
        console.error('Erro:', error);
      });
}


    //-------------------------------- Funções de Criação de Conteudo -----------------------------------//

    
    function CriaTitulo(data){

        if(data.name){

            h3titulo.innerHTML = `<h3 id="Titulo">${data.name}</h3>`;
        }

    }

    function CriaDescricao(data){

        if(data.description){

             divcontemDescricao.innerHTML = `<p style="font-size: 20px;" id="seção1" class="NomePerfil">Descrição</p>
                                             <p>${data.description}</p>`
        }

    }

    function CriaDataDeCriação(data){

        if(data.created_at){

            divcontemDataDeCriacao.innerHTML = `<p style="font-size: 20px;" id="seção2" class="NomePerfil">Data de criação</p>
                                                <p>${data.created_at.substring(0, 10)}</p>`
        }

    }

    function CriaLinguagens(data){

        if(data.language){
            
            divcontemLinguagens.innerHTML = `<p style="font-size: 20px;" id="seção3" class="NomePerfil">linguagens</p>
                                             <p>${data.language}</p>`
        }

    }

    function CriaLinkDeAcesso(data){

        
        if(data.html_url){
        
            divcontemlinkDeAcesso.innerHTML = `<p style="font-size: 20px;" id="seção4" class="NomePerfil">link de acesso</p>
                                                <p><a href="${data.html_url}">${data.html_url}<a/></p>`
        }

    }

   //--------------------------------Chama Funções-----------------------------------//

   ReadData(CriaTitulo, dataURLApiGIT, "repos");
   ReadData(CriaDescricao, dataURLApiGIT, "repos");
   ReadData(CriaDataDeCriação, dataURLApiGIT, "repos");
   ReadData(CriaLinguagens, dataURLApiGIT, "repos");
   ReadData(CriaLinkDeAcesso, dataURLApiGIT, "repos");


})