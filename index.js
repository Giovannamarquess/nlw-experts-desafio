const perguntas = [
    {
    pergunta: "O que significa a sigla CRM?",
    respostas: [
      "Customer Relations Management",
      "Customer Resource Management",
      "Customer Relationship Management",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o principal objetivo do CRM?",
    respostas: [
      "Aumentar a receita da empresa",
      "Melhorar o relacionamento com os clientes",
      "Reduzir custos operacionais",
    ],
    correta: 1
  },
  {
    pergunta: "Quais são os benefícios do CRM para uma empresa?",
    respostas: [
      "Aumento da lealdade do cliente e aumento da eficiência operacional",
      "Diminuição da satisfação do cliente e redução de vendas",
      "Aumento de custos e diminuição da produtividade",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é uma das principais funcionalidades do CRM?",
    respostas: [
      "Automatização de processos de vendas",
      "Criação de descontentamento do cliente",
      "Aumento de barreiras de comunicação com os clientes",
    ],
    correta: 0
  },
  {
    pergunta: "Quais são os tipos de CRM mais comuns?",
    respostas: [
      "Operacional, Analítico e Colaborativo",
      "Manual, Analógico e Digital",
      "Marketing, Finanças e Produção",
    ],
    correta: 0
  },
  {
    pergunta: "Como o CRM pode ajudar na personalização do atendimento ao cliente?",
    respostas: [
      "Armazenando informações relevantes sobre os clientes",
      "Ignorando as preferências dos clientes",
      "Não registrando interações anteriores com os clientes",
    ],
    correta: 0
  },
  {
    pergunta: "O que é automação de marketing em CRM?",
    respostas: [
      "Utilização de robôs para atendimento ao cliente",
      "Automação de tarefas de marketing como e-mails e campanhas",
      "Ignorar totalmente as estratégias de marketing",
    ],
    correta: 1
  },
  {
    pergunta: "Como o CRM pode ajudar na previsão de vendas?",
    respostas: [
      "Analisando o comportamento de compra dos clientes",
      "Não fornecendo insights sobre as tendências de mercado",
      "Mantendo os dados de vendas desatualizados",
    ],
    correta: 0
  },
  {
    pergunta: "Por que é importante a integração do CRM com outros sistemas da empresa?",
    respostas: [
      "Para garantir que todas as informações relevantes estejam centralizadas",
      "Para aumentar a confusão e dificultar a tomada de decisões",
      "Para reduzir a eficiência dos processos empresariais",
    ],
    correta: 0
  },
  {
    pergunta: "Quais são os principais desafios na implementação de um sistema CRM?",
    respostas: [
      "Adoção pelos usuários, qualidade dos dados e integração com sistemas existentes",
      "Falta de investimento, falta de suporte e desconhecimento sobre os clientes",
      "Ignorar completamente as necessidades dos clientes",
    ],
    correta: 0
  }
   ];
   
   const quiz =  document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContentContent = corretas.size + ' de ' + totalDePerguntas
   
   // loop ou laço de repetição
   for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta
   
     for(let resposta of item.respostas) {
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
   
         corretas.delete(item)
         if(estaCorreta){
           corretas.add(item)
         }  
   
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       } 
       
   
       quizItem.querySelector('dl').appendChild(dt)
     }
     quizItem.querySelector('dl dt').remove()
   
    // coloca a pergunta na tela   
   quiz.appendChild(quizItem)  
   }    