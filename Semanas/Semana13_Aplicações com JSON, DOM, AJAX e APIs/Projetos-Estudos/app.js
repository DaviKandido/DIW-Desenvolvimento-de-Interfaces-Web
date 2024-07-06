//let cidades = [
//   { "id": 1, "cidade": "Belo Horizonte", "estado": "MG", "populacao": 3800000 },
//   { "id": 2, "cidade": "São Paulo", "estado": "SP", "populacao": 1180000 },
//   { "id": 3, "cidade": "Rio de Janeiro", "estado": "RJ", "populacao": 5300000 },
//   { "id": 4, "cidade": "Curitiba", "estado": "PR", "populacao": 1200000 },
//   { "id": 5, "cidade": "Fortaleza", "estado": "CE", "populacao": 2100000 }
//]

const urlCidades = 'https://576a5022-ec4b-48a2-9ab2-1897a01a53fe-00-3q5h1ciqjgtkw.kirk.replit.dev/cidades'
let cidades = []

function CarregaDadosJSONServer (func){

    fetch(urlCidades)
        .then(function(response) { return response.json()})
        .then(function(dados) {
            cidades = dados
            console.log("Dados Carregados")
            func()
        })  
}