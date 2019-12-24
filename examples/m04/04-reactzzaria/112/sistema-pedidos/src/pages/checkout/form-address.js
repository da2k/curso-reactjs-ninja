import React, { useState, useEffect, useReducer, useRef } from 'react'
import t from 'prop-types'
import {
  CircularProgress,
  Grid
} from '@material-ui/core'
import TextField from './text-field'

function FormAddress ({ onUpdate = () => {} }) {
  const [cep, setCep] = useState('')
  const [fetchingCep, setFetchingCep] = useState(false)
  const [addressState, dispatch] = useReducer(reducer, initialState)
  const numberField = useRef()
  const addressField = useRef()

  useEffect(() => {
    onUpdate(addressState)
  }, [addressState, onUpdate])

  useEffect(() => {
    async function fetchAddress () {
      if (cep.length < 9) {
        return
      }

      console.log('buscar cep:', cep)

      setFetchingCep(true)
      const data = await fetch(`https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`)
      setFetchingCep(false)

      if (!data.ok) {
        dispatch({ type: 'RESET' })
        addressField.current.focus()
        return
      }

      const result = await data.json()
      console.log(result)

      if (!result.ok) {
        dispatch({
          type: 'FAIL',
          payload: {
            error: result.message
          }
        })
        return
      }

      dispatch({
        type: 'UPDATE_FULL_ADDRESS',
        payload: result
      })

      numberField.current.focus()
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

  function handleChangeField (e) {
    const { name, value } = e.target

    dispatch({
      type: 'UPDATE_FIELD',
      payload: { name, value }
    })
  }

  return (
    <Grid container spacing={2} alignItems='center'>
      <TextField
        label='CEP'
        xs={4}
        autoFocus
        value={cep}
        onChange={handleChangeCep}
        error={!!addressState.error}
      />
      <Grid item xs={8}>
        {fetchingCep && <CircularProgress size={20} />}
      </Grid>

      {[
        {
          label: 'Rua',
          xs: 9,
          name: 'address',
          inputRef: addressField
        },

        {
          label: 'Número',
          xs: 3,
          name: 'number',
          inputRef: numberField
        },

        {
          label: 'Complemento',
          xs: 12,
          name: 'complement'
        },

        {
          label: 'Cidade',
          xs: 9,
          name: 'city'
        },

        {
          label: 'Estado',
          xs: 3,
          name: 'state'
        }
      ].map((field) => (
        <TextField
          {...field}
          key={field.name}
          value={addressState[field.name]}
          onChange={handleChangeField}
          disabled={fetchingCep}
        />
      ))}
    </Grid>
  )
}

FormAddress.propTypes = {
  onUpdate: t.func
}

function reducer (state, action) {
  console.log('action:', action)
  if (action.type === 'UPDATE_FULL_ADDRESS') {
    return {
      ...state,
      ...action.payload,
      error: null
    }
  }

  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      [action.payload.name]: action.payload.value
    }
  }

  if (action.type === 'FAIL') {
    return {
      ...initialState,
      error: action.payload.error
    }
  }

  if (action.type === 'RESET') {
    return initialState
  }

  return state
}

const initialState = {
  code: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  city: '',
  state: '',
  error: null
}

export default FormAddress
