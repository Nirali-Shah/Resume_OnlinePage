 // Change the content on clicking
 //About Me Menu
  $(document).ready(function(){
    $("#nav_item_1").click(function(){
	  $(".banner__education").html("<img class='degree__image' src='img/self.jpg' alt='About me'>About Me");
      $("#item__1").html("Interest");
	  $("#sub_item_11").html("<p>My interest in web-design & development grown with the art and mathematics. In addition to that, the desire to work in new technologies pushed me to work harder to produce innovative solutions.</p>");
	  $("#sub_item_12").css("display", "none");

	  $("#item__2").css("display", "block");
	  $("#item__2").html("Advancement");
	  $("#sub_item_21").css("display", "block");
	  $("#sub_item_21").html("<p>My never ending quest helps me in learning advance features and new software. Also, demand for these latest technologies added valuable knowledge in my career.</p>");
	  $("#sub_item_22").css("display", "none");
	  $("#home__page").css("display", "block");
    });
  });
  
  //Experience Menu
   $(document).ready(function(){
    $("#nav_item_3").click(function(){
	  $(".banner__education").html("<img class='degree__image' src='img/experience.png' alt='Experience'>Experience");
      $("#item__1").html("Web-Developer");
	  $("#sub_item_11").html("<ul style='list-style-type:disc'><li><b>Company :</b> Kumbh Design</li><li><b>Tools :</b> HTML, CSS, JavaScript, PHP, MySQL, Joomla</li></ul><p>As a web-developer, I was involved in developing and managing the websites from gathering customer requirements to building & launching it on the web-server. My responsibilities included front-end designing of visually appealing, user-friendly and easy to navigate sites without any broken links, whereas back-end developing included forms and flawless customer database.</p>");
	  $("#sub_item_12").css("display", "none");
 
	  $("#item__2").css("display", "none");
	  $("#sub_item_21").css("display", "none");
	  $("#sub_item_22").css("display", "none");
	  $("#home__page").css("display", "block");
    });
  });
  
  //Tools Menu
   $(document).ready(function(){
    $("#nav_item_4").click(function(){
	  $(".banner__education").html("<img class='degree__image' src='img/tools.png' alt='Tools'>Tools");
      $("#item__1").html("Technical Skills");
	  $("#sub_item_11").html("<ul style='list-style-type:disc'><li><b>Programming Languages :</b> Java, Python, PHP, JavaScript, JQuery, HTML-5, CSS-3, C++, C</li><li><b>DBMS :</b> Oracle 8, MySQL, PL/SQL, MS Access</li><li><b>Applications :</b> MS Office, JIRA, Confluence, Git & GitHub, Subversion, IDE (Eclipse), IDE (MS Visual Basic 6.0), Crystal Report 8.5</li></ul>");
	  $("#sub_item_12").css("display", "none");

	  $("#item__2").css("display", "none");
	  $("#sub_item_21").css("display", "none");
	  $("#sub_item_22").css("display", "none");
	  $("#home__page").css("display", "block");
    });
  });
 
  //on click of menu button open the menu and again on click close the menu on iphones

  $(document).ready(function(){
	$(".header__menu").click(function(){
	  //$("nav").toggleClass("open");
	  $("nav").css("transform","translate(0,0)");
	  $("nav").fadeToggle("slow");
	});
  });

  //on click of hide menu 

  $(document).ready(function(){
    $(".nav__item").click(function(){
      var width = $(window).width();
	    if ( width <= 500)
		{
			$("nav").fadeToggle("slow");
		}
	});
  });

  //on window resize, window width greater than 500px would display menu as it was hidden when window size is less than 500px
  $(document).ready(function(){
    $(window).resize(function(){
		
	  var width = "";
	  width =  $(window).width();
	  if(width >500)
	    {
	      $("nav").show();
	    }
	  
	});
 });
