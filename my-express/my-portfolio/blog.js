

export function blogSet(element){
    console.log('ok');
    $.ajax({
        // 渡したいデータをurlのクエリパラメータで指定
        url: "/blog",
        type: "get",
        dataType: "json",
        headers: {
          'Content-Type': 'application/json',
        }
      })
    .done(function (data, testStatus, jqXHR) {
        data.forEach(function(d){
            console.log(d);
            element.innerHTML+=`<li style="display: flex; "><a class="custom-text" style="margin-left: 40%;" href="/blog/show/${d.ID}">・${d.title}</a></li>`
        });
    })
        .fail(function (jqXHR, textStatus, erorThrown) {
          document.querySelector("#postMes").innerHTML='blog通信エラー'
      });
}


export function blogGet(blogTitle,blogContents){
    const pathSegments = window.location.pathname.split('/');
    const blogId = pathSegments.pop() || pathSegments.pop();
    $.ajax({
        // 渡したいデータをurlのクエリパラメータで指定
        url: "/blog/get/"+blogId,
        type: "get",
        dataType: "json",
        headers: {
          'Content-Type': 'application/json',
        }
      })
    .done(function (data, testStatus, jqXHR){

            const blog = data[0];
            blogTitle.innerHTML=`${blog.title}`;
            blogContents.innerHTML=`${blog.contents}`;
            hljs.highlightAll();
    })
        .fail(function (jqXHR, textStatus, erorThrown) {
            console.log(erorThrown);
      });
}


export function blogCreate(){

  const name = document.querySelector("#blogTitle").value;
  const address = document.querySelector("#blogContents").value;
  $.ajax({
          // 渡したいデータをurlのクエリパラメータで指定
          url: "/blog/create/store",
          type: "post",
          dataType: "json",
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            'title':blogTitle,
            'contents':blogContents,
          })
        })
          .done(function (data, testStatus, jqXHR) {
        })
          .fail(function (jqXHR, textStatus, erorThrown) {
            document.querySelector("#postMes").innerHTML='通信エラー'
        });
}
