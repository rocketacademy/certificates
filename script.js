if( "URLSearchParams" in window ){

  var searchParams = new window.URLSearchParams(window.location.search);

  if( searchParams.has("name") && searchParams.has("date") && searchParams.has("hash") ){
    var name = searchParams.get("name");
    var date = searchParams.get("date");
    var hash = searchParams.get("hash");
    var courseName = searchParams.get("courseName") || 'Coding Basics';

    document.querySelector('#rocket-cert-name').innerText = atob(hash);
    document.querySelector('#rocket-cert-date').innerText = date;
    document.querySelector('#course-name').innerText = courseName;
  }else{
    window.location = "https://rocketacademy.co";
  }
}else{
  alert('Sorry your browser is too out of date to view this page.');
}
