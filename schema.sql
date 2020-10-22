drop database if exists greatbay;
create database greatbay;

use greatbay;

create table Items (
    id int auto_increment primary key,
    `name` varchar(255) not null,
    `description` text
);

create table Bids (
    id int auto_increment primary key,
    item_id int not null,
    amount decimal(19,4) not null,

    foreign key (item_id) 
        references Items(id)
        on delete cascade
);