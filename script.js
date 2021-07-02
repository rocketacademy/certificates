var searchParams = new URLSearchParams(window.location.search);

if( searchParams.has("name") && searchParams.has("date") && searchParams.has("hash") ){
  var name = searchParams.get("name");
  var date = searchParams.get("date");
  var hash = searchParams.get("hash");

  document.querySelector('#rocket-cert-name').innerText = atob(hash);
  document.querySelector('#rocket-cert-date').innerText = date;
}else{
  window.location = "https://rocketacademy.co";
}
