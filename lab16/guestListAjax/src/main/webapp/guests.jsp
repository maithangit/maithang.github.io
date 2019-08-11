<html>
    <head>
        <title>Party Planner</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="resources/js/guests.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <link rel="stylesheet" href="resources/css/style.css" />
    </head>
    <body>
            <div class="container" >
                <div class="row">
                    <div class="col-md-6">Enter a name to be added to the guest list </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        First <input id='first' type='text' name='first'  required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        Last <input id='last' type='text' name='last'  required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <input id='send' type='button' value='Send' class="btn btn-small" />
                    </div>
                </div>
                <div class="grid-striped" id="guestList"></div>
            </div>
    </body>
</html>





