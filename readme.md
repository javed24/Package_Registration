<h1>Package Registration</h1>

This application works as a registration system for students to signup with their desired [NPM](https://www.npmjs.com/) package for the purpose of demonstration. It is a [single-page application](https://www.codeschool.com/beginners-guide-to-web-development/single-page-applications) written with Angular.

Once the application is loaded on a server, the user is greeted with the following landing page and a sign up prompt:

<!--insert home image link-->
![Home Page](https://i.imgur.com/LMituyu.png)

Upon signing up, the user is taken to the registration page. Entering the module/package name and website will create a new section for that particular module/package.

<!--insert batman/gotham image-->
![Enter Name](https://i.imgur.com/tKLULDy.png)

Multiple students can sign up for one specific module. For now, the upper limit is 4. If the number of students for a single module is more than 4, the application creates another section for said module. Alternatively, if a particular module has empty space and a student creates another module for that same module, the application assumes that this new student wants to present in another group and so it creates another section for the same module.

<!--insert gotham-section-2 image-->
![gotham-section-2](https://i.imgur.com/RfWafQL.png)

The users will be able to delete their names from the lists they were registered in. The groups, however, will still be there assuming there will be further students who sign up for that module. The `Remove Group` button will get rid of the module as well.

<!--insert students_deleted-->
![students_deleted](https://i.imgur.com/gxDJKZd.png)

<h3>Upcoming updates</h3>
* UI design
* Dynamic features within the application
* A login system for students  
