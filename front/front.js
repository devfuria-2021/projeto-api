
function myFunction() {

  fetch('http://localhost:3000/my-route?foo=1234')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // console.log(JSON.stringify(data));

      let myField = document.querySelector('#result');
      myField.innerHTML = JSON.stringify(data);

      document.querySelector('#field01').innerHTML = data.prop1;
      document.querySelector('#field02').innerHTML = data.prop2;
      document.querySelector('#field03').innerHTML = data.prop3;
      document.querySelector('#field04').innerHTML = data.foo;

    })

}
