# MERN AMAZONA

# LESSONS

1. Introduction
2. Insall Tools
3. Create React App
4. Create Git Repository
5. List Products
   create products array
   add product images
   render products
   style products
6. Add page routing
   npm i react-router-dom
   create route for home screen
   create router for product screen
7. Create Node.JS Server
   run npm init in root folder
   Update package.json set type: module
   Add .js to imports
   npm install express
   create server.js
   add start command as node backend/server.js
   require express
   create route for / return backend is ready.
   move products.js from frontend to backend
   create route for /api/products
   return products
   run npm start
8. Fetch Products From Backend xx
   set proxy in package.json
   npm install axios
   use state hook
   use effect hook
   use reducer hook
9. Manage State By Reducer Hook xx
   define reducer
   update fetch data
   get state from usReducer

10. Add bootstrap UI Framework
    npm install react-bootstrap bootstrap
    update App.js
11. Create Product and Rating Component
    create Rating component
    Create Product component
    Use Rating component in Product component
12. Create Product Details Screen
    fetch product from backend
    create 3 columns for image, info and action
13. Create Loading and Message Component
    create loading component
    use spinner component
    craete message component
    create utils.js to define getError fuction
14. Create React Context For Add Item To Cart xx
    Create React Context
    define reducer
    create store provider
15. Complete Add To Cart
    check exist item in the cart
    check count in stock in backend
16. Create Cart Screen
    create 2 columns
    display items list

17. Complete Cart Screen
    click handler for inc/dec item
    click handler for remove item
    click handler for checkout
18. Create Signin Screen
    create sign in form
    add email and password
    add signin button

19. Connect To MongoDB Database
    create atlas monogodb database
    install local mongodb database
    npm install mongoose
20. Seed Sample Products
    create Product model
    create seed route
    use route in server.js
    seed sample product
21. Seed Sample Users
    create user model
    seed sample users
22. Create Signin Backend API
    create signin api
    npm install jsonwebtoken
    define generateToken
23. Complete Signin Screen
    handle submit action
    save token in store and local storage
    show user name in header
24. Create Shipping Screen
    create form inputs
    handle save shipping address
    add checkout wizard bar
25. Create Sign Up Screen
    create input forms
    handle submit
    create backend api
26. Implement Select Payment Method Screen
    create input forms
    handle submit
27. Create Place Order Screen
    show cart items, payment and address
    calculate order summary
28. Implement Place Order Action
    handle place order action
    create order create api
29. Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 cloumns
30. Pay Order By PayPal (((((((((((didn't make it)))))))))))
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
31. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend
