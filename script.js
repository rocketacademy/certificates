var searchParams = new URLSearchParams(window.location.search);

if( searchParams.has("name") && searchParams.has("date") ){
  var name = searchParams.get("name");
  var date = searchParams.get("date");

  document.querySelector('#rocket-cert-name').innerText = name;
  document.querySelector('#rocket-cert-date').innerText = date;
}else{
  window.location = "https://rocketacademy.co";
}
