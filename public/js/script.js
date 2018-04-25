function addEvents()
{
  ajaxCall('/add','loaddiv');
  addDatePicker('#txtEventStartDate',true,true);
  addDatePicker('#txtEventEndDate',true,true);
}
function editEvents()
{
  ajaxCall('/edit','loaddiv');
}
function deleteEvents()
{
  ajaxCall('/delete','loaddiv');
}
function viewEvents()
{
  ajaxCall('/view','loaddiv');
}
function viewReports()
{
  alert("You have clicked View Reports Tab!");
}
function insertEvent()
{ 
  var params = JSON.stringify($('#eventform').serializeJSON());
  ajaxCallPost('/','loaddiv',params);
}
function validate()
{
  validate_mandatory('txtEventTitle','Event Title','errordiv');
  validate_mandatory('txtEventLocation','Event Location','errordiv');
  validate_mandatory('txtEventStartDate','Event Start Date','errordiv');
  validate_mandatory('txtEventEndDate','Event End Date','errordiv');
}
function checkValue(controlid)
{
  checkTextValue(controlid,'errordiv');
}
