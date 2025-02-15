const patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    
    url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    
    phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    
    creditCard: /^(\d{4}[-\s]?){3}\d{4}$/,
    
    time: /^(?:(?:([01]?\d|2[0-3]):([0-5]\d))|((?:1[0-2]|0?[1-9]):[0-5]\d\s?(?:AM|PM)))$/i
};

function extractData(text, type) {
    if (!patterns[type]) {
        throw new Error(`Pattern type "${type}" not supported`);
    }
    
    return patterns[type].test(text);
}


console.log(extractData("user@example.com", "email")); 
console.log(extractData("https://www.example.com", "url")); 
console.log(extractData("(123) 456-7890", "phone")); 
console.log(extractData("1234 5678 9012 3456", "creditCard")); 
console.log(extractData("14:30", "time")); 
console.log(extractData("2:30 PM", "time"));
