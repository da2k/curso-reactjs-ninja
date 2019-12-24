import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import TextField from './text-field'

function FormAddress () {
  const [cep, setCep] = useState('')

  useEffect(() => {
    async function fetchAddress () {
      if (cep.length < 9) {
        return
      }

      console.log('buscar cep:', cep)

      const data = await fetch(
        `https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`
      )
      const result = await data.json()
      console.log(result)
    }

    fetchAddress()
  }, [cep])

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
