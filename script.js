document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    
    products.forEach(product => {
      product.addEventListener("click", () => {
        products.forEach(p => p.classList.remove("selected"));
        product.classList.add("selected");
      });
    });
  });
  