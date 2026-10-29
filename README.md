\# Student Event Management System



\## 1. Project Description

The Student Event Management System is a simple web application designed to help students view upcoming college events and register for them. It provides event details such as event name, date, and venue, along with a student registration form.



This project demonstrates the use of Git branches and merging to manage development of different features independently.



\## 2. Objectives

\- To develop a basic Student Event Management System.

\- To understand Git repository initialization and commits.

\- To create and manage multiple Git branches.

\- To merge feature branches into the main branch.

\- To understand and resolve Git merge conflicts.



\## 3. Technologies Used

\- HTML – Structure of the website

\- CSS – Styling and layout

\- JavaScript – Event display and registration functionality

\- Git – Version control and branch management



\## 4. Features

\- Display upcoming college events.

\- Show event dates and venues.

\- Provide a student registration form.

\- Display a registration confirmation message.

\- Use separate Git branches for individual features.



\## 5. Project Structure

```text

Student-Event-Management-System/

├── index.html

├── style.css

├── script.js

└── README.md

```



\## 6. Git Branching Strategy



The following branches are used in this project:



\- `main` – Contains the integrated project.

\- `feature/events` – Implements the upcoming events listing.

\- `feature/register` – Implements the student registration form.

\- `feature/design` – Implements the website styling.



Each feature is developed in a separate branch and merged into the main branch after implementation.



\## 7. Git Commands Used



\### Step 1: Initialize the Repository

```bash

git init

git branch -M main

git add .

git commit -m "Initial project setup"

```



\### Step 2: Create the Events Branch

```bash

git switch -c feature/events

git add script.js

git commit -m "Add upcoming event listings"

```



\### Step 3: Create the Registration Branch

```bash

git switch main

git switch -c feature/register

git add index.html script.js

git commit -m "Add student event registration"

```



\### Step 4: Create the Design Branch

```bash

git switch main

git switch -c feature/design

git add style.css

git commit -m "Style the event management website"

```



\### Step 5: Merge Feature Branches

```bash

git switch main

git merge feature/events

git merge feature/register

git merge feature/design

```



If a merge conflict occurs, resolve it manually, stage the corrected files, and complete the merge as needed.



\### Step 6: Verify the Repository

```bash

git branch

git log --oneline --graph --all

git status

```



\## 8. How to Run the Project

1\. Download or clone the project repository.

2\. Open the project folder in Visual Studio Code.

3\. Open `index.html` in a web browser.

4\. View the available college events.

5\. Fill in the registration form and submit it to see the confirmation message.



\## 9. Learning Outcomes

\- Understanding Git initialization and commits.

\- Creating and switching between feature branches.

\- Merging branches into the main branch.

\- Understanding merge conflicts and their resolution.

\- Developing a basic web application using HTML, CSS, and JavaScript.



\## 10. Conclusion

The Student Event Management System demonstrates how Git branching and merging can be used to organize software development. Separate branches allow features to be developed independently and then integrated into the main project, improving code organization and collaboration.



