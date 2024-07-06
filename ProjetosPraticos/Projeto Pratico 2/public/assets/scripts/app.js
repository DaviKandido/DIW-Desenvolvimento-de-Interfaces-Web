document.addEventListener("DOMContentLoaded", () => {

    const divcontemRepositorio = document.querySelector(".contemRepositorio");
    const divconteudoSugeridos = document.querySelector(".contemConteudoSugeridos");
    const divContemColegas = document.querySelector(".contemColegas");
    const divcontemBio = document.querySelector(".contemBio");



      //-------------------------------- FUNÇÕES JSONServer -----------------------------------//

   const dataURLJSONServer = "http://localhost:3000"; //Caso for usar o NODE use essa URL e no terminal de: npm start, e comente a outra URL

    //const dataURLJSONServer = "https://e7d94e95-e58c-47ed-bd20-80e0dbf66e1c-00-34htdzkpnbhsy.spock.replit.dev"; //Trocar conforme o fork do JSonServe com o JSON em db/db.json


    const dataURLApiGIT = "https://api.github.com/users/DaviKandido";

    const gitImg = "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw"


    function ReadDataURL(functionCallBack, URL){
      fetch(`${URL}`, {
          method: 'GET'
        })
      .then(response => response.json())
      .then(data => {
          functionCallBack(data);
          console.log(data);
          return data;
      })
      .catch(error => {
          console.error('Erro:', error);
        });
  }

    function ReadData(functionCallBack, URL,  objeto){
        fetch(`${URL}/${objeto}`, {
            method: 'GET'
          })
        .then(response => response.json())
        .then(data => {
            functionCallBack(data);
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Erro:', error);
          });
    }


      //-------------------------------- END - FUNÇÕES JSONServer -----------------------------------//

      //-------------------------------- Funções de Criação de Conteudo -----------------------------------//

      function CriaBio(data){

    
        //${data.bio} -> Usado para pegar a bio no github (Não foi usado devido ao tamanho da bio do Git Ser limitada, 
        // optei por escrever uma propria no entanto poderia ser facilemnete adaptada dessa forma)
        //${data.SocialAccounts -> Não esta liberado na API do git tive que incluir manualmente, no entanto facilemete poderia ser
        //adaptada conforme o template abaixo

        divcontemBio.innerHTML += `
                <img src="${data.avatar_url}" alt="Imagem Perfil" class="ImagemPerfil">   

                <p style="font-size: 20px;" class="NomePerfil">${data.name}</p>

                <h6>_____________________________________________________</h6> 

                <p>Oi, Sou o Davi, tenho 18 anos, fui aluno do Colégio Professor Roberto Herbster Gusmão, articipei do Projeto Altas Habilidades em tecnologias digitais,
                   no qual através deste projeto tive o aperfeiçoamento de diversas habilidades compreendidas como essenciais para aqueles que algum dia farão a diferença não só para o mercado de trabalho como no mundo, tive a oportunidade 
                   de participar de diversas Olimpíadas Nacionais de conhecimento nos quais em sua maioria fui medalhista, como na Olimpíada Nacional de Ciências (ONC), 2 vezes medalhista na Olimpíada Brasileira de Astronomia e Astronáutica 
                   (OBA), na Olimpíada Brasileira de Robótica (OBR), e na Olimpíada Brasileira do Saber (OBS). Dentro do projeto Altas Habilidades tive a oportunidade de participar da Carga Connect, campeonato de robótica este o qual em conjunto 
                   com a minha equipe fomos campeões do 1º Lugar, sendo nossa primeira vez na competição, enfrentamos diversas dificuldades que foram desde a programação do Robô ao desenvolvimento de projetos que envolviam a solução de problemas 
                   sociais, como também os próprios Core Valores (Valores sociais nos quais tivemos destaque em nossa equipe), Participei em todos os meus anos do ensino médio em projetos de Iniciação Científica, no qual cheguei a submeter e apresentar 
                   trabalhos em diversas feiras como FEBRAT e FEBRACE, atuei como pesquisador e assistente Bibliográfico sobre Plataformas Digitais, e atualmete sou monitor em uma recem escola de programação montada em minha cidade, momentos este que gosto 
                   de destacar pela sua importantância na ampliação dos meus conhecimentos e na própria visão de mundo sobre toda área tecnológica em si. Sou aluno da Pontifícia da Universidade Católica no curso de Ciência da Computação, curso o qual 
                   sempre quis, e em uma universidade reconhecida pela sua excelência académica, planejo me esforçar para ser o mais excelente profissional, e fazer a diferença por onde estiver</p>

                <h6>_____________________________________________________</h6>

                
                <p><strong>Location:</strong> ${data.location}</p>
              
                
              </div>
                <p><strong>Site: </strong><a href="index.html">Meusiteitefeitonapucminas.com.br</a></p>
                
              <div class="icones">

              <ul>
                <li class="icones1" class="col">
                    <a href="https://www.facebook.com/davi.candido.9440"><img src="assets/img/facebook2png.png" alt="Facebook"></a>
                </li>
                
                <li class="icones2" class="col">
                    <a href="https://github.com/Davykandido"><img src="assets/img/github.png" alt="GitHub"></a>
                </li>
                
                <li class="icones3" class="col">
                  <a href="https://www.instagram.com/davykandido/"> <img src="assets/img/Instagram.png" alt="instagram"></a>
                </li>

              </ul>
              </div>
              `;

  
    }




    
      function CriaRepositorios(data){

        data.forEach(Repositorio => {
    
          divcontemRepositorio.innerHTML += `
                  <div class="col">
                    <div class="card">
                      <img src="${gitImg}" class="card-img-top" alt="${Repositorio.name}">
                      <div class="card-body">
                        <h5 class="card-title" class="text-dark">${Repositorio.name}</h5>
                        <p class="card-text">${Repositorio.html_url}</p>
                        <a href="Repo.html?id=${Repositorio.id}" class="btn btn-primary">Descrição</a>
                      </div>
                    </div>`;
        });
    
    
    }
      
    
    function CriaColegas(data){

            divContemColegas.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-3">`;

        data.forEach(colega => {
            divContemColegas.innerHTML += `
                  <div class="col">
                    <div class="card">
                      <img src="${colega.URLfoto}" class="card-img-top" alt="${colega.Nome}">
                      <div class="card-body">
                        <h5 class="card-title">${colega.Nome}</h5>
                        <p class="card-text">${colega.Descricao}</p>
                        <a href="${colega.URLGit}" class="btn btn-primary">Git Hub</a>
                      </div>
                    </div>`;
        });

        divContemColegas.innerHTML += `</div>`;

    }


    function CriaConteudosSugeridos(Conteudo){


        //OBS: Foi necessario toda a inclusão do conteudo do carousel simultaneamente, testes foram realizados com for e função
        //e função .forEach mas não funcionou como esperado pois devido a comflitos com o script do Boostramp

        divconteudoSugeridos.innerHTML += `
                      
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${Conteudo[0].URLfoto}" class="d-block w-100" alt="${Conteudo[0].Titulo}">
                        <div class="carousel-caption d-none d-md-block">
                          <h5><p class="text-dark">${Conteudo[0].Titulo}</p></p>
                          </h5>
                          <p><p class="text-dark">${Conteudo[0].Descricao}</p></p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="${Conteudo[1].URLfoto}" class="d-block w-100" alt="${Conteudo[1].Titulo}">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>${Conteudo[1].Titulo}</h5>
                          <p>${Conteudo[1].Descricao}</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="${Conteudo[2].URLfoto}" class="d-block w-100" alt="${Conteudo[2].Titulo}">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>${Conteudo[2].Titulo}</h5>
                          <p>${Conteudo[2].Descricao}</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="${Conteudo[3].URLfoto}" class="d-block w-100" alt="${Conteudo[3].Titulo}">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>${Conteudo[3].Titulo} </h5>
                          <p>${Conteudo[3].Descricao} </p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="${Conteudo[4].URLfoto}" class="d-block w-100" alt="${Conteudo[4].Titulo}">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>${Conteudo[4].Titulo}</h5>
                          <p>${Conteudo[4].Descricao}</p>
                        </div>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>`;

}

      //--------------------------------Chama Funções-----------------------------------//

      ReadDataURL(CriaBio, dataURLApiGIT);
      ReadData(CriaColegas, dataURLJSONServer,  "Colegas-de-Trabalho");
      ReadData(CriaConteudosSugeridos, dataURLJSONServer, "Conteudos-Sugeridos");
      ReadData(CriaRepositorios, dataURLApiGIT, "repos");

    
    })  