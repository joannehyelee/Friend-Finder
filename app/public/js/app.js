$(document).ready(function(){

    $("#submit").on("click", function(event){
        // Prevent page reload
        event.preventDefault();

        // When user hits submit, grab information all the fields
        var answers = {
            name: $("#name").val().trim(),
            image: $("#image").val().trim(),
            firstQuestion: $("#first-question").val().trim(),
            secondQuestion: $("#second-question").val().trim(),
            thirdQuestion: $("#third-question").val().trim(),
            fourthQuestion: $("#fourth-question").val().trim(),
            fifthQuestion: $("#fifth-question").val().trim(),
            sixthQuestion: $("#sixth-question").val().trim(),
            seventhQuestion: $("#seventh-question").val().trim(),
            eighthQuestion: $("#eight-question").val().trim(),
            ninthQuestion: $("#ninth-question").val().trim(),
            tenthQuestion: $("#tenth-question").val().trim()
        };
        console.log(answers);

        $.post("/api/friends", answers, function(data){
            
        });

    });

});


