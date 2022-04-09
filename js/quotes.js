const quotes = [
  {
    quote: '작은 일도 시작해야 위대한 일도 생긴다.',
    author: '마크주커버그',
  },
  {
    quote: '모두가 원하지만 아무도 하지 않는 일에 도전하라.',
    author: '마크주커버그',
  },
  {
    quote: '수십번 넘어져도 젊음을 무기삼아 도전하라',
    author: '마크주커버그',
  },
  {
    quote: '뜨거운 열정보다 중요한 것은 지속적인 열정이다.',
    author: '마크주커버그',
  },
  {
    quote: '사람과 사람을 연결하면 비지니스로 이어진다.',
    author: '마크주커버그',
  },
  {
    quote: '주위의 비난에 흔들리지 말고 묵묵히 나아갈.',
    author: '마크주커버그',
  },
  {
    quote: '옳다고 믿으면 끝까지 밀고 나가라',
    author: '마크주커버그',
  },
  {
    quote: '결국에는 신념을 가진 자가 승리한다.',
    author: '마크주커버그',
  }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;