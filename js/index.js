const routes = {
  '/about': '/pages/about.html',
  '/contact': '/pages/contact.html',
  404: '/pages/404.html',
  '/': '/pages/home.html'
}

handle()

window.onpopstate = () => handle()
window.route = () => route()
