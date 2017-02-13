var catsArray = [
{name: "Guinther", favFood:"tuna"},
{name: "Alemao", favFood:"whiskas"},
]


var createCatUl = function(){
  var catUl= document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
  }


var createLi = function(name){
  var li = document.createElement('li');
  li.innerText = name;
  return li;
}  

var craeteLi2 = function(favFood){
  var li2 = document.createElement('li');
  li2.innerText = favFood;
  return li2;
}

var appendChildren = function(cats, li2, li, catUl){
  catUl.appendChild(li);
  catUl.appendChild(li2);
  cats.appendChild(catUl);
}

var addCat = function(name, favFood){
  var catUl = createCatUl();
  var li = createLi(name);
  var li2 = createLi(favFood);
  var cats = document.querySelector('#cats');
  appendChildren(cats, catUl, li, li2); 

}

var app = function(){
  for (var cat of catsArray){
    addCat(cat.name, cat.favFood);
  }
}


 // var catUl = document.createElement('ul');
 // catUl.classList.add('cat');

 // var li = document.createElement('li');
 // li.innerText = "Name: blah";

 // var li2 = document.createElement('li');
 // li2.innerText = "Favorite Food: Tuna";

 // catUl.appendChild(li);
 // catUl.appendChild(li2);

//  var cats = document.querySelector('#cats');
//  cats.appendChild(catUl); 
// };


window.onload = app; 