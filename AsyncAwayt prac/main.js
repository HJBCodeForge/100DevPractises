// This function simulates fetching a product from a server.
function fetchProduct(productId) {
  console.log("...Fetching product data...");
  return new Promise((resolve, reject) => {
    // We use setTimeout to simulate a 2-second network delay
    setTimeout(() => {
      if (productId === 42) {
        resolve({ id: 42, name: "Super Widget", price: 99.99 });
      } else {
        reject(new Error("Product not found!"));
      }
    }, 2000);
  });
}

async function displayProduct(){
    try{
        const result = await fetchProduct(42)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

displayProduct(42)