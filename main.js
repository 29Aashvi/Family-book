var images = ["fam.jfif", "grandpa.jfif","father.jfif", "son.jfif" , "sis.jfif", "mom.jfif"];
           
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
