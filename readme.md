# 10_Team_Profile_Generator_NN
BootCamp Homework - 10 Object-Oriented Programming: Team Profile Generator

## The Challenge
Our task is to build a Node.js command-line application that takes in information about employees on a software engineering team using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4), then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so we'll also write a unit test for every part of our code and ensure that it passes each test. 

We can test the application by invoking the following command: 
```bash
npm test
```

The application will be invoked by using the following command:

```bash
node index.js
```



![](./assets/img/front.PNG)
![](./assets/img/front2.PNG)

[LINK TO THE VIDEO](https://drive.google.com/file/d/1Ci7bxKG6iobPDpliKT8-6gBYTkCGsD5i/view)


## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
``` 

## The Process
To satisfy the criteria, we had to:
- Install inquirer package
- Create index javascript file prompting input for users
- Create generateHTML javascript file writing data to generated HTML file
- Create class for each team member
- Create test for each class
- Stylize with bootstrap

Specific functions of index.js:

Order of operation when running node index
```javascript
managerStart()
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  team.splice(team.length-1, 0, manager.getHTML());
  teamProfile();
});
```

Retrieve and push data to generate HTML roster
```javascript
function printHTML(team){
  fs.writeFile("team.html", team.toString(), (err) => {
    if(err) {
      throw err;
    };
    console.log("Team formulated. Loading roster...");
  });
  setTimeout(() => {
  open("Team.html");
   console.log("Your roster has been made!");
  }, "1500")
  };
```

Specific functions of generateHTML.js

```javascript
const compHeader = function () {
    return `header of team roster with cdn links`
};

const compManager = function (data) {
    return `manager card with ${data.name}, ${data.id}, mailable ${data.email}, and ${data.officeNumber}`
};

const compEngineer = function (data) {
    return `engineer card with ${data.name}, ${data.id}, mailable ${data.email}, and openable ${data.github}`
};

const compIntern = function (data) {
    return `intern card with ${data.name}, ${data.id}, mailable ${data.email}, and ${data.school}`
};

const compFooter = function () {
    return `footer of team roster with jQuery and sortable function`
};
```

## The Result
After dynamically coding our prompts along with our helper function to generate HTML, we were able to provide an engaging, efficient, and stuctured Node.js application that generates a team profile.

## Submission
This project was uploaded to GitHub at the following repository link:
[https://github.com/nhanng19/team_generator](https://github.com/nhanng19/team_generator)

Walkthrough video: [https://drive.google.com/file/d/1Ci7bxKG6iobPDpliKT8-6gBYTkCGsD5i/view](https://drive.google.com/file/d/1Ci7bxKG6iobPDpliKT8-6gBYTkCGsD5i/view)
