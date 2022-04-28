describe('Actions Demo',function()
{
    it('Open the site and check',function()
    {

     browser.get('http://posse.com/')

     element(by.module("UserInputQuary")).sendKeys("river");
     browser.action().mouseMove(element(by.module("locationQuary")).sendKeys("London")).perform();

     browser.actions.sendKeys(protractor.key.ARROW_DOWN).perform();
     //It will mouseover the details from the dropdown .
     browser.actions.sendKeys(protractor.key.ENTER).perform().then(function()
     {
         //When details are mouseover then user can perform the action.
         browser.sleep(5000);
         
         //Assertion will calculate the how many windows are open and will check with the browser
         except(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);

         element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
        element(by.css("a[ng-herf*='London/River Island']")).click().then(function()
        {
            //Showing the browser title before click on new tab
            browser.getTitle().then(function(title)
            {
               console.log(title+" Title of the page before switching");
            })

              browser.sleep(5000);

            browser.getAllWindowHandles().then(function(handels)
            {
              //In getAllWindowHandles protractor will check how many windows are currently open
              //Through getAllWindowHandles we get all the window handels and stored in "function(handels)"
              //"handel[0]" will be the parent window
              // When we change the index number then we switch to that perticular window
               browser.switchTo().window(handels[1]);
                
               //Showing the browser title after click on new tab
               browser.getTitle().then(function(title)
               {
                 console.log(title+" Title of the page after switching");
               })

            })
           
        })

     })
     
     






    })


})