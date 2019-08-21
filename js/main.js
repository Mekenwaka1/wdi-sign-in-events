document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('div.modal').addEventListener('click', function(event1) {
        this.style.display = 'none'
    })
    document.querySelector('button.signin').addEventListener('click', function(event2) {
        document.querySelector('div.modal').style.display = 'block'
    })
    document.querySelector('button.close').addEventListener('click', function(event3) {
        document.querySelector('div.modal').style.display = 'none'
        event3.stopPropagation()
    })
    document.querySelector('button.submit').addEventListener('click', function(event4) {
        document.querySelectorAll('input').forEach(function(input) {
            input.classList.add('error')
            event4.stopPropagation()
        })
    })
    document.querySelectorAll('input').forEach(function(input) {
        input.addEventListener('focus', function(event5) {
            document.querySelectorAll('input').forEach(function(input) {
                input.classList.remove('error')
            })
        })
        input.addEventListener('click', function(event6) {
            event6.stopPropagation()
        })
    })
})
