
describe('Chain locators Demo',function() 
{

    function Calc(a,b,c)
    {
       element(by.model("first")).sendKeys(a);
       element(by.model("second")).sendKeys(b);
       element(by.id("gobutton")).click();

       element.all(by.tagName("option")).each(function(item)
       {
           item.getAttribute("value").then(function(values)
           {
               if(values==c)
               {
                 item.click();
               }
            })  
       })

    }
   
       it('Locators',function() 
       {
       
       browser.get('http://juliemr.github.io/protractor-demo/');
       //repeter ,chain locators, and css for identicals tags
        
       Calc(2,3,"ADDITION");
       Calc(20,5,"DIVISION");
       Calc(60,7,"MODULO");
       Calc(8,9,"MULTIPLICATION");
       Calc(15,7,"SUBTRACTION");
       
       element.all(by.repeater("result in memory")).each(function(item)
       {
   
            item.getAttribute("td:nth-child(3)").then(function(text)
          {
              
             console.log(text);
          
          })  
 
       })
      
       
       
       })
       
      
})