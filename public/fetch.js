$(document).ready(
  function () {

    //Service 1 Zone
    $("#target1").click(function () {
      var lecture = $("#txtTarget1").val();
      if (lecture) {
        $("#work").click();
        RecursiveUnbind($('#confirm'));
        $("#confirm").click(function () {
          var info = "name=" + lecture
          var pre = document.querySelector("#bodyTarget1");
          pre.innerHTML = "";//clear
          xhr = new XMLHttpRequest();
          xhr.open("Post", "/Zone");
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.send(info);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              $("#GET1").click();
              $("#txtTarget1").val("");
              $("#alert").attr("style", "display:none;");
              $("#work").click();
            }
          }
        });

      } else {
        $("#alert").attr("style", "dislay:block;");
      }

    });

    $("#GET1").click(function () {
      var lecture;
      var pre = document.querySelector("#bodyTarget1");
      pre.innerHTML = "";//clear
      xhr = new XMLHttpRequest();
      xhr.open("GET", "/Zone");
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          lecture = JSON.parse(xhr.responseText);
          var index = 0;
          var elemn = [];
          $.each(lecture, function (i, c) {
            elemn[index] = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerText = c.id;
            var td2 = document.createElement("td");
            td2.innerText = c.name;
            var td3 = document.createElement("td");
            var btnPut = document.createElement("button");
            btnPut.setAttribute("class", "btn btn-success space");
            btnPut.innerText = "Modifier(PUT)"
            btnPut.onclick = function () {


              $("#work").click();
              RecursiveUnbind($('#confirm'));
              $("#confirm").click(function () {
                var xhrInside = new XMLHttpRequest();
                var data = $("#txtTarget1").val();
                if (data) {
                  xhrInside.open("PUT", "/Zone", true);
                  var info = "id=" + c.id + "&name=" + data;

                  xhrInside.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                  xhrInside.send(info);
                  xhrInside.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                      $("#GET1").click();
                      $("#work").click();
                      $("#txtTarget1").val("");
                      $("#alert").attr("style", "display:none;");
                    }
                  }
                } else {
                  $("#alert").attr("style", "display:block;");
                  $("#work").click();
                }



              });

            }
            td3.appendChild(btnPut);

            var btnDelete = document.createElement("button");
            btnDelete.setAttribute("class", "btn btn-danger space");
            btnDelete.innerText = "Supprimer(DELETE)";
            btnDelete.onclick = function () {

              $("#work").click();
              RecursiveUnbind($('#confirm'));
              $("#confirm").click(function () {

                var xhrInside = new XMLHttpRequest();
                xhrInside.open("DELETE", "/Zone", true);
                var info = "id=" + c.id;
                xhrInside.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrInside.send(info);
                xhrInside.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                    $("#GET1").click();
                    $("#work").click();
                  }
                }


              });

            }
            td3.appendChild(btnDelete);
            elemn[index].appendChild(td1);
            elemn[index].appendChild(td2);
            elemn[index].appendChild(td3);
            pre.appendChild(elemn[index]);
            index++;
          });
        }
      }
    });










    //Service 2 Type
    $("#target2").click(function () {
      var lecture = $("#txtTarget2").val();
      if (lecture) {
        $("#work").click();
        RecursiveUnbind($('#confirm'));
        $("#confirm").click(function () {
          var info = "name=" + lecture
          var pre = document.querySelector("#bodyTarget2");
          pre.innerHTML = "";//clear
          xhr = new XMLHttpRequest();
          xhr.open("Post", "/Type");
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.send(info);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              $("#GET2").click();
              $("#txtTarget2").val("")
              $("#alert").attr("style", "display:none;");
              $("#work").click();
            }
          }
        });
      } else {
        $("#alert").attr("style", "display:block;");
      }

    });

    $("#GET2").click(function () {

      var lecture;
      var pre = document.querySelector("#bodyTarget2");
      pre.innerHTML = "";//clear
      xhr = new XMLHttpRequest();
      xhr.open("GET", "/Type");
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          lecture = JSON.parse(xhr.responseText);
          var index = 0;
          var elemn = [];
          $.each(lecture, function (i, c) {
            elemn[index] = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerText = c.id;
            var td2 = document.createElement("td");
            td2.innerText = c.name;
            var td3 = document.createElement("td");
            var btnPut = document.createElement("button");
            btnPut.setAttribute("class", "btn btn-success space");
            btnPut.innerText = "Modifier(PUT)"
            btnPut.onclick = function () {

              $("#work").click();
              RecursiveUnbind($('#confirm'));
              $("#confirm").click(function () {

                var xhrInside = new XMLHttpRequest();
                var data = $("#txtTarget2").val();
                if (data) {
                  xhrInside.open("PUT", "/Type", true);
                  var info = "id=" + c.id + "&name=" + data;

                  xhrInside.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                  xhrInside.send(info);
                  xhrInside.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                      $("#GET2").click();
                      $("#txtTarget2").val("");
                      $("#work").click();

                      $("#alert").attr("style", "display:none;");
                    }
                  }
                } else {

                  $("#alert").attr("style", "display:block;");
                  $("#work").click();
                }

              });
            }
            td3.appendChild(btnPut);

            var btnDelete = document.createElement("button");
            btnDelete.setAttribute("class", "btn btn-danger space");
            btnDelete.innerText = "Supprimer(DELETE)";
            btnDelete.onclick = function () {

              $("#work").click();
              RecursiveUnbind($('#confirm'));
              $("#confirm").click(function () {

                var xhrInside = new XMLHttpRequest();
                xhrInside.open("DELETE", "/Type", true);
                var info = "id=" + c.id;
                xhrInside.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrInside.send(info);
                xhrInside.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                    $("#GET2").click();
                    $("#work").click();

                  }
                }

              });

            }
            td3.appendChild(btnDelete);
            elemn[index].appendChild(td1);
            elemn[index].appendChild(td2);
            elemn[index].appendChild(td3);
            pre.appendChild(elemn[index]);
            index++;
          });
        }
      }
    });







    //Service 3 Nourriture
    $("#target3").click(function () {
      var lecture = $("#txtTarget3").val();
      if (lecture) {
        $("#work").click();
        RecursiveUnbind($('#confirm'));
        $("#confirm").click(function () {
          var info = "name=" + lecture
          var pre = document.querySelector("#bodyTarget3");
          pre.innerHTML = "";//clear
          xhr = new XMLHttpRequest();
          xhr.open("Post", "/Nourriture");
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.send(info);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              $("#GET3").click();
              $("#txtTarget3").val("");
              $("#alert").attr("style", "display:none;");
              $("#work").click();
            }
          }


        });
      } else {
        $("#alert").attr("style", "display:block;");
      }

    });

    $("#GET3").click(function () {

      var lecture;
      var pre = document.querySelector("#bodyTarget3");
      pre.innerHTML = "";//clear
      xhr = new XMLHttpRequest();
      xhr.open("GET", "/Nourriture");
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          lecture = JSON.parse(xhr.responseText);
          var index = 0;
          var elemn = [];
          $.each(lecture, function (i, c) {
            elemn[index] = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerText = c.id;
            var td2 = document.createElement("td");
            td2.innerText = c.name;
            var td3 = document.createElement("td");
            var btnPut = document.createElement("button");
            btnPut.setAttribute("class", "btn btn-success space");
            btnPut.innerText = "Modifier(PUT)"
            btnPut.onclick = function () {

              $("#work").click();
              RecursiveUnbind($('#confirm'));
              $("#confirm").click(function () {

                var xhrInside = new XMLHttpRequest();
                var data = $("#txtTarget3").val();
                if (data) { 
                  
                    xhrInside.open("PUT", "/Nourriture", true);
                    var info = "id=" + c.id + "&name=" + data;
                    xhrInside.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    xhrInside.send(info); 
                    xhrInside.onreadystatechange = function () {
                      if (xhr.readyState == 4) {
                        $("#txtTarget3").val("");
                        $("#alert").attr("style", "display:none;");
                        $("#work").click();
                        $("#GET3").click();
                      }
                    } 



                } else { 
                  $("#alert").attr("style", "display:block;");
                  $("#work").click();

                }



              });
            }
            td3.appendChild(btnPut);

            var btnDelete = document.createElement("button");
            btnDelete.setAttribute("class", "btn btn-danger space");
            btnDelete.innerText = "Supprimer(DELETE)";
            btnDelete.onclick = function () {

              $("#work").click();
              RecursiveUnbind($('#confirm'));
              $("#confirm").click(function () {

                var xhrInside = new XMLHttpRequest();
                xhrInside.open("DELETE", "/Nourriture", true);
                var info = "id=" + c.id;
                xhrInside.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrInside.send(info);
                xhrInside.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                    $("#GET3").click();
                    $("#work").click();
                  }
                }

              });

            }
            td3.appendChild(btnDelete);
            elemn[index].appendChild(td1);
            elemn[index].appendChild(td2);
            elemn[index].appendChild(td3);
            pre.appendChild(elemn[index]);
            index++;
          });
        }
      }
    });

















    //Service 3 Classification
    $("#target4").click(function () {
      var lecture = $("#txtTarget4").val();
      if (lecture) {
        $("#work").click();
        RecursiveUnbind($('#confirm'));
        $("#confirm").click(function () {
          var info = "name=" + lecture
          var pre = document.querySelector("#bodyTarget4");
          pre.innerHTML = "";//clear
          xhr = new XMLHttpRequest();
          xhr.open("Post", "/Classification");
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.send(info);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              $("#GET4").click();
              $("#alert").attr("style", "display:none;");
              $("#work").click();
              $("#txtTarget4").val("")
            }
          }
        });

      } else {
        $("#alert").attr("style", "display:block;");
      }

    });

    $("#GET4").click(function () {

      var lecture;
      var pre = document.querySelector("#bodyTarget4");
      pre.innerHTML = "";//clear
      xhr = new XMLHttpRequest();
      xhr.open("GET", "/Classification");
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          lecture = JSON.parse(xhr.responseText);
          var index = 0;
          var elemn = [];
          $.each(lecture, function (i, c) {
            elemn[index] = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerText = c.id;
            var td2 = document.createElement("td");
            td2.innerText = c.name;
            var td3 = document.createElement("td");
            var btnPut = document.createElement("button");
            btnPut.setAttribute("class", "btn btn-success space");
            btnPut.innerText = "Modifier(PUT)"
            btnPut.onclick = function () {

              $("#work").click();
              RecursiveUnbind($('#confirm'));
              $("#confirm").click(function () {

                var xhrInside = new XMLHttpRequest();
                var data = $("#txtTarget4").val();
                if(data){
                  xhrInside.open("PUT", "/Classification", true);
                  var info = "id=" + c.id + "&name=" + data;
                  xhrInside.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                  xhrInside.send(info);
                  xhrInside.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                      $("#GET4").click();
                      $("#work").click();
                      $("#alert").attr("style", "display:none;");
                      $("#txtTarget4").val("")
                    }
                  }
                }else{
                  $("#alert").attr("style", "display:block;");
                  $("#work").click();

                }
               
              });
            }
            td3.appendChild(btnPut);

            var btnDelete = document.createElement("button");
            btnDelete.setAttribute("class", "btn btn-danger space");
            btnDelete.innerText = "Supprimer(DELETE)";
            btnDelete.onclick = function () {

              $("#work").click();
              RecursiveUnbind($('#confirm'));
              $("#confirm").click(function () {

                var xhrInside = new XMLHttpRequest();
                xhrInside.open("DELETE", "/Classification", true);
                var info = "id=" + c.id;
                xhrInside.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrInside.send(info);
                xhrInside.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                    $("#GET4").click();
                    $("#work").click();
                  }
                }


              });
            }
            td3.appendChild(btnDelete);
            elemn[index].appendChild(td1);
            elemn[index].appendChild(td2);
            elemn[index].appendChild(td3);
            pre.appendChild(elemn[index]);
            index++;
          });
        }
      }
    });
















    function RecursiveUnbind($jElement) {
      // remove this element's and all of its children's click events
      $jElement.unbind();
      $jElement.removeAttr('onclick');
      $jElement.children().each(function () {
        RecursiveUnbind($(this));
      });
    }


  }


);