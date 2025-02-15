# ALU Regex Data Extraction Project

## Introduction

This project was created as my Formative Assessment 2. The goal was to implement regular expressions (regex) to extract specific types of data from large strings, such as email addresses, URLs, phone numbers, credit card numbers, time formats, HTML tags, hashtags, and currency amounts. I chose to implement regex patterns for **email addresses**, **URLs**, **phone numbers**, **credit card numbers**, and **time**.

---

## Problem Statement

The task was to design and implement regex patterns for extracting the following types of data from large strings:
- Email addresses
- URLs
- Phone numbers (various formats)
- Credit card numbers
- Time (12-hour or 24-hour format)

Additionally, the solution needs to be implemented in either Python or JavaScript. I chose to work with JavaScript for this one.

---

## Solution Approach

To solve the problem, I followed these steps:

1. **Understand the Requirements**: I analyzed the provided examples of each data type and identified the common patterns they follow.
2. **Design Regex Patterns**: For each data type, I designed a regex pattern that matches the specified format.
3. **Implement the Solution**: I wrote a JavaScript function (`extractData`) that takes a string and a pattern type as input and validates the string against the corresponding regex pattern.
4. **Test the Solution**: I tested the regex patterns with various test cases to ensure they work efficiently.
5. **Document the Code**: I documented the regex patterns and their usage in this README file.

---

## Regex Patterns

Below are the regex patterns I implemented for the required data types:

### 1. Email Addresses
```regex
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```
- Matches valid email addresses like `user@example.com` and `firstname.lastname@company.co.uk`.

### 2. URLs
```regex
/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
```
- Matches valid URLs like `https://www.example.com` and `http://subdomain.example.org/page`.

### 3. Phone Numbers
```regex
/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
```
- Matches phone numbers in formats like `(123) 456-7890`, `123-456-7890`, and `123.456.7890`.

### 4. Credit Card Numbers
```regex
/^(\d{4}[-\s]?){3}\d{4}$/
```
- Matches credit card numbers with 16 digits grouped into sets of 4, separated by spaces or dashes.

### 5. Time
```regex
/^(?:(?:([01]?\d|2[0-3]):([0-5]\d))|((?:1[0-2]|0?[1-9]):[0-5]\d\s?(?:AM|PM)))$/i
```
- Matches time in both 24-hour format (`14:30`) and 12-hour format (`2:30 PM`).

---

## Implementation

The implementation is written in JavaScript. Below is the structure of the code:

### Code Structure
```javascript
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

// Example Usage
console.log(extractData("user@example.com", "email")); // true
console.log(extractData("https://www.example.com", "url")); // true
console.log(extractData("(123) 456-7890", "phone")); // true
console.log(extractData("1234 5678 9012 3456", "creditCard")); // true
console.log(extractData("14:30", "time")); // true
console.log(extractData("2:30 PM", "time")); // true
```

---

## Testing

I tested the regex patterns using the following test cases:

### Email Test Cases
- Valid: `user@example.com`, `firstname.lastname@company.co.uk`
- Invalid: `user@.com`, `@example.com`

### URL Test Cases
- Valid: `https://www.example.com`, `http://subdomain.example.org/page`
- Invalid: `htt://example.com`, `https:/example.com`

### Phone Number Test Cases
- Valid: `(123) 456-7890`, `123-456-7890`, `123.456.7890`
- Invalid: `123-45-7890`, `123-456-789`

### Credit Card Test Cases
- Valid: `1234 5678 9012 3456`, `1234-5678-9012-3456`
- Invalid: `1234 5678 9012`, `1234-5678-9012`

### Time Test Cases
- Valid: `14:30`, `2:30 PM`, `11:59 AM`
- Invalid: `25:30`, `12:60 PM`

---

