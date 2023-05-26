<?php

function chamarAPI($cpf, $email){

// inicializa um array associativo contendo as chaves cpf e email atrelados ao que o usuario digitar
$data = array(
    'cpf' => $cpf,
    'email' => $email
);

// set da url da api
$url = 'https://ah.we.imply.com/apiCopetti';

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
// configura o cURL para retornar a resposta da requisição como uma string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
//  define os dados que serão enviados no corpo da requisição POST
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
// desativa a verificação ssl
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);


$response = curl_exec($ch);


if(curl_errno($ch)){
    $error_message = curl_error($ch);
    echo 'Erro na requisição: ' . $error_message;
}


curl_close($ch);



$responseObj = json_decode($response);
/*
stdClass Object
(
    [id] => 
    [error] => 
    [result] => 1
)
*/

$result = $responseObj->result; 

return $result;
}


