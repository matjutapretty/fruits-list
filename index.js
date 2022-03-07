const values = ["Grapes 🍇", "Melon 🍈", "Watermelon 🍉", "Tangerine 🍊", "Lemon 🍋", "Banana 🍌", "Pineapple 🍍", "Mango 🥭", "Red Apple 🍎"];
window.localStorage.setItem('values', JSON.stringify(values));
JSON.parse(window.localStorage.getItem('values'));


// for adding new fruit
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('a');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();
}

function sort() {
  // Declaring Variables
  let values, i, run, li, stop;

  // Taking content of list as input
  values = document.getElementById("values");
  run = true;
  while (run) {
      run = false;
      li = values.getElementsByTagName("LI");

      // Loop traversing through all the list items
      for (i = 0; i < (li.length - 1); i++) {
          stop = false;
          if (li[i].innerHTML.toLowerCase() > 
              li[i + 1].innerHTML.toLowerCase()) {
              stop = true;
              break;
          }
      }
      if (stop) {
        li[i].parentNode.insertBefore(
                li[i + 1], li[i]);

        run = true;
    }
}
}

function sort1(){
  values.sort()
  values.reverse()
  document.getElementById("values").innerHTML = values;
}


// for search bar
    function myFunction() {
        // Declare variables
        let input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("values");
        li = ul.getElementsByTagName('li');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }

 
    document.getElementById("container");

