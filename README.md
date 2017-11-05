# Journey Builder Activity Template
### Starter template for a messaging JB Activity using Node.JS

**NOTE:** This app and the associated code is NOT production quality, its pure purpose is to demonstrate the full flow of custom interactions in Journey Builder

### Pre-Requisites

* Node.js (if you'd like to test locally)
* A Marketing Cloud Account with Journey Builder
* A publicly accessible web server (this template was built using a free [Heroku](https://heroku.com) account with SSL support
* An [App Center](https://appcenter-auth.s1.marketingcloudapps.com) account (you'll need to register if you don't have an account already)

### Getting Started

#### Configure web server 
This guide covers Heroku, skip this step if you are familiar on how to deploy a Node.js app

1. Clone this repository
2. Login into [Heroku](https://heroku.com)
3. Click on New > Create new app
4. Give a name to the app and click on "Create App"
5. Choose your preferred Deployment method (Github or Heroku Cli are nice to work with) 
6. Click on "Deploy branch"
7. Once your branch is deployed, click on the "View" button and verify you see the welcome message

#### Configure App Center

1. Login or create an account in [App Center](https://appcenter-auth.s1.marketingcloudapps.com)
2. Select "Create New App" and then select "Package"
3. Enter a Name and Package information
4. Enter Login URL as [url of your activity]/login
5. Enter Logout URL as [url of your activity]/logout
6. Enter Redirect URL as [url of your activity]
7. Click "Next" to go to the Integrate tab
8. Select Producton or Sandbox based on the type of account your activity will live in and click on "Integrate"
9. Login into your Marketing Cloud account and select the Business Unit you'd like to integrate this package with and click "Next" when done
10. Select propper data access for your integration
11. **Copy the App Signature value from the Summary page and save it for later**
12. Go to the Journey Builder activity tab and click on the plus sign
13. Provide a Name for your activity
14. Provide a unique value for Key, it can be a random GUID. **Copy this value and save for later**
15. Enter [url of your activity] as your Endpoint URL
16. Enter [url of your activity]/help as your help URL
17. Select "Messaging" for category
18. Click on "Save Changes"

#### Configure Activity

1. Open /public/config.json and:
* Replace __application_key_from_appcenter_here__ for the value you got from step 14 from the previous section
* Replace [your-domain-here] with the domain for your website
2. Open /public/images and replace with the icons for the activity to your liking

#### Add Heroku vars

1. Log back into Heroku and navigate to your app
2. Click on "Settings"
3. Click on "Reveal config vars"
4. Add a new var called jwtSecret and paste the App Signature you got from step 11 when configuring App Center

#### Testing your Activity

1. Login into Marketing Cloud and navigate to Journey Builder
2. You should be able to see your custom activity and drag it into the canvas!

#### Want to learn more?

If you'd like to learn more about building custom Journey Builder Activities and our collection of Custom Activities available to you today, email us at [info@devsutd.com](mailto:info@devsutd.com)

Also, follow us on [LinkedIn](https://www.linkedin.com/company/10701607/) to get the latest updates and great articles about Salesforce Marketing Cloud!