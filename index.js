const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];

const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

    var values = ["Grapes 🍇", "Melon 🍈", "Watermelon 🍉", "Tangerine 🍊", "Lemon 🍋", "Banana 🍌", "Pineapple 🍍", "Mango 🥭", "Red Apple 🍎"];
 
    var select = document.createElement("select");
    select.name = "fruits";
    select.id = "fruits"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "Choose your fruits: "
    label.htmlFor = "fruits";
 
    document.getElementById("container").appendChild(label).appendChild(select);
