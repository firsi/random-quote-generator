
$(document).ready(function () {
  fetchQuotes();
});

function fetchQuotes() {
  quotesArr = [{ "author": "Charles Erwin Wilson",
    "quote": "A good boss makes his men realize they have more ability than they think they have so that they consistently do better work than they thought they could." },
  {
    "author": "Francis Bacon",
    "quote": "The rising unto place is laborious, and by pains men come to greater pains; and it is sometimes base, and by indignities men come to dignities. The standing is slippery, and the regress is either a downfall, or at least an eclipse." },
  {
    "author": "Ashley Montagu",
    "quote": "It is the function of women to teach men how to be human." },
  {
    "author": "William Shakespeare",
    "quote": "But words are words; I never did hear That the bruised heart was pierced through the ear." },
  {
    "author": "James Bryce",
    "quote": "The worth of a book is to be measured by what you can carry away from it." },
  {
    "author": "Otto Spengler",
    "quote": "We Germans will never produce another Goethe, but we may produce another Caesar." },
  {
    "author": "Mildred Howells",
    "quote": "And so it criticized each flower, This supercilious seed; Until it woke one summer hour, And found itself a weed." },
  {
    "author": "Isaac Newton",
    "quote": "If I have seen further, it is by standing on the shoulders of giants." },
  {
    "author": "Friedrich Nietzsche",
    "quote": "How good bad music and bad reasons sound when we march against an enemy." },

  { "author": "Tzu Sun",
    "quote": "There has never been a protracted war from which a country has benefited." }];




  index = Math.floor(Math.random() * 10);
  changeColor(index);
  $("#text").text(quotesArr[index]["quote"]);
  $("#author").text(quotesArr[index]["author"]);

}

function changeColor(index) {
  colorArray = ["#FA8334", "#440381", "#A3CE37", "#388697", "#271033", "#D8D145", "#66bbca", "#DA3E52", "#E58C8A", "#EC368D"];


  $(".main-color").css("color", colorArray[index]);
  $(".main-background-color").css("background-color", colorArray[index]);
}