const personagem = document.querySelectorAll('.personagem');
const imagemPersonagemGrande = document.querySelector('.personagem-grande');

// Adicionar a classe slecionada no personagem que o usuario passar o cursor
personagem.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        // Verificar se há um personagem selecionado, se sim, devemos remover sua seleção
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
        
        //Alterar a imagem Grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagem/card-${idPersonagem}.png`;  
        
    //Alterar o nome do Personagem Grande
     const nomePersonagem = document.getElementById('nome-personagem');

     nomePersonagem.innerText =  personagem.getAttribute('data-name');

     //Altera a descrição do Personagem
     const descricaoPersonagem = document.getElementById('descricao-personagem');

     descricaoPersonagem.innerText = personagem.getAttribute('data-description')


    })
})