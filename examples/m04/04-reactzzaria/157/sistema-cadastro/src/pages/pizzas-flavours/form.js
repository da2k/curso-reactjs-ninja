import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import {
  Button,
  Grid,
  InputLabel,
  Typography
} from '@material-ui/core'
import { Form, FormContainer, TextField } from 'ui'
import { useCollection } from 'hooks'
import { PIZZAS_FLAVOURS } from 'routes'

function FormRegisterFlavour () {
  const { id } = useParams()
  const nameField = useRef()
  const history = useHistory()
  const { data: pizzasSizes } = useCollection('pizzasSizes')
  const { pizza, add } = usePizzaFlavour(id)
  const [pizzaEditable, dispatch] = useReducer(reducer, initialState)
  console.log('pizzaEditable:', pizzaEditable)

  const texts = useMemo(() => ({
    title: id ? 'Editar sabor' : 'Cadastrar novo sabor',
    button: id ? 'Salvar' : 'Cadastrar'
  }), [id])

  useEffect(() => {
    nameField.current.focus()
  }, [id])

  useEffect(() => {
    dispatch({
      type: 'EDIT',
      payload: pizza
    })
  }, [pizza])

  const handleChange = useCallback(async (e) => {

  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const fields = e.target.elements

    const normalizedData = {
      name: fields.name.value,
      image: fields.image.value,
      value: pizzasSizes.reduce((acc, size) => {
        acc[size.id] = +fields[`size-${size.id}`].value
        return acc
      }, {})
    }

    await add(normalizedData)
    history.push(PIZZAS_FLAVOURS)
  }, [pizzasSizes, add, history])

  return (
    <FormContainer>
      <Grid item xs={12}>
        <Typography variant='h4'>
          {texts.title}
        </Typography>
      </Grid>

      <Form onSubmit={handleSubmit}>
        <TextField
          label='Nome do sabor'
          name='name'
          inputRef={nameField}
          value={pizzaEditable.name}
          onChange={handleChange}
        />

        <TextField
          label='Link para imagem desse sabor'
          name='image'
          value={pizzaEditable.image}
          onChange={handleChange}
        />

        <Grid item xs={12}>
          <InputLabel>Valores (em R$) para cada tamanho:</InputLabel>
        </Grid>

        {pizzasSizes?.map(size => (
          <TextField
            key={size.id}
            label={size.name}
            name={`size-${size.id}`}
            xs={3}
          />
        ))}

        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button variant='contained' component={Link} to={PIZZAS_FLAVOURS}>
              Cancelar
            </Button>
          </Grid>

          <Grid item>
            <Button variant='contained' color='primary' type='submit'>
              {texts.button}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </FormContainer>
  )
}

const initialState = {
  name: '',
  image: '',
  value: {}
}

function reducer (state, action) {
  if (action.type === 'EDIT') {
    return action.payload
  }
  return state
}

function usePizzaFlavour (id) {
  const { data, add, edit } = useCollection('pizzasFlavours')
  const [pizza, setPizza] = useState(initialState)

  useEffect(() => {
    setPizza(data?.find(p => p.id === id) || initialState)
  }, [data, id])

  return { pizza, add, edit }
}

export default FormRegisterFlavour
