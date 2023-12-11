
// 1- TESTE PARA CRIAR UM NOVO USUÁRIO NA API- CENÁRIO POSITIVO


import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const baseUrl = 'https://gorest.co.in'; 
  const endpoint = '/public/v2/users'; 

  const url = `${baseUrl}${endpoint}`; 
  const token = 'Bearer 0026482eec1ebaf0067b85aa16f057b927db62db761caaa93717c0ae4ec135ae'; //Meu token

  const payload = {
    name: 'Bojack Horseman',
    email: 'bojack@gmail.com',
    userid: '161718',
    gender: 'male', // Usuário masculino 
    status: 'active' // Usuário Ativa 
   
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

// ESTE TESTE PASSOU :D: CRIEI UM NOVO USUARIO COM O MEU NOME