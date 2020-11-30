
user_inputs = []


function add_value(value) {

    user_inputs.push(value)

    current_value = document.getElementById("output").innerHTML;
    
    document.getElementById("output").innerHTML = (Number(current_value) + Number(value));

}

function undo_button() {


    new_num = Number(document.getElementById("output").innerHTML) - user_inputs.pop()
    

    if (new_num >= 0) {
        document.getElementById("output").innerHTML = new_num
    } else {
        alert('No more actions to undo.')
    }




}