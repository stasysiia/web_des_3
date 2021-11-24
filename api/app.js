const l = (x) => console.log(x);

getPicBtn.addEventListener("click", getAPOD);

function getAPOD() {
  let params = dateFromUser ? '&date='+dateFromUser.value : '';
  let url = `https://api.nasa.gov/planetary/apod?api_key=3Re0P0dULxOpg4EW0hzmIQaGVopmKb1BchFEvHMs${params}`;
  fetch(url)
    .then((response) => showAPOD(response))
    .catch((err) => l(err));
}

function showAPOD(response) {
  let res = response.json();
  res.then((json) => {
    l(json);
    mainHeader.textContent = json.title;
    mainDate.textContent = json.date;
    mainPic.src = json.hdurl;
    mainText.textContent = json.explanation;
  });
}