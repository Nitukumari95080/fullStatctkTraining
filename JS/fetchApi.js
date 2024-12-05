const fetchProductsData = async () => {
  try {
    //  jab data successfully fetch hokr aa jaye to try block likhte hai-> success
    const response = await fetch("https://fakestoreapi.com/products");
    //  baseURL ->https://fakestoreapi.com
    //  endPoint-> products
    //     API -> frontend backend k beech communication stablish krne ke liye
    const jsonData = await response.json();
    console.log("This is fetched Data", jsonData);
  } catch (error) {
    //  jab reject ho jaye mtlb data n aaaye  -> reject
    console.log(error);
  } finally {
    //  chahe  success ho chahe reject ho y vala blockm ka code  cle
  }
};
fetchProductsData();
//  fetch ka use api se data fetch krne ke liye kiya jata hai jo ki browser ka in built function hai
// imp-> jab bhi data frontend se backend me jata hai to string formate me hi jata hai
// aur jab data backend se frontend me aata fetch hokr tb bhi vh string formate me hota hai
//  use object(json) ke room me bnana pdta hai
