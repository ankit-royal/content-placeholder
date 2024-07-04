const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImage = document.getElementById('profile_img')
const userName = document.getElementById('user_name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  const randomProfile = Math.floor(Math.random() * 99) + 1;
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  profileImage.innerHTML =
    `<img src="https://randomuser.me/api/portraits/men/${randomProfile}.jpg" alt="" />`
  userName.innerHTML = 'Ankit Royal'
  date.innerHTML = 'Jan 12, 2024'

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
