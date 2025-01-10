export interface Product {
    id: number;
    name: string;
    price: number;
    price2?: number;
    rating?: number;
    image: string;
    category: string;
    sell?: string;
    slug: string;
  }
  
  export const products: Product[] = [
    { id: 1, name: 'Fresh Lime', price: 38.00, price2: 45.00, image: '/shoplist/p1.png', category: 'Sandwiches', slug: 'fresh-lime' },
    { id: 2, name: 'Chocolate Muffin', price: 15.99, image: '/shoplist/p2.png', category: 'Burger', sell: 'Sell', slug: 'chocolate-muffin' },
    { id: 3, name: 'Burger', price: 18.99, price2: 45.00, image: '/shoplist/p3.png', category: 'Pizza', slug: 'burger' },
    { id: 4, name: 'Country Burger', price: 24.99, image: '/shoplist/p4.png', category: 'Sushi', slug: 'country-burger' },
    { id: 5, name: 'Drink', price: 14.99, price2: 45.00, image: '/shoplist/p5.png', category: 'Noodles', slug: 'drink' },
    { id: 6, name: 'Pizza', price: 16.99, rating: 4.6, image: '/shoplist/p6.png', category: 'Chicken', slug: 'pizza' },
    { id: 7, name: 'Cheese Butter', price: 11.99, image: '/shoplist/p7.png', category: 'Sandwiches', slug: 'cheese-butter' },
    { id: 8, name: 'Sandwiches', price: 19.99, image: '/shoplist/p8.png', category: 'Pizza', slug: 'sandwiches' },
    { id: 9, name: 'Chicken Chup', price: 22.99, image: '/shoplist/p9.png', category: 'Sushi', sell: 'Sell', slug: 'chicken-chup' },
    { id: 10, name: 'Country Burger', price: 13.99, image: '/shoplist/p4.png', category: 'Noodles', slug: 'country-burger-2' },
    { id: 11, name: 'Drink', price: 14.99, price2: 45.00, image: '/shoplist/p5.png', category: 'Burger', slug: 'drink-2' },
    { id: 12, name: 'Pizza', price: 13.99, rating: 4.2, image: '/shoplist/p6.png', category: 'Chicken', slug: 'pizza-2' },
    { id: 13, name: 'Cheese Butter', price: 13.99, image: '/shoplist/p7.png', category: 'Chicken', slug: 'cheese-butter-2' },
    { id: 14, name: 'Sandwiches', price: 13.99, image: '/shoplist/p8.png', category: 'Chicken', slug: 'sandwiches-2' },
    { id: 15, name: 'Chicken Chup', price: 13.99, image: '/shoplist/p9.png', category: 'Chicken', slug: 'chicken-chup-2' },
  ];
  
  export const categories = ['Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 'Pizza', 'Thi', 'Non Veg', 'Uncategorized'];
  
  export const latestProducts = [
    { id: 1, name: 'Pizza', price: 35.00, rating: 2, image: '/shoplist/latest-product.png', slug: 'latest-pizza' },
    { id: 2, name: 'Cupcake', price: 35.00, rating: 2, image: '/shoplist/latest-product.png', slug: 'latest-cupcake' },
    { id: 3, name: 'Cookies', price: 35.00, rating: 2, image: '/shoplist/latest-product.png', slug: 'latest-cookies' },
    { id: 4, name: 'Burger', price: 35.00, rating: 2, image: '/shoplist/latest-product.png', slug: 'latest-burger' },
  ];
  
  export const dataExport =
  [
    {
      "name": "Margherita Pizza",
      "id": "001",
      "slug": "margherita-pizza",
      "image": { "url": "images/margherita-pizza.jpg", "alt": "Margherita Pizza" },
      "category": "Pizza",
      "price": 8.99,
      "price2": 10.99,
      "rating": 4.8,
      "sell": "bestseller",
      "description": "Classic Margherita pizza topped with fresh tomatoes, mozzarella, and basil."
    },
    {
      "name": "Spaghetti Carbonara",
      "id": "002",
      "slug": "spaghetti-carbonara",
      "image": { "url": "images/spaghetti-carbonara.jpg", "alt": "Spaghetti Carbonara" },
      "category": "Pasta",
      "price": 10.99,
      "price2": 15.99,
      "rating": 4.6,
      "description": "Creamy pasta with pancetta, Parmesan, and a hint of garlic."
    },
    {
      "name": "Chicken Caesar Salad",
      "id": "003",
      "slug": "chicken-caesar-salad",
      "image": { "url": "images/chicken-caesar-salad.jpg", "alt": "Chicken Caesar Salad" },
      "category": "Salads",
      "price": 9.99,
      "price2": 12.99,
      "rating": 4.4,
      "description": "Grilled chicken breast served on crispy romaine lettuce with Caesar dressing."
    },
    {
      "name": "Cheeseburger",
      "id": "004",
      "slug": "cheeseburger",
      "image": { "url": "images/cheeseburger.jpg", "alt": "Cheeseburger" },
      "category": "Burgers",
      "price": 7.99,
      "price2": 9.99,
      "rating": 4.7,
      "sell": "popular",
      "description": "Juicy beef patty with melted cheddar, lettuce, tomato, and special sauce."
    },
    {
      "name": "Pepperoni Pizza",
      "id": "005",
      "slug": "pepperoni-pizza",
      "image": { "url": "images/pepperoni-pizza.jpg", "alt": "Pepperoni Pizza" },
      "category": "Pizza",
      "price": 9.99,
      "price2": 15.99,
      "rating": 4.5,
      "sell": "popular",
      "description": "Classic pizza topped with pepperoni and mozzarella cheese."
    },
    {
      "name": "Veggie Delight Sandwich",
      "id": "006",
      "slug": "veggie-delight-sandwich",
      "image": { "url": "images/veggie-delight-sandwich.jpg", "alt": "Veggie Delight Sandwich" },
      "category": "Sandwiches",
      "price": 5.99,
      "price2": 8.99,
      "rating": 4.3,
      "description": "A healthy mix of fresh vegetables on multigrain bread."
    },
    {
      "name": "Chocolate Lava Cake",
      "id": "007",
      "slug": "chocolate-lava-cake",
      "image": { "url": "images/chocolate-lava-cake.jpg", "alt": "Chocolate Lava Cake" },
      "category": "Desserts",
      "price": 6.99,
      "price2": 9.99,
      "rating": 4.9,
      "sell": "bestseller",
      "description": "Rich chocolate cake with a molten chocolate center."
    },
    {
      "name": "Grilled Salmon",
      "id": "008",
      "slug": "grilled-salmon",
      "image": { "url": "images/grilled-salmon.jpg", "alt": "Grilled Salmon" },
      "category": "Seafood",
      "price": 14.99,
      "price2": 20.99,
      "rating": 4.7,
      "description": "Perfectly grilled salmon served with a side of roasted vegetables."
    },
    {
      "name": "Tandoori Chicken",
      "id": "009",
      "slug": "tandoori-chicken",
      "image": { "url": "images/tandoori-chicken.jpg", "alt": "Tandoori Chicken" },
      "category": "Indian",
      "price": 12.99,
      "price2": 16.99,
      "rating": 4.8,
      "description": "Traditional Indian dish marinated in spices and cooked in a tandoor."
    },
    {
      "name": "Vegetable Stir Fry",
      "id": "010",
      "slug": "vegetable-stir-fry",
      "image": { "url": "images/vegetable-stir-fry.jpg", "alt": "Vegetable Stir Fry" },
      "category": "Asian",
      "price": 8.99,
      "price2": 12.99,
      "rating": 4.4,
      "description": "Fresh vegetables stir-fried in a savory sauce."
    },
    {
      "name": "Prawn Curry",
      "id": "011",
      "slug": "prawn-curry",
      "image": { "url": "images/prawn-curry.jpg", "alt": "Prawn Curry" },
      "category": "Seafood",
      "price": 15.99,
      "price2": 19.99,
      "rating": 4.8,
      "sell": "bestseller",
      "description": "Delicious prawns cooked in a rich, spicy curry sauce."
    },
    {
      "name": "Beef Tacos",
      "id": "012",
      "slug": "beef-tacos",
      "image": { "url": "images/beef-tacos.jpg", "alt": "Beef Tacos" },
      "category": "Mexican",
      "price": 9.99,
      "price2": 13.99,
      "rating": 4.5,
      "description": "Crispy tacos filled with seasoned beef, lettuce, cheese, and salsa."
    },
    {
      "name": "Mango Lassi",
      "id": "013",
      "slug": "mango-lassi",
      "image": { "url": "images/mango-lassi.jpg", "alt": "Mango Lassi" },
      "category": "Drinks",
      "price": 4.99,
      "price2": 9.99,
      "rating": 4.9,
      "description": "A refreshing mango yogurt drink."
    },
    {
      "name": "Vegetable Spring Rolls",
      "id": "014",
      "slug": "vegetable-spring-rolls",
      "image": { "url": "images/vegetable-spring-rolls.jpg", "alt": "Vegetable Spring Rolls" },
      "category": "Starters",
      "price": 6.99,
      "price2": 10.99,
      "rating": 4.2,
      "description": "Crispy spring rolls filled with fresh vegetables."
    },
    {
      "name": "Butter Naan",
      "id": "015",
      "slug": "butter-naan",
      "image": { "url": "images/butter-naan.jpg", "alt": "Butter Naan" },
      "category": "Indian",
      "price": 2.99,
      "price2": 4.99,
      "rating": 4.8,
      "description": "Soft and buttery traditional Indian bread."
    },
    {
      "name": "Chicken Wings",
      "id": "016",
      "slug": "chicken-wings",
      "image": { "url": "images/chicken-wings.jpg", "alt": "Chicken Wings" },
      "category": "Starters",
      "price": 8.99,
      "price2": 12.99,
      "rating": 4.6,
      "sell": "popular",
      "description": "Spicy and crispy chicken wings served with a side of ranch."
    },
    {
      "name": "Pancakes with Syrup",
      "id": "017",
      "slug": "pancakes-with-syrup",
      "image": { "url": "images/pancakes-with-syrup.jpg", "alt": "Pancakes with Syrup" },
      "category": "Breakfast",
      "price": 7.99,
      "price2": 12.99,
      "rating": 4.7,
      "description": "Fluffy pancakes drizzled with maple syrup and butter."
    },
    {
      "name": "Tomato Soup",
      "id": "018",
      "slug": "tomato-soup",
      "image": { "url": "images/tomato-soup.jpg", "alt": "Tomato Soup" },
      "category": "Soups",
      "price": 5.99,
      "price2": 9.99,
      "rating": 4.3,
      "description": "Rich and creamy tomato soup served with croutons."
    },
    {
      "name": "Beef Stroganoff",
      "id": "019",
      "slug": "beef-stroganoff",
      "image": { "url": "images/beef-stroganoff.jpg", "alt": "Beef Stroganoff" },
      "category": "Main Course",
      "price": 13.99,
      "price2": 17.99,
      "rating": 4.7,
      "description": "Tender beef in a creamy mushroom sauce, served over noodles."
    },
    {
      "name": "Garlic Bread",
      "id": "020",
      "slug": "garlic-bread",
      "image": { "url": "images/garlic-bread.jpg", "alt": "Garlic Bread" },
      "category": "Sides",
      "price": 3.99,
      "price2": 7.99,
      "rating": 4.5,
      "description": "Warm bread topped with garlic butter and herbs."
    }
  ]