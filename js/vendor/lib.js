function Trim(strValue)
{	
"use strict";
	return LTrim(RTrim(strValue));
}

function LTrim(strValue)
{
	"use strict";
	var LTRIMrgExp = /^\s */;
	return strValue.replace(LTRIMrgExp, '');
}

function RTrim(strValue)
{
	"use strict";
	var RTRIMrgExp = /\s *$/;
	return strValue.replace(RTRIMrgExp, '');
}
function isNumeric(formField) 
{
	"use strict";
	
	//all numbers, with decimal and not
	var myregExp = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
	if (!myregExp.test(formField.value)) 
	{
		return false;
	} 
	else 
	{
		return true;
    }
}
function selectCheckbox(form_name,check_name) {	
"use strict";
	var formObj = document.forms[form_name];	
	var boxes = formObj[check_name].length;
	var num = 0;
	if(formObj.selectAll.checked) {
		for (var i = 0; i < boxes; i++) {
			if (formObj[check_name][i].checked == false) {
				formObj[check_name][i].checked = true;
			}
		}
	} else {
		for (var i = 0; i < boxes; i++) {
			if (formObj[check_name][i].checked == true) {
				formObj[check_name][i].checked = false;
			}
		}
	}
	
}
function disableSelectAll(form_name,checked) {
	"use strict";
	var formObj = document.forms[form_name];
	if(checked == false) {
		formObj.selectAll.checked=false;
	}
}
function checkBoxesSel(form_name,check_name) {
	"use strict";
	var formObj = document.forms[form_name];
	var checkboxesL = formObj[check_name].length;
	var message = "";
	
	for(var i=0; i< checkboxesL; i++) {
		if(formObj[check_name][i].checked) {
			message = message + "a";
		}
		
	}
	if(message == "") {
		alert("No items selected");
		return false;
	} else {
		return true;
	}
}

function delItems(form_name,check_name,operation) {
	"use strict";
	var formObj = document.forms[form_name];
	if(checkBoxesSel(form_name,check_name)) {
		if(confirm("Are you sure you want to delete the selected items?")) {
			formObj.operation.value=operation;
			formObj.submit();
		}
	}
}

