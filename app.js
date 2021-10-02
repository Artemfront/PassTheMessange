(function() {
    let input = document.getElementById('input')
    let btn = document.getElementById('btn')
    let outputText = document.getElementById('outputText')
    let text = ""

    btn.addEventListener('click', function() {
        if(input.value === "") {
            return 
        } else if(input.value === input.value) {
            outputText.innerHTML = `Your messange: ${input.value}`
            input.value = ''
        }
    })
})()