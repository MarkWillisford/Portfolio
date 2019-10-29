// creates nav li for each item. I want to abstract this so that I can use it on larger pages and pass content to it
function createNavBar() {
  let pages = ["Mark Willisford", "Projects", "About"];
  pages.forEach(function(i) {
    let liItem = $("<li><a id='" + pages.indexOf(i) +
      "' class='nav_Link'>" + i + "</a></li>");
    $('.nav_Links').append(liItem);
    liItem.click(function() {
      router(liItem);
    });
  });
}

// handles showing of content
function router(i) {
  if (i.text() === "Mark Willisford") {
    navAnimation('#0');
    showWelcome();
  } else if (i.text() === "Projects") {
    navAnimation('#1');
    showProjects();
  } else {
    navAnimation('#2');
    showAbout();
  }
}

function showWelcome() {
  $('.viewsWrapper').children().hide();
  $('.welcomeView').fadeIn();
  $('#projectsButton').click(function() {
    navAnimation('#1');
    showProjects();
  })
}

function showProjects() {
  $('.viewsWrapper').children().hide();
  $('.projectsView').fadeIn();
}

function showAbout() {
  $('.viewsWrapper').children().hide();
  $('.aboutMeView').fadeIn();
}

function navAnimation(selection) {
  if (selection === '#0') {
    $('#0').addClass('nav_Link_Current');
    $('#1, #2').removeClass('nav_Link_Current');
  } else if (selection === '#1') {
    $('#1').addClass('nav_Link_Current');
    $('#0, #2').removeClass('nav_Link_Current');
  } else {
    $('#2').addClass('nav_Link_Current');
    $('#0, #1').removeClass('nav_Link_Current');
  }
}

$(function() {
  var year = new Date().getFullYear()
  document.querySelector('footer p').innerHTML = '&copy; Mark Willisford ' + year

  createNavBar();
  navAnimation('#0');
  showWelcome();

  $('body').fadeIn().css({
    'display': 'block'
  });
});