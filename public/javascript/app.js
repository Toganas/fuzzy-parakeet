$("form").on("submit", function(event){
    event.preventDefault();
    let username = $("input[name=username]").val();
    let password = $("input[name=password]").val();
    console.log(username);
    console.log(password);

    let user = {
        username: username,
        password: password
    }
$.ajax({
    url:"/value",
    method: "POST",
    data: user
}).then(function(res){
    console.log(res);
})





})
