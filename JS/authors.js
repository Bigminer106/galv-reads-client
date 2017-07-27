const API_URL = `http://quiet-thicket-77024.herokuapp.com/api/v1/authors`;
$(document).ready(function() {
  // console.log('hello world');
  // AJAX GET All Request, successful
  $.ajax({
    url: `${API_URL}`,
    type: 'GET',
  }).then(data => {
    for (var i = 0; i < data.length; i++) {

      const authorFirst = data[i].first;
      const authorLast = data[i].last;
      const authorPortrait = data[i].portrait;
      const authorID = data[i].id;
      const authorBio = data[i].bio;
      const authorList = `<center><div class="well"><h3 class="name">${authorFirst}` + ' ' + `${authorLast}</h3><center><a href="#" class="authorClick"><img src="${authorPortrait}" alt="${authorFirst}` + ' ' + `${authorLast}" id="authorPic"></a></center><p class="bio">${authorBio}</p></div></center><br>`;

      $('.authorList').append(authorList);

      // $('.authorClick').click(() => {
      //   $('.authorList').remove();
      //   if ($(data[0]).click()) {
      //     $('.authorList').append('<h3 class="name">' + data[0].first + ' ' + data[0].last + '</h3><center><img src="${authorPortrait}" alt="'+ data[0].first + ' ' + data[0].last +'" id="authorPic"></center><p class="bio">'+ data[0].bio + '</p>');
      //   } else if ($(data[1]).click()) {
      //     $('.authorList').append('<h3 class="name">' + data[1].first + ' ' + data[1].last + '</h3><center><img src="${authorPortrait}" alt="'+ data[1].first + ' ' + data[1].last +'" id="authorPic"></center><p class="bio">'+ data[1].bio + '</p>');
      //   } else if ($(data[2]).click()) {
      //     $('.authorList').append('<h3 class="name">' + data[2].first + ' ' + data[2].last + '</h3><center><img src="${authorPortrait}" alt="'+ data[2].first + ' ' + data[2].last +'" id="authorPic"></center><p class="bio">'+ data[2].bio + '</p>');
      //   } else if ($(data[3]).click()) {
      //     $('.authorList').append('<h3 class="name">' + data[3].first + ' ' + data[3].last + '</h3><center><img src="${authorPortrait}" alt="'+ data[3].first + ' ' + data[3].last +'" id="authorPic"></center><p class="bio">'+ data[3].bio + '</p>');
      //   } else if ($(data[4]).click()) {
      //     $('.authorList').append('<h3 class="name">' + data[4].first + ' ' + data[4].last + '</h3><center><img src="${authorPortrait}" alt="'+ data[4].first + ' ' + data[4].last +'" id="authorPic"></center><p class="bio">'+ data[4].bio + '</p>');
      //   } else if ($(data[5]).click()) {
      //     $('.authorList').append('<h3 class="name">' + data[5].first + ' ' + data[5].last + '</h3><center><img src="${authorPortrait}" alt="'+ data[5].first + ' ' + data[5].last +'" id="authorPic"></center><p class="bio">'+ data[5].bio + '</p>');
      //   };
      // });

      $('#addForm').click(() => {
        $('.authorList').remove();
        // $('.addForm').remove();
        $('main').prepend('<section class="addForm" id="authorForm"><form><div class="form-group"><label for="firstNameInput">Author First Name</label><input placeholder="First Name" id="firstNameInput" type="text" class="form-control"><label for="lastNameInput">Author Last Name</label><input placeholder="Last Name" id="lastNameInput" type="text" class="form-control"><label for="bio">Biography</label><input placeholder="Biography" id="bio" type="text" class="form-control"><label for="portrait">Author Image URL</label><input placeholder="URL" id="portrait" type="text" class="form-control"></div><center><button type="submit" name="submit" class="btn btn-default" id="submit">Submit<span class="glyphicons glyphicons-ok"></span></button><span>  </span><button type="button" name="cancel" class="btn btn-default" id="cancel">Cancel<span class="glyphicons glyphicons-remove"></span></button></center></form></section>');
      });
    };
  });
})
