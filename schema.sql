drop database if exists greatbay;
create database greatbay;

use greatbay;

create table Items (
    id int auto_increment primary key,
    `name` varchar(255) not null,
    category varchar(255),
    postValue decimal(19,4)
);

create table Bids (
    id int auto_increment primary key,
    itemId int not null,
    amount decimal(19,4) not null,

    foreign key (itemId) 
        references Items(id)
        on delete cascade
);