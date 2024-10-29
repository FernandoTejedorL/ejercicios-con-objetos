/* 1. Con este objeto imprime por consola una pequeña historia del usuario,
 "Me llamo John Doe, tengo 35 años..."*/
const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};

console.log(`
    Me llamo ${user.name} ${user.surname} y tengo ${user.age} años. \n 
    Mis grandes hobbies son ${user.hobbies[0]}, ${user.hobbies[1]} y ${user.hobbies[2]} acompañado
    de mi ${user.pets[0].type} ${user.pets[0].name} mientras en casa espera mi ${user.pets[1].type} 
    ${user.pets[1].name}. \n 
    Vivo en ${user.address.street} de la ciudad de ${user.address.city}, en el estado de ${user.address.state}
    al este de ${user.address.country}. Estudié un ${user.education} y soy ${user.occupation}. \n
    Siempre puedes encontrarme en el teléfono ${user.phone}, o si lo prefieres puedes escribirme a 
    ${user.email}.`)


/* 2. Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, 
número / 2, números pares y números impares.*/

const dataNumbers = {
    numbers: [10, 32, 31, 67, 9, 2, 51, 4],
    firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }    
}
for (const number of dataNumbers.numbers) {
    dataNumbers.firstFloor.secondFloor.numbersPlus2.push(number + 2);
    dataNumbers.firstFloor.thirdFloor.numbersDouble.push(number * 2);
    dataNumbers.fourthFloor.numbersDividedBy2.push(number / 2);
    if (number % 2 === 0) {
        dataNumbers.fifthFloor.onlyEven.push(number);
    } else {
        dataNumbers.fifthFloor.onlyOdd.push(number);
    }
}
console.log(`
    El array numbersPlus2 es ${dataNumbers.firstFloor.secondFloor.numbersPlus2} \n
    El array numbersDouble es ${dataNumbers.firstFloor.thirdFloor.numbersDouble} \n
    El array numbersDividedBy2 es ${dataNumbers.fourthFloor.numbersDividedBy2} \n
    El array onlyEven es ${dataNumbers.fifthFloor.onlyEven} \n
    El array onlyOdds es ${dataNumbers.fifthFloor.onlyOdd}`)

/*- Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", 
y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo 
que no sabes obtener.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String*/


const dataStrings = {
  firstFloor: {
    vowels: [] // Vocales
  },
  secondFloor: {
    consonants: [] // Consonantes
  },

  fourthFloor: {
    asciiCode: [] // Ascii code de cada letra
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [], // Palabras de la frase en mayúsculas
    wordsInLowercase: [] // Palabras de la frase en minúsculas
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto, será útil que investigues sobre el método replaceAll de los strings y sobre el uso de expresiones regulares dentro de este método.

    // REGLAS DE CODIFICACIÓN
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};
const sentenceToAnalise = sentence => {
    let vowels = "aeiou"
    let consonant = "zbcdfghjklmnñpqrstvwxy"
    let toUpper = ''
    let toLower = ''
    let secret = ''
    for (let counter = 0; counter < sentence.length; counter++) {
        const currentLetter = sentence.charAt(counter).toLowerCase();
        if (vowels.includes(currentLetter)) {
            dataStrings.firstFloor.vowels.push(sentence.charAt(counter));
            toUpper += sentence.charAt(counter).toUpperCase();
            toLower += sentence.charAt(counter).toLowerCase();
            dataStrings.sixthFloor.secretCode += vowels.indexOf(currentLetter)+1;
        }else if (consonant.includes(currentLetter)) {
            dataStrings.secondFloor.consonants.push(sentence.charAt(counter));
            toUpper += sentence.charAt(counter).toUpperCase();
            toLower += sentence.charAt(counter).toLowerCase();
            dataStrings.sixthFloor.secretCode += consonant.charAt(consonant.indexOf(currentLetter) - 1);
        } else{
            toLower += ',';
            toUpper += ',';
            dataStrings.sixthFloor.secretCode += consonant.charAt(Math.floor(Math.random() * 23));
        }
        dataStrings.fourthFloor.asciiCode.push(sentence.charCodeAt(counter));
    }
    dataStrings.fifthFloor.wordsInUppercase.push(toUpper.split(','));
    dataStrings.fifthFloor.wordsInLowercase.push(toLower.split(','));
}
sentenceToAnalise('Me ha costado la vida hacer este');
console.log(dataStrings);
