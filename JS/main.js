//  iterate over the LocalStorage!
for( let i = 0; i < localStorage.length; i++) {
    $('ul').append(`<li><span>X</span>${localStorage.getItem(localStorage.key(i))}</li>`);
}
// Code Block Responsible For Appending List Item to Parent!!
$('button').on('click', function(evt) {
    let inputVal = $('input').val();
    $('ul').append(`<li><span>X</span>${inputVal}</li>`);
    localStorage.setItem(inputVal, inputVal);

});


// Pretty sure this is how to delete the list item😬
$('ul').on('click', 'li', function(evt) {
    $(this).remove();

});


//BIG SHOUT OUT TO LOQUEN(I think that's how you spell it😅) FOR HELPING ME OUT WITH JA'QUERY!!!