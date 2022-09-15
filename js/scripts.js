const myPromise = new Promise((resolve, reject) => {
    
    const nome = 'Anderson'

    if(nome === 'Anderson') {
        resolve('Usuário Anderson foi encontrado!')
    } else {
        reject('O usuário Anderson não foi encontrado!')
    }

})

myPromise.then((data) => {
    console.log(data)
}) //Só vai executar a promessa quando executar o método dela

// Encadeamneto de thens dentro da promise
const myPromise2 = new Promise((resolve, reject) => {
    
    const nome = 'Anderson'

    if(nome === 'Anderson') {
        resolve('Usuário Anderson foi encontrado!')
    } else {
        reject('O usuário Anderson não foi encontrado!')
    }

})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome2 = 'Andrson'

    if (nome2 === 'Anderson'){
        resolve('O usuário Anderson foi encontra')
    } else{
        reject('O usuário Anderson não foi encontrado')
    }
})

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Ocorreu um erro:' + err)
})

// Resolver várias promessas
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('P1 ok! Timeout')  
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('Depois do all()')

//Várias pessoas com race - A primeira que for resolvida vai enviar a mensagem de retorno

const p4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('P4 ok! Timeout')  
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

const resolveAll2 = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data) //Por ser uma corrida, só a primeira já sai como resultado
})


// Fetch request na API do GitHub
// Fetch API   
 
const userName = 'jose-andersonjr'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    }
}).then((response) => {

    return response.json()
}).then((data) => {
    console.log(`O nome do usuário é ${data.name}`)
}).catch((err) => {
    console.log(`Houve algum erro: ${err}`)
})
