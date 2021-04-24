# Journey Builder Activity Template
### Starter template for a messaging JB Activity using Node.JS

**NOTE:** This app and the associated code is NOT production quality, its pure purpose is to demonstrate the full flow of custom interactions in Journey Builder

### Pre-Requisites

* Node.js (if you'd like to test locally)
* A Marketing Cloud Account with Journey Builder
* A publicly accessible web server (this template was built using a free [Heroku](https://heroku.com) account with SSL support

### Getting Started

#### Step 1. Configure web server 
This guide covers Heroku, skip this step if you are familiar on how to deploy a Node.js app

1. Fork and Clone this repository
2. Login into [Heroku](https://heroku.com)
3. Click on New > Create new app
4. Give a name to the app and click on "Create App"
5. Choose your preferred deployment method (Github or Heroku Cli are nice to work with) 
6. Deploy your code based on the selected deployment method
7. Once your code is deployed, click on the "View" button and verify you see the welcome message

#### Step 2. Configure your package in Marketing Cloud

1. Login to Marketing Cloud and Navigate to Setup > Apps > Installed Packages
2. Click on New and enter a name and a description for your package
3. **Copy the JWT Secret value from the Summary section and save it for later**
4. Click on Add Component, select Journey Builder Activity and Click next
5. Enter the information about the activity, enter [url of your activity] as your Endpoint URL
6. Click Save
7. **Copy the Unique Key value from the Journey Builder Activity panel and save it for later**

#### Step 3. Configure Activity

1. Open /public/config.json and:
* Replace <your-domain-here> with the domain for your website
2. Open /public/images and replace with the icons for the activity to your liking

#### Step 4. Add Heroku vars

1. Log back into Heroku and navigate to your app
2. Click on "Settings"
3. Click on "Reveal config vars"
4. Add a new var called jwtSecret and paste the App Signature you got from step 3 when configuring your package in Marketing Cloud

#### Step 5. Testing your Activity

1. Login into Marketing Cloud and navigate to Journey Builder
2. You should be able to see your custom activity and drag it into the canvas!

### Want to learn more?

If you'd like to learn more about building custom Journey Builder Activities and our collection of Custom Activities available to you today, email us at [info@devsutd.com](mailto:info@devsutd.com)

Also, follow us on [LinkedIn](https://www.linkedin.com/company/10701607/) to get the latest updates and great articles about Salesforce Marketing Cloud!
