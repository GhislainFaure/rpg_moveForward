# La syntaxe et les spécificités ES6
​
## Les fonctions fléchées
​
Aussi appelées _Arrow functions_.
​
```js
// Syntaxe(s) "old-school"
function greetings(firstname) {
    return `Hello ${firstname}`;
};
​
// greetings('Jon')
​
var greetings = function(firstname) {
    return `Hello ${firstname}`;
};
// greetings('Jon')
```
​
```js
// Syntaxe(s) ES6
var greetings = (firstname) => {
    return `Hello ${firstname}`; 
}
// greetings('Jon')
```
​
Pour l'instant c'est la même chose, on appelle toujours notre fonction de la même manière avec `greetings('Robert')`, ce qui nous `return` `"Hello Robert"`.
​
​
Si on veut, on peut se passer des `{}`, ce qui qui va `return` le résultat du code exécuté:
​
```js
// Syntaxe(s) ES6 en une ligne
var greetings = (firstname) => `Hello ${firstname}`;
// greetings('Jon')
```
​
ATTENTION pour ça il faut qu'il n'y ait qu'**UNE SEULE** instruction!!
​
```js
// Syntaxe(s) ES6 en une ligne
var greetings = (firstname) => `Hello ${firstname}`
    console.log("ho") // ici, c'est PAS dans la fonction!!!
// greetings('Jon')
```
​
## `let` et `const`
​
Avant avec `var` on pouvait faire ça:
​
```js
for (var i = 0; i < 10; i++) {
    /** du code exécuté */
}
​
console.log(i)
```
​
le console.log affichait la valeur de i après l'itération
​
```js
for (let i = 0; i < 10; i++) {
    /** du code exécuté */
}
​
console.log(i)
```
​
`Uncaught ReferenceError: i is not defined` parce que avec let et const, on peut pas accéder à ce scope.
​
### Le scope
​
Exemple de scope**S**:
​
```js
// SCOPE #1
const cat = "le gros chat";
​
if (machin) {
    // SCOPE #2
    const z = 10;
    while(bidule) {
        // SCOPE #3
    }
​
    // SCOPE #2 AGAIN
​
    if () {
        // SCOPE #4
        var x = 5;
        let y = 5;
    }
​
    if () {
        // SCOPE #5
    }
}
```
​
`x` est disponible dans **tous les scopes** parce que c'est défini avec `var` 😱.
​
`y` est disponible **UNIQUEMENT** dans le **scope 4** parce que c'est défini avec `let` 😱.
​
`z` est disponible **dans les scopes 2, 3 et 4**, **PAS LE 1** parce que c'est une `const`.
​
`let` et `const` fonctionne de la même manière pour les scopes, quand ils sont définis ils sont disponibles dans les scopes enfants.
ATTENTION, pas de partage entre les scopes de niveau équivalent (par exemple 3, 4 et 5).
​
### `let` ET `const`?
​
- `let` nous permet de changer la valeur assignée au départ (_un peu_ comme `var`).
- `const` nous permet de définir une variable dont **ON NE POURRA JAMAIS** changer la valeur.