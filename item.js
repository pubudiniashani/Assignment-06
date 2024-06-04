import ItemModal from "./ItemModal.js";

import {customers, items} from "./db.js";

/*var items = [];*/

var recordindex ;


function loadItemTable(){

    $("#item-tbl-body").empty();

    items.map((item, index) =>{

        let record = `<tr>
            <th scope="row" class="item-id-value">${item.itemId}</th>
            <td class="item-name-value">${item.itemName}</td>
            <td class="item-price-value">${item.price}</td>
            <td class="item-quantity-value">${item.quantity}</td>
        </tr>`;

        // console.log(record);

        $("#item-tbl-body").append(record);

    });


}


$('#item-add').on('click',()=>{

    var itemId = $('#itemId').val();
    var itemName = $('#itemName').val();
    var itemPrice = $('#price').val();
    var itemQuantity = $('#quantity').val();

    console.log(itemId);
    console.log(itemName);
    console.log(itemPrice);
    console.log(itemQuantity);

    let item = new ItemModal(itemId,itemName,itemPrice,itemQuantity);

    items.push(item);
    console.log(items);

    loadItemTable();

});



$('#item-update').on('click',()=>{

    var itemId = $('#itemId').val();
    var itemName = $('#itemName').val();
    var itemPrice = $('#price').val();
    var itemQuantity = $('#quantity').val();

    let itemObj = items[recordindex];
    itemObj.itemId = itemId;
    itemObj.itemName = itemName;
    itemObj.price = itemPrice;
    itemObj.quantity = itemQuantity;

    loadItemTable();

});

/*$("#item-delete").on('click',()=>{

    items.splice(recordIndex,1)
    loadItemTable();
    $("#item-reset").click();
});*/

$("#item-delete").on('click', () => {
    items.splice(recordindex, 1);
    loadItemTable();
    $('#itemId, #itemName, #price, #quantity').val('');
});



$('#item-tbl-body').on('click','tr',function (){

    let index = $(this).index();
    recordindex = index;
    console.log(index);

    let itemId = $(this).find(".item-id-value").text();
    let itemName = $(this).find(".item-name-value").text();
    let price = $(this).find(".item-price-value").text();
    let quantity = $(this).find(".item-quantity-value").text();

    $("#itemId").val(itemId);
    $("#itemName").val(itemName);
    $("#price").val(price);
    $("#quantity").val(quantity);


});

document.getElementById('item-reset').addEventListener('click', function() {
    document.getElementById('itemId').value = '';
    document.getElementById('itemName').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
});
