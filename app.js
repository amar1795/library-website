//constructor
function bookdis(book,author,type)
{
  this.type=type;
  this.author=author;
  this.book=book;
}

let libraryform=document.getElementById('libform');
libraryform.addEventListener('submit',libraryformSubmit);

function libraryformSubmit(e) {
  console.log('YOu have submitted library form');
  let book=document.getElementById('book').value;
  let author=document.getElementById('author').value;

  let type;
  let fiction=document.getElementById('fiction');
  let programming=document.getElementById('programming');
  let cooking=document.getElementById('cooking');

  
  if(fiction.checked)
  {
    type =fiction.value;
  }
  else if(programming.checked)
  {
    type =programming.value;
  }
  else if(cooking.checked)
  {
    type =cooking.value;
  }

  let Book=new bookdis(book,author,type);
  console.log(Book);

  e.preventDefault();

  
  
}