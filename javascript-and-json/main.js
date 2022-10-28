var library = [
  {
    isbn: '978-0590353427',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    isbn: '978-0439064873',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    isbn: '978-0439136365',
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling'
  }
];

console.log('library array:', library);
console.log('typeof library:', typeof (library));

console.log('library stringify:', JSON.stringify(library));
console.log('typeof library stringify:', typeof (JSON.stringify(library)));

var customString = '{"Number id":"123456", "String Name":"Parker Siu"}';

console.log('customString:', customString);
console.log('typeof customString:', typeof (customString));

console.log('JSON.parse customString:', JSON.parse(customString));
