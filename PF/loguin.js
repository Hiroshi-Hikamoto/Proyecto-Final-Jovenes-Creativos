const btn_ingresar = document.getElementById('btn_ingresar')
btn_ingresar.addEventListener('click', guardarLogin)


function guardarLogin() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  localStorage.setItem('email', email)
  localStorage.setItem('password', password)
}

function eliminarLogin() {
  localStorage.removeItem('email')
  localStorage.removeItem('password')
}

function obtenerlogin() {
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')

  return {
    email,
    password
  }
}

function validarLogin() {
  const login = obtenerlogin()

  if (login.email && login.password) {
    window.location = 'index.html'
  } else {
    alert('Debes ingresar para poder pasar.')
  }
}

function cerrarSession() {
  eliminarLogin()
  window.location = 'login.html'
}