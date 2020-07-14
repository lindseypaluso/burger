$("#submit").click(e  => {
    e.preventDefault();

    var newBurger = {
        name: $("#burgerName").val(),
        devoured: $('input[name="devoured"]:checked').val()
    }
    $("#burgerName").val("");
    $.post("/api/burger", newBurger).then((err, data) =>{
        console.log(data)
        window.location.reload()
    })
})



