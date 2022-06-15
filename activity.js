const products = [
    {
      productId: 1,
      name: "headphones",
      category: 1,
      price: 100,
    },
    {
      productId: 2,
      name: "Shoes Nike",
      category: 2,
      price: 300,
    },
    {
      productId: 3,
      name: "hamburger",
      category: 3,
      price: 10,
    },
    {
      productId: 4,
      name: "Fries",
      category: 3,
      price: 5,
    },
    {
      productId: 5,
      name: "Sandwich",
      category: 3,
      price: 10,
    },
    {
      productId: 6,
      name: "laptop",
      category: 1,
      price: 100,
    },
    {
      productId: 7,
      name: "keyboard",
      category: 1,
      price: 50,
    },
    {
      productId: 8,
      name: "t-shirt",
      category: 2,
      price: 16,
    },
  ];
  
  const categories = [
    { id: 1, name: "Electronic" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Food" }
  ];
  
  export const discountsHolyDays = [
    { category: 1, discountApply: true, value: 10 },
    { category: 2, discountApply: false, value: 0 },
    { category: 3, discountApply: true, value: 30 },
  ];
  
  //// Activity
  
  // cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
  // y su llamda del metodo con un console.log donde muestre la información
  
  /// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?
  
  /// 2 - ¿Cuál es el producto más costoso de cada categoria?
  
  /// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?
  
  /// 4 - Obtener todos los productos que en nombre tengan las letra S. 
  
  /// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}
  
  /// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}
  
  // 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
   // errors: duplicated key
  
  const newProducts = [
      {
          id: 9,
          name: 'Tucson',
          typeOfProcuct: 'Car',
          discount: 10,
      },     {
          id: 10,
          name: 'Jeep',
          typeOfProcuct: 'Car',
          discount: 10,
      },  {
          id: 10,
          name: 'Screen',
          typeOfProcuct: 'Electronic'
      },{
          id: 1,
          name: 'Mouse',
          typeOfProcuct: 'Electronic'
      }
  ]


  /* SOLUCION */
   
    //1¿Cuál es el promedio de valor de cada tipo de producto?
    function averagePriceProducts(){
        let result = categories.map(item => { 
          return { 
              category: item.name, 
              average: products.filter(c => c.category === item.id).reduce((prev, act) => prev + act.price, 0) / 
              products.filter(product => item.id === product.category).length
            } 
        });

        return result;
        
    }

    console.log(averagePriceProducts());
    
    
    //2 - ¿Cuál es el producto más costoso de cada categoria?

    function productMaxPriceByCategory(){
        let result = categories.map(item => { 
            return { 
                category: item.name, 
                product: products.filter(c => c.category === item.id).reduce((prev, act) => prev.price > act.price ? prev : act)
            }
          });

          return result;
    }

    console.log(productMaxPriceByCategory());

    // 3 ¿Exite algún producto de tipo Electronico que cueste $100?
    function productPriceHigher100(){
        return products.filter(product => product.category === 1 && product.price === 100)
    }


    console.log(productPriceHigher100());


    //4 - Obtener todos los productos que en nombre tengan las letra S. 
    function productsNameContainS(){
        return products.filter(product => product.name.includes('s'))
    }

    console.log(productsNameContainS());

    /// 5 - Crear un arreglo de objetos con la siguiente información: 
    /// { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}
    function arrayObjectObject(){
        const nuevoArreglo = []
        categories.map(category => { 
            products.filter(product =>{
                if(product.category === category.id){
                discountsHolyDays.map(discount =>{
                    if(discount.category === product.category){
                    nuevoArreglo.push({
                        productId: product.productId,
                        nameProduct: product.name,
                        category: category.name,
                        discount: discount.value,
                        applyDiscount: discount.discountApply
                    })
                    }
                })
                } 
            })  
        })
        return nuevoArreglo;
    }

    console.log(arrayObjectObject());

    //6 Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}
    function productsWithDiscount(){
    const nuevoArreglo = []
    categories.map(category => { 
        products.filter(product =>{
            if(product.category === category.id){
            discountsHolyDays.map(discount =>{
                if(discount.category === product.category){
                nuevoArreglo.push({
                    productId:product.productId,
                    priceWithDiscount:calculateDiscount(product.price,discount.value)
                })
                }
            })
            } 
        })  
    })
    return nuevoArreglo;
    }

    function calculateDiscount(price,discount){
        let descu =(discount/100)*price
         return  price-descu
    }
     
    console.log(productsWithDiscount());

    //7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
    function addProducts(){
        const arrayNew = [];

        newProducts.forEach(element => {
            if(checkProductExists(arrayNew, element.id))
                arrayNew.push({id: element.id, status: 'error', message: 'key duplicated'})
            else
                arrayNew.push({id: element.id, status: 'sucess', message: 'Agregado correctamente'})
        });

        return arrayNew;
    }


    function checkProductExists(arrayNew, productId){
        return arrayNew.some(s => s.id === productId)
    }

    console.log(addProducts());