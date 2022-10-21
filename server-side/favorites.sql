/* creating a table so user can favorite a supplier - marta  */
create table favorites (
    favoritesId int auto_increment primary key,
    userId,
    which varchar(255), 
    id int,
    foreign key (userId) references users(userId)
);
