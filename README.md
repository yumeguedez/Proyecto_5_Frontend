# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Se realiza una aplicación de E-Commerce en el cual se vende los productos en este caso licores, se realiza la función de registrar usuario, logear un usuario, y que el mismo usuario pueda realizar logout, asimismo, se realiza conexion con la base de datos que se encuentra publicada en render y en la cual se extrae toda la información al frontend, asimismo se crear la proteccion de rutas en la cual si el usuario se encuentra logeado pueda mirar su perfil y hacer comprar y si no se encuentra logeado o registrado deba hacerlo primero para tener autorización a los demas servicios de la pagina.

Se crean las rutas para lo que es el homepage, aboutpage, productspage, productpage(para visualizar un producto en especifico), cartpage (para realizar el pago), perfilpage, registerpage y loginpage para que el usuario pueda interactuar y crear su perfil y logearse.

Tambien se creó un boton de paypal el cual permite que el usuario pueda realizar las diferentes compras en la pagina web.
