// javascript provided in example:
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// my solutions to exercise:
const redPara = document.createElement('p');
redPara.classList.add('redPara');
redPara.textContent = 'This is a red <p>.';
redPara.style.cssText = 'color: red';

const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3');
blueH3.textContent = 'This is a blue <h3>.';
blueH3.style.cssText = 'color: #0487ff';

const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pinkDiv');
pinkDiv.style.cssText = 'border-style: solid; border-width: 10px; border-color: black; background-color: pink; height: 250px; margin: 25px; padding: 10px;';

const divH2 = document.createElement('h2');
divH2.classList.add('divH2');
divH2.textContent = 'This is an <h2> in a <div>.';

const divPara = document.createElement('p');
divPara.classList.add('divPara');
divPara.textContent = 'This is a <p> in a <div>.';

container.appendChild(redPara);
container.appendChild(blueH3);
pinkDiv.appendChild(divH2);
pinkDiv.appendChild(divPara);
container.appendChild(pinkDiv);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    alert(button.id);
  });
});
