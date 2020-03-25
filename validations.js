export const validateName = name => {
  var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  return re.test(name)
}
export const validateLastname = lastname => {
  var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  return re.test(lastname)
}
export const validatePassportFormat = passportNumber => {
  var re = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/gi
  return re.test(passportNumber)
}
export const validateEmailFormat = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
export const validatePassword = email => {
  var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
  return re.test(email)
}
export const passwordsMatch = (password, passwordRepeat) => {
  if (password !== passwordRepeat) return false

  return true
}

const validate = (name, lastname, email, password, passwordRepeat) => {
  const errorMsg = []
  validateName(name)

  if (!validateName(name))
    errorMsg.push('Name cannot be empty and can only contain letters.\n\n')
  if (!validateLastname(lastname))
    errorMsg.push('Lastname cannot be empty and can only contain letters.\n\n')
  if (!validateEmailFormat(email))
    errorMsg.push(
      'Email cannot be empty and must have the standar email format (example@server.org)\n\n'
    )

  if (password.length > 0 && !validatePassword(password))
    errorMsg.push(
      'Yout new password must be:\n - Between 7 to 15 characters \n - Contain at least one numeric digit \n - Contain at least one  special character\n\n'
    )
  if (
    password.length &&
    passwordRepeat.length &&
    !passwordsMatch(password, passwordRepeat)
  )
    errorMsg.push("Passwords don't match, please try again.\n\n")

  return errorMsg.join('')
}

export default validate
