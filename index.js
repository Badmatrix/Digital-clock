const html = document.querySelector('.wrapper h1')
const dates = document.querySelector('.wrapper h2')

// function to capture real time and date
const timer = () => {
  const time = new Date()
  const todaysDate = ('0' + time.getDate()).slice(-2)
  const month = time.getMonth()
  const year = time.getFullYear()
  const hour = ('0' + time.getHours()).slice(-2)
  const minute = ('0' + time.getMinutes()).slice(-2)
  const secs = ('0' + time.getSeconds()).slice(-2)
  html.innerHTML = `<span>${hour}</span>  : <span>${minute}</span> : <span>${secs}</span>`
  dates.textContent = `${todaysDate}/${month+1}/${year}`
}
// calling the function every seconds
setInterval(() => {

  timer()
}, 1000)
