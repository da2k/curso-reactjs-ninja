import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react'
import styled from 'styled-components'
import { Link, useHistory, useParams } from 'react-router-dom'
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core'
import { TextField } from 'ui'
import { PIZZAS_SIZES } from 'routes'
import { useCollection } from 'hooks'

function FormRegisterSize () {
  const { id } = useParams()
  const { pizza, add, edit } = usePizzaSize(id)
  const [pizzaEditable, dispatch] = useReducer(reducer, initialState)
  console.log('pizzaEditable:', pizzaEditable)
  const history = useHistory()
  const nameField = useRef()

  useEffect(() => {
    nameField.current.focus()
  }, [id])

  useEffect(() => {
    dispatch({
      type: 'EDIT',
      payload: pizza
    })
  }, [pizza])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    dispatch({
      type: 'UPDATE_FIELD',
      payload: {
        [name]: value
      }
    })
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const { id, name, size, slices, flavours } = pizzaEditable

    const normalizedData = {
      name,
      size: +size,
      slices: +slices,
      flavours: +flavours
    }

    if (id) await edit(id, normalizedData)
    else await add(normalizedData)

    history.push(PIZZAS_SIZES)
  }, [add, edit, history, pizzaEditable])

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant='h4'>
          Cadastrar novo tamanho
        </Typography>
      </Grid>

      <Form onSubmit={handleSubmit}>
        <TextField
          label='Nome para esse tamanho. Ex: Pequena'
          name='name'
          value={pizzaEditable.name}
          onChange={handleChange}
          inputRef={nameField}
        />

        <TextField
          label='Diâmetro da pizza em cm'
          name='size'
          value={pizzaEditable.size}
          onChange={handleChange}
        />

        <TextField
          label='Quantidade de fatias'
          name='slices'
          value={pizzaEditable.slices}
          onChange={handleChange}
        />

        <TextField
          label='Quantidade de sabores'
          name='flavours'
          value={pizzaEditable.flavours}
          onChange={handleChange}
        />

        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button variant='contained' component={Link} to={PIZZAS_SIZES}>
              Cancelar
            </Button>
          </Grid>

          <Grid item>
            <Button variant='contained' color='primary' type='submit'>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Container>
  )
}

const Form = styled(Grid).attrs({
  item: true,
  container: true,
  xs: 12,
  spacing: 2,
  component: 'form'
})``

const Container = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  }
`

const initialState = {
  name: '',
  size: '',
  slices: '',
  flavours: ''
}

function reducer (state, action) {
  if (action.type === 'EDIT') {
    return action.payload
  }

  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      ...action.payload
    }
  }

  return state
}

function usePizzaSize (id) {
  const { data, add, edit } = useCollection('pizzasSizes')
  const [pizza, setPizza] = useState(initialState)

  useEffect(() => {
    setPizza(data?.find(p => p.id === id) || initialState)
  }, [data, id])

  return { pizza, add, edit }
}

export default FormRegisterSize
