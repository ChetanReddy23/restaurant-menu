let menu = [];

async function getMenu() {
  const data = await fetch("http://localhost:3000/menu-items");
  const result = await data.json();
  console.log(result);
  menu = result.menu;
  menuList(menu);
  categoryList();
}

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const cartContainer = document.querySelector(".cart-container");
const cartList = document.querySelector(".cart-list");
const totalPriceModal = document.querySelector(".totalPriceModal");

cartContainer.className += " hide";

let cartItems = [];

function getTotalPrice() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
}

function addToCart(id) {
  const item = menu.filter((i) => i.id.toString() === id)[0];
  const idx = cartItems.findIndex((i) => i.id === item.id);
  if (idx != -1) cartItems[idx].quantity++;
  else cartItems.push({ ...item, quantity: 1 });
  getCartItems();
}

function removeFromCart(id) {
  const idx = cartItems.findIndex((i) => i.id.toString() === id);
  if (cartItems[idx].quantity > 1) cartItems[idx].quantity--;
  else cartItems.splice(idx, 1);
  getCartItems();
}

function getCartItems() {
  if (cartItems.length > 0) cartContainer.classList.remove("hide");
  else cartContainer.classList.add("hide");
  cartList.innerHTML = ``;
  cartItems.forEach((item) => {
    cartList.innerHTML += `<li class="list-group-item cart-item">
      <div>${item.title}</div> <div>₹${item.price} ${
      item.quantity > 1 ? `× ${item.quantity}` : ``
    }</div> <div><button class="btn btn-outline-danger" id=${
      item.id
    } style="border:none;padding:0 8px;" onclick="removeFromCart(this.id)">Remove</button></div>
     </li>`;
  });
  cartList.innerHTML += `<li class="list-group-item cart-item total-item">
      <div>Total</div> <div>₹${getTotalPrice()}</div> <div><button class="btn btn-primary" style="padding:0 14px;" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">Pay</button></div>
     </li>`;
  totalPriceModal.innerHTML = `Total Price: ₹${getTotalPrice()}`;
}

const categoryList = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
          <img
            src=${item.image}
            alt=${item.title}
            class="photo"
          />
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">₹${item.price}</h4>
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
            <button class="btn btn-sm btn-outline-dark cart-btn" id=${item.id} onclick="addToCart(this.id)">Add To Cart</button>
          </div>
        </div>
  `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

function paymentDone() {
  cartItems = [];
  getCartItems();
}

getMenu();
