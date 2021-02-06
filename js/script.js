    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>

document.addEventListener('DOMContentLoaded', function() {
  var stream = document.querySelector('.gallery__stream');
  var items = document.querySelectorAll('.gallery__item');
  
  var prev = document.querySelector('.gallery__prev');
  prev.addEventListener('click', function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item');
  });
  
  var next = document.querySelector('.gallery__next');
  next.addEventListener('click', function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item');
  });
});