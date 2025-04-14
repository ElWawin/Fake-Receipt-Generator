document.getElementById('receiptForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const brand = document.getElementById('brand').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const product = document.getElementById('product').value;
  const itemPrice = parseFloat(document.getElementById('itemPrice').value).toFixed(2);
  const shipping = parseFloat(document.getElementById('shipping').value).toFixed(2);
  const total = (parseFloat(itemPrice) + parseFloat(shipping)).toFixed(2);
  const payment = document.getElementById('payment').value;
  const orderDate = document.getElementById('orderDate').value;
  const deliveryDate = document.getElementById('deliveryDate').value;
  document.getElementById('brandName').innerText = brand;
  document.getElementById('rName').innerText = name;
  document.getElementById('rEmail').innerText = email;
  document.getElementById('rAddress'). 
