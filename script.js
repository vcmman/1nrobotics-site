const PRODUCTS = [
  {
    id: "navcore-starter",
    name: "NavCore Starter",
    category: "software",
    price: 4900,
    implementation: 600,
    image: "other-images/ai/fleet-illustration.png",
    blurb: "Software starter pack for evaluation, mapping, and early deployment pilots.",
    delivery: "Digital delivery in 2 business days",
    tags: ["Software", "Starter", "Indoor ops"],
  },
  {
    id: "mapping-ops-pack",
    name: "Mapping Ops Pack",
    category: "software",
    price: 7200,
    implementation: 900,
    image: "other-images/ai/ai-brain.jpg",
    blurb: "Mapping, calibration, and operator workflow package for teams preparing a first commercial rollout.",
    delivery: "Digital delivery in 3 business days",
    tags: ["Mapping", "Calibration", "Operator tools"],
  },
  {
    id: "sentry-mobile-kit",
    name: "Sentry Mobile Kit",
    category: "hardware",
    price: 12900,
    implementation: 1800,
    image: "other-images/ai/mobile-manipulator.png",
    blurb: "Integrated navigation package for wheeled inspection and mobile manipulation programs.",
    delivery: "Hardware prep in 7 business days",
    tags: ["Hardware", "Inspection", "Fast launch"],
  },
  {
    id: "atlas-quadruped-kit",
    name: "Atlas Quadruped Kit",
    category: "hardware",
    price: 18400,
    implementation: 2200,
    image: "other-images/ai/quadruped-unit.png",
    blurb: "Quadruped-ready navigation bundle built for field operations and difficult access environments.",
    delivery: "Hardware prep in 10 business days",
    tags: ["Quadruped", "Field", "Operations"],
  },
  {
    id: "multirobot-command-suite",
    name: "Multi-Robot Command Suite",
    category: "fleet",
    price: 8600,
    implementation: 1200,
    image: "other-images/ai/hero-multirobot.png",
    blurb: "Cloud and orchestration layer for fleet control, monitoring, and mission workflows.",
    delivery: "Cloud workspace in 2 business days",
    tags: ["Fleet", "Cloud", "Scale"],
  },
  {
    id: "remote-ops-console",
    name: "Remote Ops Console",
    category: "fleet",
    price: 5400,
    implementation: 700,
    image: "other-images/ai/hero-multirobot.png",
    blurb: "Browser-based monitoring and escalation console for distributed robot operations and support teams.",
    delivery: "Cloud workspace in 2 business days",
    tags: ["Remote ops", "Support", "Browser"],
  },
];

const currency = new Intl.NumberFormat("en-SG", {
  style: "currency",
  currency: "SGD",
  maximumFractionDigits: 0,
});

function readCart() {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getProduct(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function getCartDetailed() {
  return readCart()
    .map((item) => {
      const product = getProduct(item.id);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean);
}

function updateCartCount() {
  const count = readCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
  });
}

function addToCart(id) {
  const cart = readCart();
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }
  writeCart(cart);
  updateCartCount();
}

function removeFromCart(id) {
  const cart = readCart().filter((item) => item.id !== id);
  writeCart(cart);
  updateCartCount();
}

function changeQuantity(id, delta) {
  const cart = readCart();
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    writeCart(cart.filter((entry) => entry.id !== id));
  } else {
    writeCart(cart);
  }
  updateCartCount();
}

function formatPrice(value) {
  return currency.format(value);
}

function productCard(product) {
  const tags = product.tags.map((tag) => `<span>${tag}</span>`).join("");
  return `
    <article class="product-card">
      <figure class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </figure>
      <div class="product-body">
        <div class="product-head">
          <div>
            <p class="product-category">${product.category}</p>
            <h3>${product.name}</h3>
          </div>
          <strong>${formatPrice(product.price)}</strong>
        </div>
        <p class="product-copy">${product.blurb}</p>
        <p class="product-delivery">${product.delivery}</p>
        <div class="tag-row">${tags}</div>
        <button class="button button-primary full-width" type="button" data-add-to-cart="${product.id}">Add to Cart</button>
      </div>
    </article>
  `;
}

function renderHomeProducts() {
  const container = document.querySelector("[data-home-products]");
  if (!container) return;
  container.innerHTML = PRODUCTS.map(productCard).join("");
}

function renderCheckout() {
  const itemsNode = document.querySelector("[data-checkout-items]");
  if (!itemsNode) return;

  const items = getCartDetailed();
  if (items.length === 0) {
    itemsNode.innerHTML = `
      <div class="empty-state">
        <p class="empty-cart">Your cart is empty.</p>
        <a href="index.html#packages" class="button button-secondary">Browse Packages</a>
      </div>
    `;
    document.querySelector("[data-subtotal]").textContent = formatPrice(0);
    document.querySelector("[data-implementation]").textContent = formatPrice(0);
    document.querySelector("[data-total]").textContent = formatPrice(0);
    return;
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const implementation = items.reduce((sum, item) => sum + item.implementation * item.quantity, 0);
  const total = subtotal + implementation;

  itemsNode.innerHTML = items
    .map(
      (item) => `
        <article class="checkout-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <h3>${item.name}</h3>
            <div class="quantity-row">
              <button type="button" class="qty-button" aria-label="Decrease quantity" data-qty-change="${item.id}" data-delta="-1">-</button>
              <span>Qty ${item.quantity}</span>
              <button type="button" class="qty-button" aria-label="Increase quantity" data-qty-change="${item.id}" data-delta="1">+</button>
            </div>
            <p>${formatPrice(item.price)} each</p>
            <p>${item.delivery}</p>
          </div>
          <button type="button" class="remove-link" data-remove-item="${item.id}">Remove</button>
        </article>
      `
    )
    .join("");

  document.querySelector("[data-subtotal]").textContent = formatPrice(subtotal);
  document.querySelector("[data-implementation]").textContent = formatPrice(implementation);
  document.querySelector("[data-total]").textContent = formatPrice(total);
}

function bindAddToCartButtons() {
  document.querySelectorAll("[data-add-to-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.addToCart);
      button.textContent = "Added";
      setTimeout(() => {
        button.textContent = "Add to Cart";
      }, 900);
    });
  });
}

function bindCheckout() {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) return;

  document.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-item]");
    if (removeButton) {
      removeFromCart(removeButton.dataset.removeItem);
      renderCheckout();
      return;
    }

    const quantityButton = event.target.closest("[data-qty-change]");
    if (!quantityButton) return;
    changeQuantity(quantityButton.dataset.qtyChange, Number(quantityButton.dataset.delta));
    renderCheckout();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const items = getCartDetailed();
    if (!items.length) return;

    const data = new FormData(form);
    const orderId = `1N-${Date.now().toString().slice(-6)}`;
    const summary = {
      id: orderId,
      name: data.get("full_name"),
      email: data.get("email"),
      company: data.get("company"),
      region: data.get("region"),
      notes: data.get("notes"),
      items,
    };

    localStorage.setItem("lastOrder", JSON.stringify(summary));
    writeCart([]);
    updateCartCount();
    renderCheckout();

    form.hidden = true;
    const success = document.querySelector("[data-order-success]");
    const message = document.querySelector("[data-order-message]");
    success.hidden = false;
    message.textContent = `Order ${orderId} placed for ${summary.company}. A confirmation summary was generated in-browser for ${summary.email}.`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderHomeProducts();
  renderCheckout();
  bindAddToCartButtons();
  bindCheckout();
});
