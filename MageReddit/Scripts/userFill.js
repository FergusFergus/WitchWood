function fillUser(index) {
    result = "<li><h2>";
    result += users[index]["userName"];
    result += "</li>"

    result += "<li><p class=\"role\">";
    result += users[index]["role"];
    result += "</p></li>"

    result += "<li><p class=\"dTags\">";
    result += users[index]["dTags"];
    result += "</p></li>"

    result += "<li><p class=\"pTags\">";
    result += users[index]["pTags"];
    result += "</p></li>"

    return result;
}

function fillUserTable() {
    toFill = document.getElementById("userList");

    finalTable = "";
    counter = 0

    for (user in users) {
        if (counter % 2 == 0) {
            finalTable += "<user1 class=\"user1\">";
            finalTable += "<ul>";
            finalTable += fillUser(user);
            finalTable += "</ul>";
            finalTable += "</user1>";
        } else {
            finalTable += "<user2 class=\"user2\">";
            finalTable += "<ul>";
            finalTable += fillUser(user);
            finalTable += "</ul>";
            finalTable += "</user2>";
        }
        counter++;
    }

    toFill.innerHTML = finalTable;
}

fillUserTable();

// <user1 class="user1">
//     <ul>
//         <li><h2>DenVolkesMagier</h2></li>
//         <li><p class="role">Role: Admin</p></li>
//         <li><p class="dTags">Declared tags: Mage</p></li>
//         <li><p class="pTags">Popular tags: Helpful</p></li>
//     </ul>
// </user1>
// <user2 class="user2">
//     <ul>
//         <li><h2>DenVolkesMagier, Admin</h2></li>
//         <li><p>Declared tags: Mage</p></li>
//         <li><p>Popular tags: Helpful</p></li>
//     </ul>
// </user2>
