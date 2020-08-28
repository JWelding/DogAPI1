'use strict';

function getDogImages(count) {
  fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(error));
}

function displayResults(responseJson) {
  console.log(responseJson);
  const images = responseJson.message.map(image => $(`<li><img src="${image}"></li>`))
  $(".results ul").html(images)
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const count = $("#qty").val();
    getDogImages(count);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

