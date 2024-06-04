import CustomerModal from "./CustomerModal.js";

import {customers} from "./db.js";

/*var customers = [];*/

var recordIndex;

function loadTable(){
        $("#customer-tbl-body").empty();

        customers.map((item, index) =>{

                let record = `<tr>
            <th scope="row" class="customer-id-value">${item.id}</th>
            <td class="customer-name-value">${item.name}</td>
            <td class="customer-address-value">${item.address}</td>
            <td class="customer-contact-value">${item.contact}</td>
        </tr>`;

                // console.log(record);

                $("#customer-tbl-body").append(record);

        });

}


$('#customer-add').on('click',()=>{

        var cusId = $('#customerId').val();
        var cusName = $('#name').val();
        var cusAddress = $('#address').val();
        var cusContact = $('#contact').val();

        console.log(cusId);
        console.log(cusName);
        console.log(cusAddress);
        console.log(cusContact);

        let customer = new CustomerModal(cusId,cusName,cusAddress,cusContact);

        customers.push(customer);
        console.log(customers);

        loadTable();

    });

$('#customer-update').on('click',()=>{

        var cusId = $('#customerId').val();
        var cusName = $('#name').val();
        var cusAddress = $('#address').val();
        var cusContact = $('#contact').val();

        let customerObj = customers[recordIndex];
        customerObj.id = cusId;
        customerObj.name = cusName;
        customerObj.address = cusAddress;
        customerObj.contact = cusContact;

        console.log("cus1 :" , customerObj);
        console.log(("cus2 :" , customers[recordIndex]));

        loadTable();

});

$("#customer-delete").on('click',()=>{

        customers.splice(recordIndex,1)
        loadTable();
        $("#customer-reset").click();
});

$('#customer-tbl-body').on('click','tr',function (){

        let index = $(this).index();
        recordIndex = index;
        console.log(index);

        let id = $(this).find(".customer-id-value").text();
        let name = $(this).find(".customer-name-value").text();
        let address = $(this).find(".customer-address-value").text();
        let contact = $(this).find(".customer-contact-value").text();

        $("#customerId").val(id);
        $("#name").val(name);
        $("#address").val(address);
        $("#contact").val(contact);


});

$("#customer-reset").on('click', function() {
        $('#customerId, #name, #address, #contact').val('');
});


