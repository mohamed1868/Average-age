let input = document.querySelector("input")
let button = document.querySelector("button")
let container = document.querySelectorAll("div")[1]
let h1 = document.querySelector("h1")

button.onclick = function() {
    if (input.value != "") {

        let datenow = new Date();
        let birthday = new Date(input.value)
        let f = datenow - birthday
        let m = new Date(input.value).getDay()

        if (m == 0) {
            m = "Sunday"
        } else if (m == 1) {
            m = "Monday"
        } else if (m == 2) {
            m = "Tuesday"
        } else if (m == 3) {
            m = "Wednesday"
        } else if (m == 4) {
            m = "Thursday"
        } else if (m == 5) {
            m = "Friday"
        } else if (m == 6) {
            m = "Saturday"
        }



        let div = document.createElement("div")

        let h = document.createElement("h2")
        let text = document.createTextNode("Date")
        let p = document.createElement("span")
        let p0 = document.createElement("span")
        let p1 = document.createElement("span")
        let p2 = document.createElement("span")
        let p3 = document.createElement("span")
        let p4 = document.createElement("span")
        let p6 = document.createElement("span")
        p.appendChild(h)
        h.appendChild(text)
        div.append(p)
        div.append(p4)
        div.append(p3)
        div.append(p2)
        div.append(p1)
        div.append(p0)
        div.append(p6)

        container.append(div)
        p.style.cssText = "border: 1px ridge black;background:#007bff;"

        p0.innerHTML = `<h4> Second :</h4> <p> ${Math.round(f / 1000 )} </p>`
        p1.innerHTML = `<h4> minute :</h4><p>${Math.round(f / 1000 / 60 )} </p>`
        p2.innerHTML = `<h4> hour :</h4> <p> ${Math.round(f / 1000 / 60 / 60)}</p>`
        p3.innerHTML = `<h4> day :</h4><p>${Math.round(f / 1000 / 60 / 60 / 24 )} </p>`
        p4.innerHTML = `<h4> month :</h4><p>${Math.round(f / 1000 / 60 / 60 / 24 / 30)} </p> `

        p6.innerHTML = `<h4>Birthday : </h4> <p> ${m}</p>`
        h1.style.display = "none"
        container.style.border = "none"
        input.value = ""


    }
}