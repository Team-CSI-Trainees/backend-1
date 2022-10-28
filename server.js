const express = require ('express')
const app = express()
 app.set ('view engine', 'ejs')
const homeStartingContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat mi nisi, ut lacinia magna convallis vel. Nam pretium, enim a posuere porta, diam ante condimentum est, porta tincidunt sem ante vitae felis.Curabitur et aliquet mauris, vitae viverra nunc. Donec vulputate nisi diam, vitae consectetur arcu rutrum eget. Duis sed facilisis dolor, non dignissim sapien. Mauris sed neque congue, rhoncus sapien id, pretium ipsum. Curabitur scelerisque, velit vitae volutpat iaculis, turpis quam hendrerit magna, eu suscipit diam tellus non ligula. Ut eleifend dignissim ligula id fermentum. Curabitur interdum, lacus id pulvinar imperdiet, libero mi facilisis turpis, dignissim elementum dui nunc at purus. Cras nec porta dui. Sed eget imperdiet nunc. Phasellus condimentum at lectus vitae euismod."


 app.get('/',(req,res)=>{
    res.render('Home',{startingcontent: homeStartingContent});
    

})
app.listen(5000)
 