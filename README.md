# JATS Breaks Adder

This software was initially designed to solve an issue while using JATS format for publishing.

Sometimes, when we convert a file (such as HTML) to JATS XML, line breaks aren't replicated, which leads to an dense and unreadable text.

This software adds JATS `<break/>` elements when necessary, and shows you the inner `<body>`that you can then copy and paste into your own document.

## How to use ?

1. Upload a JATS XML file
2. Click on *Add breaks*.
3. Copy the result
4. Paste the result in between the `<body>` & `</body>` tags of your original JATS XML document, replacing the existing content.
5. You're done !

## How does it works ?

The software splits the input file text in order to only keep what's inside the `<body>`. 
<br>Once it's done, it splits it again, using the dots as splitter.

Then, it looks after each dots. If the following character isn't a capitalized letter, nothings happens. Else, it adds a `<break/>` element between the dot and the capitalized letter.

It then renders the result.
