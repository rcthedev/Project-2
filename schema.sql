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
CREATE TABLE questions (
    id int AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
    questions varchar(500) NOT NULL
);
CREATE TABLE q_a (
    id int AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
    QuestionID_fk int NOT NULL,
    UserID_fk int NOT NULL,
    FOREIGN KEY (UserID_fk) REFERENCES person(id),
	FOREIGN KEY (QuestionID_fk) REFERENCES questions(id),
    choices varchar(500)  NOT NULL
);
CREATE TABLE choices (
		id int AUTO_INCREMENT NOT NULL,
        PRIMARY KEY (id),
        QuestionID_fk int NOT NULL,
        UserID_fk int NOT NULL,
        FOREIGN KEY (QuestionID_fk) REFERENCES q_a(id),
        FOREIGN KEY (UserID_fk) REFERENCES q_a(id),
        decisions varchar(500) NOT NULL
);
USE user_profile_db;
INSERT INTO q_a (UserID_fk, QuestionID_fk, questions, choices) VALUES (1, 1, "Where do you feel most comfortable?", "hi");
INSERT INTO questions (questions) VALUES ("Where do you feel most comfortable?");
INSERT INTO questions (questions) VALUES ("Favorite type of food?");
INSERT INTO questions (questions) VALUES ("How do you spend your free time?");
INSERT INTO questions (questions) VALUES ("How would you describe yourself?");
INSERT INTO questions (questions) VALUES ("Time of Day?");
INSERT INTO questions (questions) VALUES ("Are you more of a take charge or go with the flow type of person?");
INSERT INTO questions (questions) VALUES ("What is your love language?");
INSERT INTO questions (questions) VALUES ("Before going on a date, I'm most likely doing?");
INSERT INTO q_a (choices) VALUES ("A) Indoors", "B) Night Out", "C) Outdoors");
INSERT INTO q_a (choices) VALUES ("A) Asian", "B) Mexican", "C) Italian", "D) American", "E) Vegetarian/Vegan", "F) Indian");
INSERT INTO q_a (chocies) VALUES ("A) Indoors", "B) Night Out", "C) Outdoors", "D) Day Trip");
INSERT INTO q_a (choices) VALUES ("A) Introvert", "B) Extrovert", "C) Free Spirit", "D) Reserved");
INSERT INTO q_a (choices) VALUES ("A) Mornings", "B) Evenings", "C) MidDay");
INSERT INTO q_a (choices) VALUES ("A) Take Charge", "B) Go with the Flow");
INSERT INTO q_a (choices) VALUES ("A) Words of Affirmation", "B) Acts of Service", "C) Recieveing Gifts", "D) Quality Time", "E) Physical Touch");
INSERT INTO q_a (choices) VALUES ("A) Playing Video Games", "B) Talking with Friends", "C) Working Out", "D) Reading a Book");
INSERT INTO choices (decisions) VALUES ("A) Indoors", "B) Night Out", "C) Outdoors");
INSERT INTO choices (decisions) VALUES ("A) Asian", "B) Mexican", "C) Italian", "D) American", "E) Vegetarian/Vegan", "F) Indian");
INSERT INTO choices (decisions) VALUES ("A) Indoors", "B) Night Out", "C) Outdoors", "D) Day Trip");
INSERT INTO choices (decisions) VALUES ("A) Introvert", "B) Extrovert", "C) Free Spirit", "D) Reserved");
INSERT INTO choices (decisions) VALUES ("A) Mornings", "B) Evenings", "C) MidDay");
INSERT INTO choices (decisions) VALUES ("A) Take Charge", "B) Go with the Flow");
INSERT INTO choices (decisions) VALUES ("A) Words of Affirmation", "B) Acts of Service", "C) Recieveing Gifts", "D) Quality Time", "E) Physical Touch");
INSERT INTO choices (decisions) VALUES ("A) Playing Video Games", "B) Talking with Friends", "C) Working Out", "D) Reading a Book");
INSERT INTO q_a SELECT * FROM questions;
INSERT INTO q_a SELECT * FROM person;
INSERT INTO choices SELECT * FROM q_a;

