function handleEvent(event){
    event.preventDefault()

    document.addEventListener("DOMContentLoaded", pfa)

    function pfa(){
        const ulElement = document.getElementById("ul")
        const productAmount = document.getElementById("product-amount")
        const productName = document.getElementById("product-name")
        const amountValue = event.target.amountVal.value
        const productValue = event.target.productVal.value


        let userDetails = {
            "amountVal": amountValue,
            "productVal": productValue
        }

        
        axios.post("https://crudcrud.com/api/64f24ec414f44d6bb7c13d6007c50f55/orders", userDetails)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })


        axios.get("https://crudcrud.com/api/64f24ec414f44d6bb7c13d6007c50f55/orders")
        .then(function(result){
            console.log(result)

        })
        .catch(function(error){
            console.log(error)
        })
        console.log(amountValue)
        console.log(productValue)

        // creating new li and append in ul

        const newLi = document.createElement("li")
        const newLiText = document.createTextNode(`${productValue} - ${amountValue}`)
        newLi.appendChild(newLiText)
        

        // creating a delete btn for every li

        const deleteBtn = document.createElement("button")
        const deleteBtnText = document.createTextNode("Delete Product")
        deleteBtn.appendChild(deleteBtnText)
        newLi.appendChild(deleteBtn)
        deleteBtn.className="delete-btn"


        // adding it to the Ul 
        ulElement.appendChild(newLi)

        // clearing the input fields
        productAmount.value = ""
        productName.value = ""

    }

    pfa()
    


}   