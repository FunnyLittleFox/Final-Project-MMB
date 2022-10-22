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


/* ADD-TO-FAVORITES */ 
$q = "SELECT * FROM #__{vm}_favorites WHERE user_id ='$my->id' AND suppliers_id='$suppliers_id'" ;
      $db->query( $q );
      $db->next_record();
if ($db->f("user_id") < 1 ){
    if(!empty($_POST)) {
  $_POST['suppliers_id'] = addslashes($suppliers_id);
  $_POST['user_id'] = addslashes($user_id);


  $Sql = "INSERT INTO jos_vm_favorites SET suppliers_id='$suppliers_id', user_id='$my->id', fav_date=NOW()";
  $Query = mysql_query($Sql) or die("Niet geslaagd!");
  $addtofavorites = " this is a favorite";
} else {
$url= "index.php?page=shop.suppliers_details&amp;flypage=$flypage&amp;suppliers_id=$suppliers_id&category_id=$category_id&amp;manufacturer_id=0&amp;option=com_virtuemart&amp;Itemid=26";
   $user_id=$auth["user_id"];
   if ( $user_id == 0 ){
      $addtofavorites = " please log in to add this suppliers to your favorites";}
   
if ( $user_id > 0 ){
      $addtofavorites = "
<div class=\"addtofavorites\">
        <form method=\"post\" action=\"$url\" name=\"addtofavorites\" id=\"addtofavorites\">
<input type=\"submit\" class=\"addtofavoritesbutton\" value=\"".$VM_LANG->_PHPSHOP_CART_ADD_TO_FAVORITES ."\" title=\"".$VM_LANG->_PHPSHOP_CART_ADD_TO_FAVORITES."\" />
        <input type=\"hidden\" name=\"suppliers_id\" value=\"$suppliers_id\" />
        <input type=\"hidden\" name=\"user_id\" value=\"$my->id\" />

</form>
        </div>";}}

}
if ($db->f("user_id") > 1 ){ $addtofavorites = " this is a favorite";}
/* END ADD TO FAVORITES **/
