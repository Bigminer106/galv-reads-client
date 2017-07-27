const API_URL = `https://quiet-thicket-77024.herokuapp.com/api/v1/books`; // Keep this here

$(document).ready(() => {

  // console.log('hello world'); Sanity Check

  // Initial GET request
  $.ajax({
    url: `${API_URL}`,
    type: 'GET',
    dataType: 'json'
  }).then(data => {
    // console.log(data); Sanity Check

    for (var i = 0; i < data.length; i++) {

      // try and get these const declarations elsewhere
      const bookTitle = data[i].title;
      const bookCover = data[i].cover;
      const bookGenre = data[i].genre;
      const bookID = data[i].id;
      const bookDescript = data[i].description;

      // bookList const declaration doesn't move from here
      const bookList = `<center><div class="well">
        <h3 class="title">${bookTitle}</h3>
        <center><a href="#" class="bookClick" data-clicked="${bookID}"><img src="${bookCover}" alt="${bookTitle}" id="listCover"></center>
      </a>
      <p class="descript">${bookDescript}</p></div></center><br>`;

      $('.bookList').append(bookList);

      // GET One book, currently not working

      // $('.bookClick').click(id => {
      //   $('.bookList').remove();
      //   if () {
      //     $('.bookList').append(`<h3 class="title">${bookTitle}</h3>
      //     <center><img src="${bookCover}" alt="${bookTitle}" id="listCover"></center>
      //     <p class="descript">${bookDescript}</p>`);
      //   };
      // });

    }; // closes for loop above
  }); // closes .then call after AJAX request above

    // Form for adding a book, lengthy const declaration that I'd like to shorten somewhat
  const form = '<section class="addForm"><center><div class="well"><form id="addForm"><div class="form-group"><label for="titleInput">Title</label><input placeholder="Title" id="titleInput" type="text" class="form-control"><label for="genre">Genre</label><input placeholder="Genre" id="genre" type="text" class="form-control"><label for="descript">Description</label><input placeholder="Description" id="descript" type="text" class="form-control"><label for="cover">Cover Image URL</label><input placeholder="URL" id="cover" type="url" class="form-control"></div><center><input type="submit" value="Submit" id="submit"><span>  </span><input type="submit" value="Cancel" id="cancel"></center></form></div></center></section><br>';

  // actual click handler here
  $('#addForm').click(() => {
    $('.bookList').remove();
    $('.title').remove();
    $('.addForm').remove();
    $('footer').remove();
    $('main').prepend(form);

    // click handler for submitting a form here, with POST request
    $('#submit').click(() => {
      event.preventDefault(); // prevent default action with the form
      var $titleData = $('#titleInput').val();
      var $genreData = $('#genre').val();
      var $descriptData = $('#descript').val();
      var $coverURL = $('#cover').val();
      var $allData = $titleData + ' ' + $genreData + ' ' + $descriptData + ' ' + $coverURL;
      var data = {
        title: $titleData,
        genre: $genreData,
        description: $descriptData,
        cover: $coverURL
      };
      console.log(data); // sanity check
      $('.addForm').remove();

      // attempt POST request
      $(document).ajaxError(
        $.ajax({
          url: `${API_URL}`,
          type: 'POST',
          contentType: 'application/json',
          dataType: 'jsonp',
          data: data,
          success: 'SUCCESS'
        })
        .then(data => {
          for (var i = 0; i < data.length; i++) {
            const bookTitle = data[i].title;
            const bookCover = data[i].cover;
            const bookGenre = data[i].genre;
            const bookID = data[i].id;
            const bookDescript = data[i].description;
            const bookList = `<a href="#" class="bookClick" data-clicked="${bookID}">
            <h3 class="title">${bookTitle}</h3>
            <center><img src="${bookCover}" alt="${bookTitle}" id="listCover"></center>
            </a>
            <p class="descript">${bookDescript}</p><br>`;
            $('.bookList').append(bookList);
        }; // closes for loop
        $('main').append('<section class="title"><center><div class="well"><h3>Book List</h3></div></center><div class="bookList"></div></section>');
        $('main').append('<footer><div class="well"><h5><center>Galvanize Reads Library<br>© 2017 | Adam Miner</center></h5></div></footer>');
      }) // closes POST request
    ) // Closes document.ajaxError
  }); // closes submit click handler

  // Cancel POST request click handler here
   $('#cancel').click(() => {

    //  Repeat GET request from above
    $('.addForm').remove();
     $.ajax({
       url: `${API_URL}`,
       type: 'GET',
       dataType: 'json'
     }).then(data => {
        for (var i = 0; i < data.length; i++) {
          const bookTitle = data[i].title;
          const bookCover = data[i].cover;
          const bookGenre = data[i].genre;
          const bookID = data[i].id;
          const bookDescript = data[i].description;
          const bookList = `<a href="#" class="bookClick" data-clicked="${bookID}">
            <h3 class="title">${bookTitle}</h3>
            <center><img src="${bookCover}" alt="${bookTitle}" id="listCover"></center>
            </a>
            <p class="descript">${bookDescript}</p><br>`;
          $('main').append('.title');
          $('.bookList').append(bookList);
          $('main').append('<footer><div class="well"><h5><center>Galvanize Reads Library<br>© 2017 | Adam Miner</center></h5></div></footer>');
        }; // Closes for loop
      }); // Closes GET request
    }); // Closes cancel click handler
  }); // Closes Add Form click handler

}); // Closes document.ready
