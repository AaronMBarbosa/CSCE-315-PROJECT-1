function toggleTheme() {
  // Obtains an array of all <link>
  // elements.
  // Select your element using indexing.
  var theme = document.getElementsByTagName('link')[0];

  // Change the value of href attribute 
  // to change the css sheet.
  if(theme.getAttribute('href') == 'none.css') {
    theme.setAttribute('href', style2.css);
  }
  if (theme.getAttribute('href') == 'style.css') {
      theme.setAttribute('href', 'style2.css');
      localStorage.setItem("src","style2.css");
  } else {
      theme.setAttribute('href', 'style.css');
      localStorage.setItem("src","style.css");
  }
}

window.onload = () => {
  if (localStorage.getItem("src") === null) {
    localStorage.setItem("src", "styles.css");
  } else {
    var theme = document.getElementsByTagName("link")[0];
    theme.setAttribute("href", localStorage.getItem("src"));
  }
};