import './Basket.css';
import Ingredient from './Ingredient';

function Basket(){
    return(
        <div class="main_basket">
            <Ingredient ingredient_name={"Carrot"}/>
            <Ingredient ingredient_name={"Tomato"}/>
            <Ingredient ingredient_name={"Spinach"}/>
        </div>
    )
};

export default Basket;