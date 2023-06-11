# react-online-store


React Js online store for different items and products using [FakeStore API](https://fakestoreapi.com/docs) to get the data.



### Key Dependencies
- [React.js](https://react.dev/) a free and open-source front-end JavaScript library.
- [Chakra UI](https://chakra-ui.com/) a simple, modular and accessible component library.
- [Formik](https://formik.org/docs/overview) a library for input validation, formatting, masking, arrays, and error handling.
- [Yup](https://github.com/jquense/yup) Yup is a schema builder for runtime value parsing and validation.


### install
``` npm install ```

### run
``` npm run dev ```


### API
#### GET ``` localhost:5173/home/products/ ```
- Return: return list of all the available products.

- Sample Response:
    ```
   [{
      id:1,
      title:'...',
      price:'...',
      category:'...',
      description:'...',
      image:'...'
    }]
    ```
