$(function () {
  $("#minus").click(function () {
    var $quantity = $("#quantity");
    var quantity = Number($quantity.text());
    var nextQuantity = quantity - 1;

    if (nextQuantity < 1) {
      return;
    }

    $quantity.text(nextQuantity);
    var price = (6.6 * nextQuantity).toFixed(2);
    $("#price").text(price);
  });

  $("#plus").click(function () {
    var $quantity = $("#quantity");
    var quantity = Number($quantity.text());
    var nextQuantity = quantity + 1;
    $quantity.text(nextQuantity);

    var price = (6.6 * nextQuantity).toFixed(2);
    $("#price").text(price);
  });
});
