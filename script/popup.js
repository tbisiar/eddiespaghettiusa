function popup(the_file) {

    var the_popup =
        window.open(the_file, "",
                    "height=450,width=400,toolbar=no,location=no,directories=no,status=no,menubar=yes,scrollbars=yes,resize=yes");

    if (window.focus) {
        the_popup.focus();
    }
}

function popupsize(the_file, the_width, the_height) {

    if (!the_width) {
        the_width = 400;
        the_height = 450;
    }

    var propertystring =
        "height=" + the_height + ",width=" + the_width
        + ",toolbar=no,location=no,directories=no,status=no,menubar=yes,scrollbars=no,resize=yes";

    var the_popup = window.open(the_file, "", propertystring);

    if (window.focus) {
        the_popup.focus();
    }
}


