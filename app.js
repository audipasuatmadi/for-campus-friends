$(document).ready(() => {
  var contentsDiv = $("#contents");

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    success: function (data) {
      data.forEach((individualData) => {
        console.log(individualData);
        contentsDiv.append(`
        <div class="item">
          <p>title: ${individualData.title}</p>
          <p>description: ${individualData.body}</p>
        </div>  
        `);
      });
    },
  });
});
