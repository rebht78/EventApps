function validate_mandatory(controlid,caption,errorid)
{
  var txtControl = document.getElementById(controlid);
  var errorDiv = document.getElementById(errorid);
  if (!txtControl.value)
    {
      errorDiv.innerHTML += caption+" cannot be left blank!<br/>";
      errorDiv.style.display = "block";
    }
  
}
function checkTextValue(controlid, errorid)
{
    var txtControl = document.getElementById(controlid);
    if (txtControl.value)
      {
        hideErrorDiv(errorid);
      }
}
function hideErrorDiv(errorid)
{
    var errorDiv = document.getElementById(errorid);
    errorDiv.style.display = "none";
}
