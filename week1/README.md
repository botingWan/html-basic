# Week1

## Web development
  - Front-end
    * User interface for the end user, run on browser
    * Usually as client to the remote source to get resource
    * Html, Css, Js
    * More focus on the UI (appearance) and UX (behaviours)


  - Back-end
    * Resource owner
    * Usually act as server to response to the request (from front-end / other back-end)
    * A back-end server can also be a client to get resource from other server. E.g. Backend get friend list from facebook and return to front-end
    * Java, C, C++, C#, Js, Php, Go.......etc.
    * More focus on data model and heavier algothrim 

## Front-end
### Html
  - Hyper Text Markup Language
    * Skeleton of a web page, let browser knows the struture.
    * <b>Tag</b> as unit, a tag could have children, grandchild and so on.
    * Some common used tags:
        * ```<head>```
        * ```<meta>```
        * ```<link>```
        * ```<body>```
        * ```<script>```

        * ```<section>```
        * ```<div>```
        * ```<span>```
        * ```<ul>```, ```<ol>```, ```<li>```
        * ```<p>```
        * ```<h1>```, ```<h2>```, ```<h3>```, ```<h4>```, ```<h5>```, ```<h6>```
        * ```<p>```
        * ```<a>```
        * ```<form>```
        * ```<input>```
        * ```<select>```, ```<option>```
        * ```<button>```
        * ```<img />```
      * <b>Block tag</b> vs <b>Inline tag</b>
          * Block tag has close tag so it could have children, i.e. ```<div></div>``` 
          * Inline tag do not have close tag, e.g. ```<img src="x"/>```
          
          ```
            <div>
              <img src="xxx"/>
            </div>
          ```


    * ```<head>``` is the place to put the below stuff,
        * title for the document
        * scripts (Js) 
        * styles (Css)
        * meta information (SEO)
        * more
    * ```<body>``` is the place to put the visualized elements
    * ```<script>``` is the place to put your JS script
    * Tags usually have some built-in attributes, e.g. ```<input type="email" name="email"/>```

      those attribute modify the rendering behaviour on browser, or act as a marker for Css to work on
    * Below is an example of how html describe the structure, List A is inside section A, list B is inside section B, section A is on top of section B, all are inside body. 
  
```
    <body>
      <section class="section-a">
        <ul class="list-a">
          <li>option1</li>
          <li>option2</li>
          <li>option3</li>
        </ul>
      </section>
      <section class="section-b">
        <ul class="list-b">
          <li>option4</li>
          <li>option5</li>
          <li>option6</li>
        </ul>
      </section>
    </body>
```

### Css
  - Cascade Stylesheet
  - Responsible for the appearance of a website, mainly static, but sometimes involve transition and animation. i.e. hover, focus, Css animation
  - Apply on html element (The Tags!) via css selector (We cover it next week)
  - It is called `cascade` as the latter will override the former
  - Below is an example of css. `.hollow-button` is a css selector while the content inside the curly bracket is the css attributes

  ```
    .hollow-button {
      height: 200px;
      width: 200px;
      cursor: pointer;
      border: 2px solid #000;
      background-color: transparent;
      color: #0e0e0e;
    }
  ```

### Js
- Javascript
- JavaScript and Java are completely <b>different</b> languages, both in concept and design.
- Its official name is ECMAScript
- A weak and dynamic language
- Programming language to control the behaviour of web page
- For example, submission of data to data, fetch data from server, change the page layout upon interaction with users

### Js tutorials
#### Hello world
Copy the below statement in your browser's console and click enter

```
  console.log("Hello world");
```
This is the simplest programming you can have in JS. 
>```console``` is an object, with a function call ```log```, which accepts a statement, the expected behaviour is to print the statemnt on the browser console.  

Probably you won't understand what the above statement. Nevermind. you should be above to understand it after learning the <b>data types</b> 

### Data types
In Computer Science, a data type is simply a classification of data whichs tells the system how the programmer intends to use the data. You know it is food so you feed on it, you know it is clothes so you wear on it.

Everything starts from <b>Variable</b>, it is a vector to carry the data, with the keyword ```let``` and assignment operator ```=```, we can easily create our own variable in JS. 

Below are the types of variable you could have,

- Primitive types
    1.  number
        * JavaScript has only one type of numbers
        * Numbers can be written with, or without decimals:

        ```
          let x = 34;
          let y = 34.0;
        ```
        * Mathematic operators are applicable
        ```
          let w = 4 - 1;
          let x = 10 + 1;
          let y = 34 / 2;
          let z = 10 * 2;
          let ex = 10 % 3; // Division Remainder
          console.log(w); // 3
          console.log(x); // 11
          console.log(y); // 17
          console.log(z); // 20
          console.log(ex); // 1
        ```
    2. string
        * A string is a piece of characters. e.g. "John Doe"
        * String is written with quotes
        
        ```
          let user = 'john doe';
          let user2 = 'john doe";
        ``` 
    3. boolean
        * A boolean is either true or false
        * It is used for conditional flow of the code
        * See ```if```, ```switch```

    4. undefined
        * A variable not assigned carries a value of undefined
        * It appears when you try to reference a variable never declared before
        * <b>NOT</b> mix up with ```null```

- Complex types
In JS, we have some data types build on top of the primitive data,
they are,

    1.  Array
        - Array is a list of value, the value can be number, string, boolean, undefined or any complex type
        - It emphasizes the size (length) and the sequence (index)
        - Array position strats from 0, not 1!
    
      ```
        let array = [1, 2, ,3, 4];
        console.log(array[0]); // 1
      ```
    
    2.  Object
        - Object is collection of data with unique keys, it acts like a dictionary to hold any type of data
        - It emphasize the uniqueness of the keys

        ```
          let object = {
            name: "object",
            createdAt: new Date(),
          };

          console.log(object.name); // "object"
        ```
    
    3. Function
        - A function is an isolated code from the global context
        - We declare a function and write our logic inside so we could reuse it many times
        - A declaration of fucntion won't exceute the code inside, it needed to be called with ();

        ```
          function say(input) {
            console.log("I say ", input);
          };

          say("hello world!"); // "I say hello world!"
        ```
    
    4.  Null
        - ```Null``` has been notorious for having a type of ```object``` in Js.
        - Nul vs undefined
        |    Value     | typeof operator| booleanic value  | call property |
        | :----------: |:--------------:| :---------------:|:-------------:|
        | null | object  | false | error |
        | undefined| undefined |false|error |