function generateNumber() {


    const min = Number(document.querySelector(".input-01").value)
    const max = Number(document.querySelector(".input-02").value)


    const result = Math.floor(
        Math.random() * (max - min + 1)
    ) + min


    document.querySelector(".result").innerHTML = result
}