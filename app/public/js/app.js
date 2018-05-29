$(document).ready(function(){

    $("#submit").on("click", function(event){
        // Prevent page reload
        event.preventDefault();

        // When user hits submit, grab information all the fields
        var answers = {
            "name": $("#name").val().trim(),
            "image": $("#image").val().trim(),
            "scores": [
                $("#first-question").val().trim(),
                $("#second-question").val().trim(),
                $("#third-question").val().trim(),
                $("#fourth-question").val().trim(),
                $("#fifth-question").val().trim(),
                $("#sixth-question").val().trim(),
                $("#seventh-question").val().trim(),
                $("#eight-question").val().trim(),
                $("#ninth-question").val().trim(),
                $("#tenth-question").val().trim()
            ]
        };
        console.log(answers);

        $.post("/api/friends", answers, function(data){
            if (data) {
                console.log(data);
            }
        });

    });

});


