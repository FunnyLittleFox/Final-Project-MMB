/* creating a table so user can favorite a supplier - marta  */
create table favorites (
    favoritesId int auto_increment primary key,
    userId,
    which varchar(255), 
    id int,
    foreign key (userId) references users(userId)
);

/* testing out user favorite. User has many favorites - marta */
class User extends Favorites {
  static associate({ Favorites }) {
    /* user and favorites */ 
    User.belongsTo(Favorites, {
      foreignKey: "user_id",
      as: "favorites"
    })
}
