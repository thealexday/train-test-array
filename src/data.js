
export const questions = [
    {
        id: 0,
        question: 'Выберите методы и циклы массива, которыми можно перебрать массив',
        answer1: 'forEach()',
        answer2: 'forOf()',
        answer3: 'map()',
        answer4: 'for()',
        answer5: 'every()',
        answer6: 'forIn()',
    },
    {
        id: 1,
        question: 'Метод, который позволяет сделать из строки массив',
        answer1: 'slice()',
        answer2: 'split()',
        answer3: 'splice()',
        answer4: 'reduce()',
        answer5: 'every()',
        answer6: 'join()'
    },
    {
        id: 2,
        question: 'Что из нижепредставленного является двумерным массивом?',
        answer1: 'const arr = [1,2,[3,4]]',
        answer2: 'const arr = [1,2,[3,4,[]]]',
        answer3: 'const arr = [1,2,{title: true}]',
        answer4: 'const arr = [1]',
        answer5: 'const arr = {title: [1,3]}',
        answer6: 'const arr = [1,2,3,[4,5,[6]]]'
    },
    {
        id: 3,
        question: 'Какие из этих методов сделают копию массива arr',
        answer1: 'const newArr = ObjectAssign({}, arr)',
        answer2: 'const newArr = arr.slice()',
        answer3: 'const newArr = [arr]',
        answer4: 'const newArr = [...arr]',
        answer5: 'const newArr = [copy(arr)]',
        answer6: 'const newArr = ...arr'
    },
    {
        id: 4,
        question: 'Что делает метод join()',
        answer1: 'создает поверхностную копию массива',
        answer2: 'превращает строку в массив',
        answer3: 'превращает массив в строку',
        answer4: 'перебирает массив по четным индексам',
        answer5: 'фильтрует массив',
        answer6: 'такого метода не существует'
    },
    {
        id: 5,
        question: 'Что делает метод массива every()',
        answer1: 'Такого метода не существует',
        answer2: 'Перебирает масссив справа налево',
        answer3: 'Проверяет каждый элемент массива на заданное условие и возвращает булев тип данных',
        answer4: 'Проверяет каждый элемент массива на четные числа',
        answer5: 'Удаляет все элементы массива',
        answer6: 'Создает копию массива'
    },
    {
        id: 6,
        question: 'Чему будет равен res: const arr = [1,2,3]; const res = arr.every(el => el > 5)',
        answer1: 'undefined',
        answer2: 'false',
        answer3: 'null',
        answer4: 'true',
        answer5: 'будет ошибка',
        answer6: 'будет пустой массив'
    },
    {
        id: 7,
        question: 'Какой метод перевернет массив задом наперед:',
        answer1: 'flip()',
        answer2: 'recive()',
        answer3: 'такого метода нет',
        answer4: 'split()',
        answer5: 'back()',
        answer6: 'reverse()'
    },
    {
        id: 8,
        question: 'Чему будет равен result: const arr = [1,4,113,75]; const result = arr.includes(43)',
        answer1: 'true',
        answer2: 'undefined',
        answer3: 'неверный код',
        answer4: 'false',
        answer5: 'NaN',
        answer6: 'такого метода нет'
    },
    {
        id: 9,
        question: 'что выведет консоль: const arr1 = [0,1]; const arr2 = [0,1]; console.log(arr1 === arr2)',
        answer1: 'true',
        answer2: 'false',
        answer3: 'undefined',
    },
    {
        id: 10,
        question: 'Где правильно создается массив:',
        answer1: 'const arr = new Array(1,2,3)',
        answer2: 'const new Array = [1,2,3]',
        answer3: 'const arr = new Array[1,2,3]',
    },
    {
        id: 11,
        question: 'arr.map((A,B) => console.log(a)); Что будет храниться в парвметре "B"',
        answer1: 'длинна массива',
        answer2: 'сам массив',
        answer3: 'индекс массива',
    },
    {
        id: 12,
        question: 'const arr = [1,2,3,4]; console.log(arr.slice(1,3)); Что будет в консоли: ',
        answer1: '1,2,3',
        answer2: '2,3',
        answer3: '2,3,4',
    },
    {
        id: 13,
        question: 'const arr = [1,[{name: "Alex"}]]; Как получить значение переменной name?',
        answer1: 'arr[1].name',
        answer2: 'arr[1][0].name',
        answer3: 'arr[0][1].name',
    },
    
]


export  const answers = [
    ['on', 'on', 'off', 'off', 'off', 'on'],
    ['off', 'on', 'off', 'off', 'off', 'off'],
    ['on', 'off', 'off', 'off', 'off', 'off'],
    ['on', 'on', 'off', 'on', 'off', 'off'],
    ['off', 'off', 'on', 'off', 'off', 'off'],
    ['off', 'off', 'on', 'off', 'off', 'off'],
    ['off', 'off', 'off', 'on', 'off', 'off'],
    ['off', 'off', 'off', 'off', 'off', 'on'],
    ['off', 'off', 'off', 'on', 'off', 'off'],
    ['off', 'on', 'off'],
    ['on', 'off', 'off'],
    ['off', 'off', 'on'],
    ['off', 'on', 'off'],
    ['off', 'on', 'off'],
]

