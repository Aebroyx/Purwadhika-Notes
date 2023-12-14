create database school_db;

show databases;

use school_db;

create table students (
	id int primary key,
	name varchar(255),
	gender enum('male', 'female') default NULL,
    address varchar(255),
    updated_at timestamp not null default current_timestamp on update current_timestamp
);

alter table students add birth_date date not NULL;

SELECT * FROM school_db.students;
DROP TABLE students;

insert into students (name, gender, address, birth_date)
values ("kelsey", 'female', 'bintaro', '2000-02-12');

-- values (1,"Kiki",'male',"bantarjati street", '1991-05-15');

-- values (2,"KohBed",'male',"Mars street", '1984-05-15'),
-- (3,"Nuel Boothcamp",'male',"Curug street", '2005-05-15'),
-- (4,"Very Hard",'male',"Surabaya street", '1991-05-15');

select id, name , gender, birth_date from students;
select * FROM students where gender = 'male';
select * FROM students where gender = 'female';
select * FROM students where birth_date < '1998-01-01';

select distinct(gender) from students;

select count(*) as students_gender_count , gender from students group by gender;
update students set name = 'kiki keren' where id = 1;
update students set name= 'kiki keren banget', address = 'kebayoran' where id =1;

-- delete from students where id = 5;

select min(grade), name from students;
SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));