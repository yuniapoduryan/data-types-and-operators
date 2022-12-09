let sum = (0.1 + 0.2).toFixed(1)
console.log(sum)

let a = '1'
let b = 2
console.log(Number(a) + b)
console.log(+a + b)


function getFilesCount(flashDriveCapacity, fileSize) {
    const mbInGb = 1024
    return Math.floor(flashDriveCapacity * mbInGb / fileSize)

}
console.log(getFilesCount(4, 820))
const flashDriveForm = document.getElementById("flashdrivecount");

function flashDriveFormOnSubmit(event) {
    event.preventDefault()
    let a = event.target['fdsize'].value
    let b = event.target['filesize'].value

    let result = getFilesCount(a, b)
    console.log(result)
    let spanElement = document.getElementById('files_result')
    spanElement.innerHTML = result

}
flashDriveForm.addEventListener('submit', flashDriveFormOnSubmit)

function buyChocolatesGetChange(moneyInWallet, chocolatePrice) {
    let chocolates = Math.floor(moneyInWallet / chocolatePrice)
    let change = moneyInWallet - chocolates * chocolatePrice
    return { chocolates, change }
}
console.log(buyChocolatesGetChange(1000, 80))

const chocoForm = document.getElementById('chococount')

function chocoFormOnSubmit(event) {
    event.preventDefault()
    let a = event.target['money'].value
    let b = event.target['choco_price'].value
    let result = buyChocolatesGetChange(a, b)
    let spanElement = document.getElementById('choco_result')
    spanElement.innerHTML = `You have ${result.chocolates} chocolates, and your change is ${result.change}`
}
chocoForm.addEventListener('submit', chocoFormOnSubmit)


function getDepositProfit() {
    let depositInput = document.getElementById('deposit')
    let deposit = depositInput.value
    let depositProfit = deposit * 5 / 100 / 12 * 2
    document.getElementById('deposit_result').innerHTML = `For 2 months your deposit will make you ${depositProfit} UAH of profit`

}