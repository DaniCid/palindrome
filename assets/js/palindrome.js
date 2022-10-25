// Palindrome Checker with Console

let test = ["Sugus", "sugus", "hello", 1991, 1990, "sugus sugus sugus", "Ana lava lana", "Random phrase", "Ana, lava lana", "Ana. lava, lana"];
let answer;

const isPalindrome = string => {

    string = String(string);

    let word = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let reverseWord = word.split("").reverse().join("");

    return word === reverseWord ? true : false;
}

const testPalindrome = string => {

    answer = isPalindrome(string) ? "Palindrome" : "Not a Palindrome";
    console.log(string + ' - ' + answer);    
}

console.log('%cPalindrome tester results ->', 'color: #A2D9CE');
test.forEach(testPalindrome);

// Palindrome Checker with DOM

let input = document.getElementById('inPalindrome');
let icon = document.getElementById('iconPalindrome');

const testPalindromeDOM = event => {

    let input = event.target;
    
    isPalindrome(input.value) 
    ? (icon.innerHTML = "done", icon.style.color = "#ABD89D")
    : (icon.innerHTML = "close", icon.style.color = "#F09797")
}

input.addEventListener('change', testPalindromeDOM);