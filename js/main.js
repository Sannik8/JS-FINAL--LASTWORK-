const amazon = document.getElementById("linkamazon");
const american = document.getElementById("linkamerica");
const walmart = document.getElementById("linkwalmart");
const apple = document.getElementById("linkapple");
const compName = document.getElementById("companyname");
const compDesc = document.getElementById("companydesc");
const box = document.getElementById('box')
const test = document.getElementById('test')
const cargobox = document.getElementsByClassName('cargobox')



const getUsers = async (e) => {
    const data = await fetch('https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json')
    .then(_ => _.json());
    


    amazon.addEventListener('click', (e) => {
        compName.innerHTML = "Amazon";
        compDesc.innerHTML = 'contact@amazon.com'
        let ret = data.find((el) => {
            return el.name.includes(e.target.innerHTML);
        }) 
        console.log(ret);
        box.innerHTML = ret.boxes
        calculation(ret);
    })
    american.addEventListener('click', (e) => {
        compName.innerHTML = "American Express";
        compDesc.innerHTML = 'contact@americanexpress.com'
        let ret = data.find((el) => {
            return el.name.includes(e.target.innerHTML);
        }) 
        console.log(ret);
        box.innerHTML = ret.boxes
        calculation(ret);
    })
    walmart.addEventListener('click', (e) => {
        compName.innerHTML = "Walmart";
        compDesc.innerHTML = 'contact@walmart.com'
        let ret = data.find((el) => {
            return el.name.includes(e.target.innerHTML);
        }) 
        box.innerHTML = ret.boxes
        console.log(ret);
        calculation(ret);
    })
    apple.addEventListener('click', (e) => {
        compName.innerHTML = "Apple";
        compDesc.innerHTML = 'contact@apple.com'
        let ret = data.find((el) => {
            return el.name.includes(e.target.innerHTML);
        }) 
        console.log(ret);
        box.innerHTML = ret.boxes
        calculation(ret);
    })
}
function calculation(boxInfo){
    let array = boxInfo.boxes.split(",");
    var stringArray = (new Function("return [" + array+ "];")());
    let sum = stringArray.reduce(function(a, b) { return a + b; }, 0);
    let sumUp = Math.ceil(sum / 10 );
    test.innerHTML = sumUp;
}

function myFunction() {
    let x = document.getElementById("myLinks");
    let y = document.getElementById("mainMenu")
    let z = document.getElementById("container")
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "block"
    } else {
      x.style.display = "flex";
      y.style.display = "none";
      z.style.display = "none"
    }
}


getUsers()

