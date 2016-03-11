$(document).ready(function(){
      $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "";
        for(var comment in data) {
          com = data[comment];
          everything += "Name: " + com.Name + " -- Comment: " + com.Comment+"<br>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
	var url = "comment";
	$.ajax({
	 url:url,
  	type: "POST",
  	data: jobj,
  	contentType: "application/json; charset=utf-8",
  	success: function(data,textStatus) {
      	$("#done").html(textStatus);
  }
})
});
    $("#reset").click(function(){
	$("#comments").innerHTML = "";
	$("json").innerHTML = "";
	$("#done").innerHTML = "";
	});
    });
