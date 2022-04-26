describe('Protractor Testing',function() {
 // First parameter -Test Suit Name
 //Second Parameter -Function(Function will have all (it blocks ) )

 
 it('SatyaJit Testing protractor',function() {
   //Here we write our own code
  //Browser.get() will hit the url on the browser
  browser.get('http://juliemr.github.io/protractor-demo/');

  element(by.model("first")).sendKeys("3");
  element(by.model("second")).sendKeys("4");

   element(by.id("gobutton")).click();


   //Assertation
   //Jasmine takes care of promise resolve
   except(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

   element(by.css("h2[class='ng-binding']")).getText().then(function(text){

   console.log(text);


   })
   

  //Real Output will display only when you reslove the promise
  // protractor for 90% of method will reslove promise  automatically
  // Thare could be 2 potential probleams...1) sequence is not guaranteed

 })



})

