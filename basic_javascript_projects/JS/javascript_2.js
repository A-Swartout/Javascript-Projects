function validateForm() {
    var f = document.forms["myForm"]["fname"].value;
    var l = document.forms["myForm"]["lname"].value;
    if (f == "" || f == "First name") {
        alert("First name must be filled out");
        return false;
    }
    if (l == "" || l == "Last name") {
        alert("Last name must be filled out");
        return false;
    }
}

