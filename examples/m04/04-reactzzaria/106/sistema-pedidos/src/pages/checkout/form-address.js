import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import TextField from './text-field'

function FormAddress () {
  const [cep, setCep] = useState('')
  console.log(cep)

  function handleChangeCep (e) {
    setCep(cepMask(e.target.value))
  }

  function cepMask (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }

  return (
    <Grid container spacing={2}>
      <TextField
        label='CEP'
        xs={4}
        autoFocus
        value={cep}
        onChange={handleChangeCep}
      />
      <Grid item xs={8} />

      <TextField label='Rua' xs={9} />
      <TextField label='Número' xs={3} />
      <TextField label='Complemento' xs={12} />
      <TextField label='Cidade' xs={9} />
      <TextField label='Estado' xs={3} />
    </Grid>
  )
}

export default FormAddress
