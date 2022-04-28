
describe('Chain locators Demo',function() {

it('Testing Angular js Website',function() {

browser.get('http://juliemr.github.io/protractor-demo/');
//repeter ,chain locators, and css for identicals tags
 
element(by.model("first")).sendKeys("3");
element(by.model("second")).sendKeys("4");
element(by.id("gobutton")).click();


element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
{  
     //Here we use pareant and child concept for finding the element
     //by.repeater will capture all the html document as a parent 
     //And by.css will find the perticular element from that html document
     
console.log(text);

})




})

})