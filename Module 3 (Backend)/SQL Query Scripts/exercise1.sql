-- Exercise 1
CREATE DATABASE purwadhika_student;
CREATE DATABASE purwadhika_schedule;
CREATE DATABASE purwadhika_branch;

SHOW DATABASES LIKE 'purwadhika%';

DROP DATABASE purwadhika_schedule;

USE purwadhika_student;

CREATE TABLE students (
	id int,
    last_name varchar(255),
    first_name varchar(255),
    address varchar(255),
    city varchar(255)
);

ALTER TABLE students
ADD email varchar(255);

ALTER TABLE students
ADD (
	gender enum('male', 'female'),
	batch_code varchar(255),
	phone_number varchar(255),
	alternative_phone_number varchar(255)
);

ALTER TABLE students
RENAME COLUMN alternative_phone_number to description;

ALTER TABLE students
DROP COLUMN gender;


-- Exercise 2
use purwadhika_branch;
create table branches (
	id int primary key AUTO_INCREMENT,
    branch_name varchar(3),
    pic varchar(255),
    address varchar(255),
    city varchar(255),
    province varchar(255)
);

select * from branches;

insert into branches (branch_name, pic, address, city, province)
values ('BSD', 'THOMAS', 'GREEN OFFICE PARK 9', 'BSD', 'TANGERANG SELATAN'),
('JKT', 'BUDI', 'MSIG TOWER', 'JAKARTA SELATAN', 'JAKARTA'),
('BTM', 'ANGEL', 'NONGSA', 'BATAM', 'KAB. RIAU');

SET SQL_SAFE_UPDATES = 0;

UPDATE branches SET pic = 'DONO' WHERE city = 'BSD';

insert into branches (branch_name, pic, address, city, province)
values ('BLI', 'TONO', 'GANYAR', 'GIANYAR', 'BALI');