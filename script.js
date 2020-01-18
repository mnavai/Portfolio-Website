function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  function clickButton () {
        $(".js-intro").on("click", ".myButton", function (e) {
        e.preventDefault();
        $('.js-intro').hide();
        $('.js-project').show();
      
      });
  }
  
  $(".clickAbout").on("click", function( e ) {
      
      e.preventDefault();
      $('.js-project').hide();
      $('.js-resume').hide();
      $('.js-contact').hide();
      $('.js-design').hide();
      $('.js-intro').show();
         
  });
  
  $(".clickPortfolio").on("click", function( e ) {
      
      e.preventDefault();
      $('.js-intro').hide();
      $('.js-resume').hide();
      $('.js-contact').hide();
      $('.js-design').hide();
      $('.js-project').show();
         
  });
  
  
  $(".clickResume").on("click", function( e ) {
      
      e.preventDefault();
      $('.js-intro').hide();
      $('.js-contact').hide();
      $('.js-design').hide();
      $('.js-project').hide();
      $('.js-resume').show();
      $('.js-resume').prepend(displayResume());
      
  });
  
  
  function displayResume(){
  
    return `<div>
    <h4>Education</h4>
    <p class="experience-text">
      <b>
        BA in Game Design - LAC - NC USA
        <br />
        BSc in Computer Science - AUST - UAE
        <br />
        MS in Software Engineering - ECU - NC, USA
        <br />
      </b>
    </p>
    <hr /><h4>Experience</h4><P><b>Graphic Artist</b><br /><i>Thee Digital/Raleigh, NC/August 2019 - Present</i><br />Collateral Design, Layout Design for web and print, Logo 3D Modeling</p><P><b>Graphic Designer</b><br /><i>Primetime Business Solutions/Raleigh, NC/January 2018 to June 2019</i><br />Package Design, Logo Design, Collateral Design</div>`;
  }
  
  function runAll() {
    
      $('.js-project').html('<div class="projectPage"><p>Please check out my portfolio</p><img src="images/MarvelFinder.jpg" height="481" width="700" /><h3>Using this app, users can find Marvel Comic publications during a certain period of time (user specified).</h3><h3>Technologies used: HTML, CSS, JavaScript, Query, JSON, Public Marvel Comic API </h3><a href="https://github.com/mnavai/Short-Quiz-App">Repo</a>|<a href="https://api-hack-capstone-comics-finder--mnavai.repl.co/">Demo</a><hr style="border-top: dotted 1px;" /><img src="images/QuizApp.jpg" height="481" width="700" /><h3>This a fun, short quiz that test your general knowledge</h3><h3>Technologies used: HTML, CSS, JavaScript & jQuery </h3><a href="https://github.com/mnavai/Short-Quiz-App">Repo</a>|<a href="https://quizapp--mnavai.repl.co/">Demo</a></div>');
  
    $('.js-project').hide();
    clickButton();
    displayResume();
  }
  
  $(runAll);