//Задание 1.
for (let i=10;i<=50;i++) {
	if (i%2==0) {
		console.log (i)
	};
}

// Задание 2.
const study={
	name:'Nikolay',
	lastName:'Kolyaskin',
	age:34,
	pet:true,
}
console.log (study)

// Задание 3.
const array = [
        'я в Симбирск,',
        'в трактире.',
        'с утра',
        'В ту же ночь',
        'Я остановился',
        'для закупки', 
        'что и было поручено Савельичу.',
        'приехал,',
        'где должен был',
        'нужных вещей',
        'отправился по лавкам',
        'пробыть сутки',
        'Савельич'
    ];

 let result = array[3] + array[0] + array[8] + array[11] + array[5] + array[9] + array[6] + array[4] + array[1] + array[12] + array[2] + array[10];

console.log(result);

// [3,0,8,11,5,9,6,4,1,12,2,10]

// Задание 4.
function fullName () {
	const firstName='Nikolay';
	const lastName='Kolyaskin';
	const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
fullName ()
// const firstName='Nikolay'
// const lastName='Kolyaskin'
// const fullName = `${firstName} ${lastName}`;
//     console.log(fullName);


    // const fullName = function(firstName, lastName) {
    //     return `${firstName} ${lastName}`;
    //     console.log(fullName);
    //  }
    //  fullName('Имя', 'Фамилия');    

// Задание 5.
let num=21;
while (num<=67){
	num++;
	if(num%2) 
	console.log(num);
	
};

