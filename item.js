import ItemModal from "./ItemModal.js";

var items = [];

$('#item-add').on('click',()=>{

    var id = $('#itemId').val();
    var name = $('#itemName').val();
    var price = $('#price').val();
    var quanity = $('#quantity').val();

    console.log(id);
    console.log(name);
    console.log(price);
    console.log(quanity);

    let item = new ItemModal(iId,iName,iPrice,iQuantity);

    items.push(item);
    console.log(items);


});