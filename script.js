// 模拟人物数据
let people = [
  {
    name: "张三",
    image: "person1.jpg",
    description: "这是张三的描述。"
  },
  {
    name: "李四",
    image: "person2.jpg",
    description: "这是李四的描述。"
  }
];

// 动态生成人物陈列
for (let person of people) {
  let personDiv = document.createElement('div');
  personDiv.classList.add('person');

  let personImage = document.createElement('img');
  personImage.src = person.image;
  personDiv.appendChild(personImage);

  let personName = document.createElement('h3');
  personName.textContent = person.name;
  personDiv.appendChild(personName);

  let personDescription = document.createElement('p');
  personDescription.textContent = person.description;
  personDiv.appendChild(personDescription);

  document.getElementById('personList').appendChild(personDiv);
}

function handlePersonInteraction() {
  document.getElementById('personList').addEventListener('click', function(event) {
    let target = event.target;
    if (target.classList.contains('person')) {
      let detailsDiv = target.nextElementSibling;
      if (detailsDiv && detailsDiv.classList.contains('personDetails')) {
        if (detailsDiv.style.display === 'none') {
          detailsDiv.style.display = 'block';
        } else {
          detailsDiv.style.display = 'none';
        }
      } else {
        let details = document.createElement('div');
        details.classList.add('personDetails');
        details.innerHTML = `<h2>${target.querySelector('h3').textContent}的详细信息</h2><p>${person.description}</p>`;
        target.appendChild(details);
      }
    }
  });
}

handlePersonInteraction();
