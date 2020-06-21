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
  Typography
} from '@material-ui/core'
import { Form, FormContainer, TextField } from 'ui'
import { PIZZAS_FLAVOURS } from 'routes'

function FormRegisterFlavour () {
  const { id } = useParams()
  const nameField = useRef()

  const texts = useMemo(() => ({
    title: id ? 'Editar sabor' : 'Cadastrar novo sabor',
    button: id ? 'Salvar' : 'Cadastrar'
  }), [id])

  useEffect(() => {
    nameField.current.focus()
  }, [id])

  return (
    <FormContainer>
      <Grid item xs={12}>
        <Typography variant='h4'>
          {texts.title}
        </Typography>
      </Grid>

      <Form>
        <TextField
          label='Nome do sabor'
          name='name'
          inputRef={nameField}
        />

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

export default FormRegisterFlavour
