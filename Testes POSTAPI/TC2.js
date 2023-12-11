
// 2- TESTE PARA CRIAR UM NOVO USUÁRIO NA API- NEGATIVO
// ELE PRECISA FALHAR, JÁ QUE PARA CRIAR UM USUÁRIO NA API PRECISA DE TODOS OS CAMPOS: 
// NOME, E-MAIL, USERID, GENDER E STATUS 


import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const baseUrl = 'https://gorest.co.in'; 
  const endpoint = '/public/v2/users'; 

  const url = `${baseUrl}${endpoint}`; 
  const token = 'Bearer 0026482eec1ebaf0067b85aa16f057b927db62db761caaa93717c0ae4ec135ae'; 

  const payload = {
    name: 'Aline Santos',
    email: 'aline@hotmail.com',
    userid: '909076',
   // gender: 'female',  
    status: 'active'  
   // OBSERVE AQUI: COMENTEI O CAMPO GENDER E NA HORA DE EXECUTAR ELE PRECISA FALHAR. 
   
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: token, 
  };

  const response = http.post(url, JSON.stringify(payload), { headers });

  // Verifica o status da resposta e exibe detalhes em caso de falha
  check(response, {
    'Status 201 Created': (res) => res.status === 201,
  });

  if (!check(response, { 'Status 201 Created': (res) => res.status === 201 })) {
    console.error('Falha ao criar usuário. Detalhes:', response.body);
  }
}

// ESTE TESTE PRECISA FALHAR, POIS ELE APONTA EM VERMELHO O STATUS 201 CREATED, SIGNIFICA QUE NÃO CRIOU O USUÁRIO, DEVIDO AOS CAMPOS EM FALTA
// EERRO[0001] Falha ao criar usuário. Detalhes: [{"field":"gender","message":"can't be blank, can be male of female"}]