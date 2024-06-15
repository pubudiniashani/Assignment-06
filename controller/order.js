import OrderModal from "../model/OrderModal.js";


import {customers} from "../db/db.js";
import {items} from "../db/db.js";

$("#item-ID").on('input', function() {
    var itemId = $(this).val().trim();

    // Assuming items is an array of objects with structure like { itemId, itemName, price, quantity }
    var item = items.find(i => i.itemId === itemId); // Assuming itemId is the correct property name

    if (item) {
        // Fill the corresponding fields with the item's details
        $("#item-Name").val(item.itemName); // Use item.itemName
        $("#item-Price").val(item.price);   // Use item.price
        $("#quantityOnHand").val(item.quantity); // Use item.quantity
    } else {
        // Clear the fields if the item is not found
        $("#item-Name").val('');
        $("#item-Price").val('');
        $("#quantityOnHand").val('');
    }
});



