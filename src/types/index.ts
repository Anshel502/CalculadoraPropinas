

export type MenuItem = {
    id: number;
    name: string;
    price: number;
}

export type OrderItem = MenuItem & {
    quantity: number;
}
/*type MenuProps ={
Menu:MenuItem[]
decreaseQuantity:(item:number) => void,
increaseQuantity:(item:number) => void,
removeFromMenu:(item:number) => void,
emptyMenu:() => void
,isEmpty:boolean,total:Number;
*/

