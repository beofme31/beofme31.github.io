const quotes = [
  {
    quote: "Everything that I understand, I understand only because I love.",
    author: "Leo Tolstoy",
  },
  {
    quote: "Love looks not with the eyes, but with the mind.",
    author: "William Shakespeare",
  },
  {
    quote: "To love is to receive a glimpse of heaven.",
    author: "Karen Sunde",
  },
  {
    quote:
      "Dost thou love life? Then do not squander time, for that is the stuff life is made of.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Strong reasons make strong actions.",
    author: "William Shakespeare",
  },
  {
    quote: "Tomorrow hopes we have learned something from yesterday.",
    author: "John Wayne",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote:
      "What is written without effort is in general read without pleasure.",
    author: "Samuel Johnson",
  },
  {
    quote:
      "Great ability develops and reveals itself increasingly with every new assignment.",
    author: "Baltasar Gracian",
  },
  {
    quote: "Love doesn't have to be perfect, it just needs to be true.",
    author: "Disney Movie",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
