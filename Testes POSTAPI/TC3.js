
//3-  TESTE PARA VALIDAR USUÁRIO DUPLICADO NA API- CENÁRIO NEGATIVO (O USUÁRIO CRIADO JÁ EXISTE)
// USANDO O NOME, E-MAIL, USERID, GENDER E STATUS EXISTENTES. 

import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const baseUrl = 'https://gorest.co.in'; 
  const endpoint = '/public/v2/users'; 

  const url = `${baseUrl}${endpoint}`; 
  const token = 'Bearer 0026482eec1ebaf0067b85aa16f057b927db62db761caaa93717c0ae4ec135ae'; 

  const payload = {
    name: 'Bojack Horseman',
    email: 'bojack@gmail.com',
    userid: '12345',
    gender: 'male', // Usuário masculino
    status: 'active' // Uusária Ativa 
   
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

// ESTE TESTE PRECISA FALHAR, POIS JA EXECUTEI UM TESTE COM ESSES MESMOS DADOS DE ENTRADA
// ELE APONTA O SEGUINTE RESULTADO: ERRO[0001] Falha ao criar usuário. Detalhes: [{"field":"email","message":"has already been taken"}]  source=console

     