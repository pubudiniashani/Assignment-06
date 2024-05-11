import CustomerModal from "./CustomerModal.js";

var customers = [];

function loadTable(){
        $("#customer-tbl-body").empty();

        customers.map((item, index) =>{

                let record = `<tr>
            <th scope="row" class="customer-id-value">${item.id}</th>
            <td class="customer-firstname-value">${item.name}</td>
            <td class="customer-address-value">${item.address}</td>
            <td class="customer-program-value">${item.contact}</td>
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


