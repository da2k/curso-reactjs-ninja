import React, { useState } from 'react'
import TextField from './text-field'

function PhoneField () {
  const [phone, setPhone] = useState('')

  function handleChangePhone (e) {
    setPhone(phoneMask(e.target.value))
  }

  function phoneMask (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  return (
    <TextField
      label='Telefone'
      xs={4}
      value={phone}
      onChange={handleChangePhone}
    />
  )
}

export default PhoneField
