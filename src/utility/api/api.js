import axios from "axios";

const baseDrinkUrl = axios.create({baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/' })


export const randomDrinks = () => baseDrinkUrl.get('filter.php?c=Cocktail').then(resp=>resp).catch(err=>console.log(err))
export const drinkDetail = (id_drink) => baseDrinkUrl.get(`lookup.php?i=${id_drink}`)