// Parent Section Created
const mainContainer = document.getElementById("main-section");

// Child Section Created

const childSection = document.createElement("section");

// Append child in parent Section

mainContainer.appendChild(childSection);

// h1 child creation
const h1 = document.createElement("h1");

h1.innerText = "Product Section";

childSection.appendChild(h1);

// p child creation

const p = document.createElement("p");

p.innerText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa minimaest ducimus quae ea quas quia doloremque nesciunt nulla, asperiores voluptates voluptate esse blanditiis facere, distinctio maxime consequatur voluptatibus architecto dolorem cumque dicta id ipsum earum. Beatae impedit incidunt, culpa quia sequi laudantium at consectetur facere sunt labore praesentium perferendis?";

childSection.append(p);
// ul child creation
const ulSec = document.createElement("ul");

childSection.appendChild(ulSec);

// li child creation

const li1 = document.createElement("li");

li1.innerText = "Honda Horner 2.O";

ulSec.appendChild(li1);

const li2 = document.createElement("li");

li2.innerText = "Yamaha Fzs v4";

ulSec.appendChild(li2);

const li3 = document.createElement("li");

li3.innerText = "TVS apache 4V";

ulSec.appendChild(li3);

const li4 = document.createElement("li");

li4.innerText = "Pulsar n160";

ulSec.appendChild(li4);

// Creation in easy Way

const anotherProduct = document.createElement("section");

anotherProduct.innerHTML = `

<h1> This is the product list of mobile phone</h1>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa minima
          est ducimus quae ea quas quia doloremque nesciunt nulla, asperiores
          voluptates voluptate esse blanditiis facere, distinctio maxime
          consequatur voluptatibus architecto dolorem cumque dicta id ipsum
          earum. Beatae impedit incidunt, culpa quia sequi laudantium at
          consectetur facere sunt labore praesentium perferendis?</p>

<ul>
<li>Samsung</li>
<li>Apple</li>
<li>Vivo</li>
<li>Oppo</li>
<li>Xiaomi</li>
<li>Realme</li>
</ul>


`;

mainContainer.appendChild(anotherProduct);
