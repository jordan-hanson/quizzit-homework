# RodeoQuiz
​
## Overview
​
The purpose of this application is to give users a 5 question quiz while keeping track of their score and rendering their time remaining based upon their answer choices.
​
### Gallery
​
Home:
![QuizVideo](./QuizVideo.mov "QuizVideo")

​
### Problem & Solution
​
My problemS I went through was having everything in one HTML and making it a back tick. That was something I was advised to do with innerHTML but I ran into a lot of problems because of my lack of knowledge to finish it that way. I decided to do multiple HTMLs and added a window.onload function and event listener to change my html location perclick. This was by far a very stressful and learning experience assignement so far that made me hate it LOL, but I am very glad I got it finished.
​
​
## Tech and Features Used
​
* Bootstrap
* Javascript
* AJAX
​
## How to use
​
1. Enter Name in Field and Click Start Quiz
2. Answer Questions.
3. Review Score at the End.
4. If you run out of time it will pull up a game over HTML to try again but starts you on just the first question, you don't have to resubmit your name.
5. After finishing your quiz click start a new quiz to start over.
​
## Technical Overview
​
1. The main component is my enterQuiz function. It renders the storage items of CurrentUserName, secondsLeft, and Score and continues it through each href page change.
2. Then the enterButton pulls the HTML Id adds a event listner to enter the quiz function above per each page.
3. The users info is then tracked throughout each question for an end Score and redo of quiz based upon the local storage score.


Link to example readme:
​
https://github.com/jordan-hanson/quizzit-homework