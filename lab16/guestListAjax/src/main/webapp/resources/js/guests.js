$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    //var guestList = "You need to modify this method to display the updated guest list.  Remember to build the entire list before adding it to the DOM.";

    var html = "<div class=\"row font-weight-bold py-2\">\n" +
        "                    <div class=\"col\">\n" +
        "                        No.\n" +
        "                    </div>\n" +
    "                    <div class=\"col\">\n" +
    "                        First name\n" +
    "                    </div>\n" +
    "                    <div class=\"col\">\n" +
    "                        Last name\n" +
    "                    </div>\n" +
    "                </div>\n";

    $.each(data, function( index, value ) {
        html += "        <div class=\"row py-2\">\n" +
            "                    <div class=\"col\">\n" +
            "                        " + index +
            "                    </div>\n" +
        "                    <div class=\"col\">\n" +
        "                        " + value.first +
        "                    </div>\n" +
        "                    <div class=\"col\">\n" +
        "                        " + value.last +
        "                    </div>\n" +
        "                </div>"
    });
    $("#guestList").html(html);

}