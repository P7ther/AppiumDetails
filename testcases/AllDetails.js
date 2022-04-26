
describe('Chain locators Demo',function() {

 function Add(a,b)
 {
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);
    element(by.id("gobutton")).click();
 }

    it('Locators',function() {
    
    browser.get('http://juliemr.github.io/protractor-demo/');
    //repeter ,chain locators, and css for identicals tags
     
    Add(2,3);
    Add(4,5);
    Add(6,7);
    Add(8,9);
    Add(5,7);
    
    element.all(by.repeater("result in memory")).count().then(function(text){

        console.log(text);

    })
    
    element.all(by.repeater("result in memory")).each(function(item){

        item.element(by.css("td:nth-child(3)")).getText().then(function(text){

            console.log(text);
        })

    })
    
    
    })
    
    })