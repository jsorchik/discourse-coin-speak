function coinify (text) {
  return text.replace(/(con|com)/ig, "coin");
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = coinify(text[i]);
    }
  }
  return text;
});
