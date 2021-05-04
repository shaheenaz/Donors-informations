'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let headerArray = ['Donar Name', 'Donar Age', 'Amount']
let container = document.getElementById('donationForm')
let table = document.createElement('table')
container.appendChild(table)

function Donation(userName, userAmount) {
    this.userName = userName;
    this.userAge = [];
    this.total = [];
    this.userAmount = userAmount
    Donation.all.push(this)
    saveToLs()
}

Donation.all = []


function headerRows() {

    let headerRAW = document.createElement('tr')
    table.appendChild(headerRAW)

    for (let i = 0; i < headerArray.length; i++) {
        let tableHeader = document.createElement('th')
        headerRAW.appendChild(tableHeader)
        tableHeader.textContent = headerArray[i];

    }
}
headerRows()

Donation.prototype.render = function () {
    let firstRaw = document.createElement("tr")
    table.appendChild(firstRaw)
    let el1 = document.createElement('td')
    firstRaw.appendChild(el1)
    el1.textContent = this.userName

    let el2 = document.createElement('td')
    firstRaw.appendChild(el2)
    for (let j = 0; j < Donation.all.length; j++) {
        let random = getRandomInt(18, 30)
        el2.textContent = random
        this.userAge += random
        console.log(this.userAge)


    }

    let el3 = document.createElement('td')
    firstRaw.appendChild(el3)
    el3.textContent = this.userAmount

    // let lastRaw = document.createElement("tr")
    // table.appendChild(lastRaw)
    // let el0 = document.createElement('td')
    // lastRaw.appendChild(el0)
    // el0.textContent = 'total'



}

function lastRow() {
    let lastRaw = document.createElement("tr")
    table.appendChild(lastRaw)
    let el0 = document.createElement('td')
    lastRaw.appendChild(el0)
    el0.textContent = Donation.userAmount+=Donation.userAmount
}


const form = document.getElementById('theForm')
form.addEventListener('submit', submitHandle)
function submitHandle(event) {
    event.preventDefault()
    let name = event.target.donerName.value
    let amount = event.target.Amount.value

    let newDonar = new Donation(name, amount)
    newDonar.render()
    lastRow()

}
function saveToLs() {
    let Donations = JSON.stringify(Donation.all)
    localStorage.setItem('allDonations', Donations)
}
function retrive() {
    let data = localStorage.getItem('allDonations')
    let content = JSON.parse(data)
    if (content != 0) {
        for (let i = 0; i < content.length; i++) {
            let reinstantiation = new Donation(content[i].userName, content[i].userAmount, content[i].userAge)
            reinstantiation.render()
        }
    }
}
retrive()