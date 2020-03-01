-- Drops the database if it already exsists --
DROP DATABASE IF EXISTS  user_profile_db;

-- Created DB "user_profile_db" --
CREATE DATABASE user_profile_db;
USE user_profile_db;
-- Created the table "questions" --
CREATE TABLE person (
    id int AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
    username varchar(40) NOT NULL,
    pass varchar(200)  NOT NULL
);
USE user_profile_db;
CREATE TABLE questions (
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
    question VARCHAR(500) NOT NULL
);

USE user_profile_db;
CREATE TABLE q_a (
    id int AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
    QuestionID_fk int NOT NULL,
	FOREIGN KEY (QuestionID_fk) REFERENCES questions(id),
    choice1 varchar(200)  NOT NULL,
    choice2 varchar(200)  NOT NULL,
    choice3 varchar(200),
    choice4 varchar(200),
    choice5 varchar(200),
    choice6 varchar(200)
    
);

use user_profile_db;
CREATE TABLE choices (
		id int AUTO_INCREMENT NOT NULL,
        PRIMARY KEY (id),
        QuestionID_fk int NOT NULL,
        UserID_fk int,
        FOREIGN KEY (QuestionID_fk) REFERENCES q_a(id),
        FOREIGN KEY (UserID_fk) REFERENCES person(id),
        decision1 varchar(200) NOT NULL,
        decision2 varchar(200) NOT NULL,
        decision3 varchar(200),
        decision4 varchar(200),
        decision5 varchar(200),
        decision6 varchar(200),
        decision7 varchar(200) 
);
 
-- INSERT INTO q_a (UserID_fk, QuestionID_fk, questions, choices) VALUES (1, 1, "Where do you feel most comfortable?", "hi");
use user_profile_db;
INSERT INTO questions (question) VALUES ("Where do you feel most comfortable?");
INSERT INTO questions (question) VALUES ("Favorite type of food?");
INSERT INTO questions (question) VALUES ("How do you spend your free time?");
INSERT INTO questions (question) VALUES ("How would you describe yourself?");
INSERT INTO questions (question) VALUES ("Time of Day?");
INSERT INTO questions (question) VALUES ("Are you more of a take charge or go with the flow type of person?");
INSERT INTO questions (question) VALUES ("What is your love language?");
INSERT INTO questions (question) VALUES ("Before going on a date, I'm most likely doing?");

USE user_profile_db;
INSERT INTO q_a (QuestionID_fk, choice1, choice2, choice3) VALUES (1,"A) Indoors", "B) Night Out", "C) Outdoors");
INSERT INTO q_a (QuestionID_fk, choice1, choice2, choice3, choice4, choice5, choice6) VALUES (2,"A) Asian", "B) Mexican", "C) Italian", "D) American", "E) Vegetarian/Vegan", "F) Indian");
INSERT INTO q_a (QuestionID_fk, choice1, choice2, choice3, choice4) VALUES (3,"A) Indoors", "B) Night Out", "C) Outdoors", "D) Day Trip");
INSERT INTO q_a (QuestionID_fk, choice1, choice2, choice3, choice4) VALUES (4,"A) Introvert", "B) Extrovert", "C) Free Spirit", "D) Reserved");
INSERT INTO q_a (QuestionID_fk, choice1, choice2, choice3) VALUES (5,"A) Mornings", "B) Evenings", "C) MidDay");
INSERT INTO q_a (QuestionID_fk, choice1, choice2) VALUES (6,"A) Take Charge", "B) Go with the Flow");
INSERT INTO q_a (QuestionID_fk, choice1, choice2, choice3, choice4, choice5) VALUES (7,"A) Words of Affirmation", "B) Acts of Service", "C) Recieveing Gifts", "D) Quality Time", "E) Physical Touch");
INSERT INTO q_a (QuestionID_fk, choice1, choice2, choice3, choice4) VALUES (8,"A) Playing Video Games", "B) Talking with Friends", "C) Working Out", "D) Reading a Book");

USE user_profile_db;
INSERT INTO choices (QuestionID_fk, UserID_fk, decision1, decision2, decision3) VALUES (1, NULL, "A) Indoors", "B) Night Out", "C) Outdoors");
INSERT INTO choices (QuestionID_fk, UserID_fk, decision1, decision2, decision3, decision4, decision5, decision6) VALUES (2, NULL, "A) Asian", "B) Mexican", "C) Italian", "D) American", "E) Vegetarian/Vegan", "F) Indian");
INSERT INTO choices (QuestionID_fk, UserID_fk, decision1, decision2, decision3, decision4) VALUES (3, NULL, "A) Indoors", "B) Night Out", "C) Outdoors", "D) Day Trip");
INSERT INTO choices (QuestionID_fk, UserID_fk, decision1, decision2, decision3, decision4) VALUES (4, NULL, "A) Introvert", "B) Extrovert", "C) Free Spirit", "D) Reserved");
INSERT INTO choices (QuestionID_fk, UserID_fk, decision1, decision2, decision3) VALUES (5, NULL, "A) Mornings", "B) Evenings", "C) MidDay");
INSERT INTO choices (QuestionID_fk, UserID_fk, decision1, decision2) VALUES (6, NULL, "A) Take Charge", "B) Go with the Flow");
INSERT INTO choices (QuestionID_fk, UserID_fk, decision1, decision2, decision3, decision4, decision5) VALUES (7, NULL, "A) Words of Affirmation", "B) Acts of Service", "C) Recieveing Gifts", "D) Quality Time", "E) Physical Touch");
INSERT INTO choices (QuestionID_fk, UserID_fk, decision1, decision2, decision3, decision4) VALUES (8, NULL, "A) Playing Video Games", "B) Talking with Friends", "C) Working Out", "D) Reading a Book");



