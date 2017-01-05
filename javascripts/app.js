$('#addPussy').click(function () {
  const pussyImg = $('img').clone()[0];
  /* Not sure what to do here :(
   * Maybe something like:
   * $('#catContainer').append();
   */
   $('#catContainer').append('<img src="http://thecatapi.com/api/images/get?format=src&type=gif"/>')
});
