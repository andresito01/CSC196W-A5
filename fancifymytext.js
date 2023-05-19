function showAlert() {
  alert("Hello, world!");
}

function biggerText() {
  document.getElementById("textArea").style.fontSize = "2em";
}

function applyStyles() {
  const textArea = document.getElementById("textArea");
  const fancyRadio = document.getElementById("fancyRadio");

  if (fancyRadio.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function capitalizeAndMooSentences(text) {
  let sentences = text.split(".");
  let capitalizedSentences = sentences.map(function(sentence) {
    let trimmedSentence = sentence.trim();
    if (trimmedSentence.length > 0) {
      let firstChar = trimmedSentence.charAt(0).toUpperCase();
      let restOfSentence = trimmedSentence.slice(1).toUpperCase();
      return firstChar + restOfSentence;
    } else {
      return "";
    }
  });

  return capitalizedSentences.join(". -Moo ");
}

// mooText needs to capitalize the text in the text area and add "-Moo" to the end of each sentence indicated by a period.

function mooText() {
  let textArea = document.getElementById("textArea");
  let text = textArea.value;
  let capitalizedAndMooText = capitalizeAndMooSentences(text);
  textArea.value = capitalizedAndMooText;
}
