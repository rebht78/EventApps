function ajaxCall(url, elementid)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById(elementid).innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", url , false);
  xhttp.send();
}
function ajaxCallPost(url, elementid, params)
{
 
  var xhttp = new XMLHttpRequest();
 
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById(elementid).innerHTML = xhttp.responseText;
    }
  };

  xhttp.open("POST", url , false);
   xhttp.setRequestHeader('Content-Type','application/json');
  xhttp.send(params);
}
function addDatePicker(inputid,showChangeMonth,showChangeYear)
{
  if ((typeof(showChangeMonth) === "boolean") && (typeof(showChangeYear) === "boolean"))
    {
      $(inputid).datepicker({
        changeMonth: showChangeMonth,
        changeYear: showChangeYear
      });
       
    }
  else
    {
       $(inputid).datepicker();
    }
}