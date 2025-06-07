function feelingLucky(){//creates function and when someone clicks the button it runs this
    const query= document.querySelector('input[name="q"]').value;//finds the input with name q, then the value which is saved in the variable callee query
    if(query){//checking if theres text
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    }
}