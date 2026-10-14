 type  MenuItem = {
    
    id: number;
    name: string;
    price: number;
   
} 

type CartItem = MenuItem&{
    
  quantity: number
} 

type OrderItem = {
    menuItems: MenuItem,
    handlerClick: (item:MenuItem) => void,
    
}


type MenuProps ={
Menu:MenuItem[]
decreaseQuantity:(item:number) => void,
increaseQuantity:(item:number) => void,
removeFromMenu:(item:number) => void,
emptyMenu:() => void
,isEmpty:boolean,total:Number;

}
