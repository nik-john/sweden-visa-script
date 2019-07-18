module.exports = {
  'Test sweden visa status' : function (browser) {
      for (var i = 0; i< 999; i++) {
          browser
          .url('https://www.vfsglobal.se/india/track_application_2.html')
          .waitForElementVisible('body', 1000)
          .frame("FRAME1")
          .waitForElementVisible('input[id="ctl00_CPH_txtTrackingId"]', 1000)
          .setValue('input[id="ctl00_CPH_txtTrackingId"]', 'K7245292')
          .waitForElementVisible('input[id="ctl00_CPH_txtDOB_txtDate"]', 1000)
          .setValue('input[id="ctl00_CPH_txtDOB_txtDate"]', '14/12/1988')
          .waitForElementVisible('input[id="ctl00_CPH_btnDOB"]', 1000)
          .click('input[id="ctl00_CPH_btnDOB"]')
          .pause(3000)
          .waitForElementVisible('td.fnstatus > table > tbody > tr > td', 1000)
          .getText('td.fnstatus > table > tbody > tr > td', function(result){
            if(result.value.toLowerCase() !== browser.globals.status.toLowerCase()){
              console.log("\n\n\nThe status has fucking changed\n\n\n");
              browser
              .url('https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/#identifier')
              .waitForElementVisible('body', 1000)
              .waitForElementVisible('input#Email', 1000)
              .setValue('input#Email', 'jonva.nightfall')
              .click('input#next')
              .waitForElementVisible('input#Passwd', 1000)
              .setValue('input#Passwd', 'Jo50000000')
              .click('input#signIn')
              .pause(6000)
              .useXpath()
              .waitForElementVisible('//div[text()="COMPOSE"]', 1000)
              .click('//div[text()="COMPOSE"]')
              .waitForElementPresent('//textarea[@name="to"]', 1000)
              .setValue('//textarea[@name="to"]', 'jonva.nightfall@gmail.com; aparna.deepthi@gmail.com;')
              .waitForElementVisible('//input[@name="subjectbox"]', 1000)
              .setValue('//input[@name="subjectbox"]', "VISA STATUS HAS CHANGED!! " + result.value + new Date())
              .waitForElementVisible('//div[@class="gmail_signature"]', 1000)
              .setValue('//div[@class="gmail_signature"]', '')
              .waitForElementVisible('//div[@aria-label="Message Body"]', 1000)
              .setValue('//div[@aria-label="Message Body"]', '')
              .setValue('//div[@aria-label="Message Body"]', '\n\n\n\n\n' + result.value + '\n\n\n Love, \n\n Nikhilappam')
              .click('//div[text()="Send"]')
              .pause(2000)
              .end()
            }
            else{
              console.log("\n\n\nNo change in status so far\n\n\n");
            }
          });
      }
      browser.end();
  }
};