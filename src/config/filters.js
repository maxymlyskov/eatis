import colors from "./colors";

export const categories = [
  {
    id: "1",
    text: "Breakfast",
    image: require("../../assets/imgs/breakfast.png"),
    bg: colors.green,
    link: "&type=breakfast",
  },
  {
    id: "2",
    text: "Salad",
    image: require("../../assets/imgs/salad.png"),
    bg: colors.purple,
    link: "&type=salad",
  },
  {
    id: "3",
    text: "Main",
    image: require("../../assets/imgs/dinner.png"),
    bg: colors.red,
    link: "&type=main course",
  },
  {
    id: "4",
    text: "Snack",
    image: require("../../assets/imgs/snack.png"),
    bg: colors.sgreen,
    link: "&type=snack",
  },
  {
    id: "5",
    text: "Dessert",
    image: require("../../assets/imgs/dessert.png"),
    bg: colors.orange,
    link: "&type=dessert",
  },
  {
    id: "6",
    text: "Drink",
    image: require("../../assets/imgs/drink.png"),
    bg: colors.grey,
    link: "&type=drink",
  },
  {
    id: "7",
    text: "Soup",
    image: require("../../assets/imgs/soup.png"),
    bg: colors.blue,
    link: "&type=soup",
  },
  {
    id: "8",
    text: "Sauce",
    image: require("../../assets/imgs/sauce.png"),
    bg: colors.salat,
    link: "&type=sauce",
  },
  {
    id: "9",
    text: "Beverage",
    image: require("../../assets/imgs/beverage.png"),
    bg: colors.yellow,
    link: "&type=beverage",
  },
];
export const diets = [
  {
    title: "Vegetarian",
    link: "&diet=vegetarian",
  },
  {
    title: "Ketogenic",
    link: "&diet=ketogenic",
  },
  {
    title: "Paleo",
    link: "&diet=paleo",
  },
  {
    title: "Whole30",
    link: "&diet=whole30",
  },
  {
    title: "Pesceterian",
    link: "&diet=pesceterian",
  },
  {
    title: "Lacto-Vegetarian",
    link: "&diet=Lacto-Vegetarian",
  },
  {
    title: "Low FODMAP",
    link: "&diet=Low FODMAP",
  },
  {
    title: "Ovo-Vegetarian",
    link: "&diet=Ovo-Vegetarian",
  },
  {
    title: "Vegan",
    link: "&diet=Vegan",
  },
  {
    title: "Primal",
    link: "&diet=primal",
  },
];
export const cuisines = [
  {
    title: "European",
    link: "&cuisine=European",
  },
  {
    title: "American",
    link: "&cuisine=American",
  },
  {
    title: "British",
    link: "&cuisine=British",
  },
  {
    title: "German",
    link: "&cuisine=German",
  },
  {
    title: "Chinese",
    link: "&cuisine=Chinese",
  },
  {
    title: "African",
    link: "&cuisine=African",
  },
  {
    title: "Italian",
    link: "&cuisine=Italian",
  },
  {
    title: "French",
    link: "&cuisine=French",
  },
  {
    title: "Japanese",
    link: "&cuisine=Japanese",
  },
  {
    title: "Caribbean",
    link: "&cuisine=Caribbean",
  },
  {
    title: "Mexican",
    link: "&cuisine=Mexican",
  },
  {
    title: "Indian",
    link: "&cuisine=Indian",
  },
  {
    title: "German",
    link: "&cuisine=German",
  },
  {
    title: "Jewish",
    link: "&cuisine=Jewish",
  },
  {
    title: "Greek",
    link: "&cuisine=Greek",
  },
  {
    title: "Thai",
    link: "&cuisine=Thai",
  },
];
export const intolerances = [
  {
    title: "Dairy",
    link: "&intolerances=Dairy",
  },
  {
    title: "Egg",
    link: "&intolerances=Egg",
  },
  {
    title: "Gluten",
    link: "&intolerances=Gluten",
  },
  {
    title: "Wheat",
    link: "&intolerances=Wheat",
  },
  {
    title: "Peanut",
    link: "&intolerances=Peanut",
  },
  {
    title: "Seafood",
    link: "&intolerances=Seafood",
  },
  {
    title: "Grain",
    link: "&intolerances=Grain",
  },
  {
    title: "Sesame",
    link: "&intolerances=Sesame",
  },
  {
    title: "Shellfish",
    link: "&intolerances=Shellfish",
  },
  {
    title: "Soy",
    link: "&intolerances=Soy",
  },
  {
    title: "Shellfish",
    link: "&intolerances=Shellfish",
  },
  {
    title: "Sulfite",
    link: "&intolerances=Sulfite",
  },
  {
    title: "Tree Nut",
    link: "&intolerances=Tree Nut",
  },
  {
    title: "Wheat",
    link: "&intolerances=Wheat",
  },
];
export const calories = [
  {
    title: "100",
    link: "&maxCalories=100",
  },
  {
    title: "200",
    link: "&maxCalories=200",
  },
  {
    title: "300",
    link: "&maxCalories=300",
  },
  {
    title: "500",
    link: "&maxCalories=100",
  },
  {
    title: "700",
    link: "&maxCalories=700",
  },
  {
    title: "1000",
    link: "&maxCalories=1000",
  },
];
export const times = [
  {
    title: "5",
    link: "&maxReadyTime=5",
  },
  {
    title: "10",
    link: "&maxReadyTime=10",
  },
  {
    title: "20",
    link: "&maxReadyTime=20",
  },
  {
    title: "30",
    link: "&maxReadyTime=30",
  },
  {
    title: "45",
    link: "&maxReadyTime=45",
  },
  {
    title: "60",
    link: "&maxReadyTime=60",
  },
  {
    title: "100",
    link: "&maxReadyTime=100",
  },
];
export const preferences = [
  {
    title: "Protein",
    link: "&minProtein=50",
  },
  {
    title: "Fat",
    link: "&minFat=30",
  },

  {
    title: "Carbs",
    link: "&minCarbs=100",
  },
  {
    title: "Vitamin A",
    link: "&minVitaminA=60",
  },
  {
    title: "Vitamin B",
    link: "&minVitaminB=60",
  },
  {
    title: "Vitamin C",
    link: "&minVitaminC=60",
  },
  {
    title: "Vitamin D",
    link: "&minVitaminD=60",
  },

  {
    title: "Zinc",
    link: "&minZinc=25",
  },
  {
    title: "Vitamin E",
    link: "&minVitaminE=25",
  },
  {
    title: "Sodium",
    link: "&minSodium=50",
  },
  {
    title: "Selenium",
    link: "&minSelenium=50",
  },
  {
    title: "Vitamin K",
    link: "&minVitaminK=25",
  },
];
