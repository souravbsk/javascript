const lyrics = 'Tumi bondu kala pakhi. ami jeno ki bosonto kale.tumay bolte pari ni';
console.log(lyrics.split('.'));
/* 
[
  'Tumi bondu kala pakhi',
  ' ami jeno ki bosonto kale',
  'tumay bolte pari ni'
]
*/

console.log(lyrics.split(''));
/* 
[
  'T', 'u', 'm', 'i', ' ', 'b', 'o', 'n', 'd',
  'u', ' ', 'k', 'a', 'l', 'a', ' ', 'p', 'a',
  'k', 'h', 'i', '.', ' ', 'a', 'm', 'i', ' ',
  'j', 'e', 'n', 'o', ' ', 'k', 'i', ' ', 'b',
  'o', 's', 'o', 'n', 't', 'o', ' ', 'k', 'a',
  'l', 'e', '.', 't', 'u', 'm', 'a', 'y', ' ',
  'b', 'o', 'l', 't', 'e', ' ', 'p', 'a', 'r',
  'i', ' ', 'n', 'i'
]
*/

console.log(lyrics.split(' '));

/* 
[
  'Tumi',       'bondu',
  'kala',       'pakhi.',
  'ami',        'jeno',
  'ki',         'bosonto',
  'kale.tumay', 'bolte',
  'pari',       'ni'
]
*/