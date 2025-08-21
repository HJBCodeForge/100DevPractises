// Practice Task #1
// This function simulates fetching a product from a server.
// function fetchProduct(productId) {
//   console.log("...Fetching product data...");
//   return new Promise((resolve, reject) => {
//     // We use setTimeout to simulate a 2-second network delay
//     setTimeout(() => {
//       if (productId === 42) {
//         resolve({ id: 42, name: "Super Widget", price: 99.99 });
//       } else {
//         reject(new Error("Product not found!"));
//       }
//     }, 2000);
//   });
// }

// async function displayProduct(){
//     try{
//         const result = await fetchProduct(99)
//         console.log(result)
//     } catch (error) {
//         console.error(error)
//     }
// }

// displayProduct(42)

//Practice Task #2
// Step 1: Logs in a user
function loginUser(email, password) {
  console.log("...Attempting to log in...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "12345") {
        resolve({ userToken: "aBcDeFgHiJk" });
      } else {
        reject(new Error("Authentication failed!"));
      }
    }, 1500);
  });
}

// Step 2: Fetches a user profile with a token
function getUserProfile(token) {
  console.log("...Fetching profile...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "aBcDeFgHiJk") {
        resolve({ id: 1, name: "Alice", email: "test@example.com" });
      } else {
        reject(new Error("Invalid token!"));
      }
    }, 1500);
  });
}

async function displayUserProfile(){
  try{
    const userLogin = await loginUser("test@example.com", "12345")
    const userToken = await getUserProfile(userLogin.userToken)
    console.log(userToken)
  } catch (error){
    console.log(error)
  }
}

displayUserProfile()