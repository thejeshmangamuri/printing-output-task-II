let first_name = "Thejesh";
let last_name = "Mangamuri";
let email = "mang0095@algonquinlive.com";

// Single line Chaining
/*let output;
output = `My name is ${first_name} ${last_name}. You can contact me at ${email  }.`;
*/

// Multi line Chaining
    output = 'My name is '
    output += first_name;
    output += ' ';
    output += last_name;
    output += '.'
    output += ' ';
    output += 'You can contact me at ';
    output += email;
    output += '.'
    
alert(output);