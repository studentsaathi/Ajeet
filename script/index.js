function getData() {
    let movies = document.getElementById("movies").value;
  
    const url = `https://www.omdbapi.com/?s=${movies}&page=tt3896198&apikey=c980f154`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
      
  }
  function append(data){
      let show_movies =document.getElementById('show_movies');
      
      show_movies.innerHTML = null;
       let name=document.createElement("p");
       name.innerText=`Name : -${data.Search[0].Title}`
       let image =document.createElement("img");
  
       image.src=data.Search[0].Poster;
       let relse=document.createElement("p");
       relse.innerText=`Year : - ${data.Search[0].Year}`
       //let relse=document.createElement("p");
       
       show_movies.append(name,relse);
       show_movies.append(image);
       
  
  
  
  }
  