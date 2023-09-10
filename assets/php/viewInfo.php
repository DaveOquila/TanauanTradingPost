<?php
$dateFrom = $_POST['dateOne'];
$dateTo = $_POST['dateTwo'];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://agatha.fastwin.ph:8449/api/v1/lobby/fastwin/seamless/spin2win/bo/winners/list?filter=0&gameName=Magic%205&dateFrom='.$dateFrom.'%2006%3A00%3A00&dateTo='.$dateTo.'%2005%3A59%3A59',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'x-api-key: Uuavj8HQm7ZgO2Dv3XPk'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
