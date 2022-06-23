import { TextField, FormGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import ErrorIcon from '@mui/icons-material/Error'
import { FormikValues } from 'formik'
import { ChangeEvent } from 'react'

const useStyles = makeStyles({
  root: {
    '&': {
      backgroundColor: '#1A1A1A'
    },
    '&:hover': {
      backgroundColor: '#1A1A1A'
    },
    '&:focus-within': {
      backgroundColor: '#1A1A1A'
    }
  },
  input: {
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px #3c3f43 inset'
    }
  },
  label: {
    color: '#A6A6A6'
  },
  helper: {
    marginLeft: 0
  }
})

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

interface FormInputProps {
  id?: string
  type?: string
  name: string
  className?: string
  label?: string
  placeholder?: string
  prefix?: string
  handleChange?: (evt: ChangeEvent<HTMLInputElement>) => void
  formik: FormikValues
  isHint?: boolean
}

const FormMobile = ({
  id,
  type,
  name,
  className,
  label,
  placeholder,
  prefix,
  handleChange,
  formik,
  isHint
}: FormInputProps) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <TextField
          type={type || 'text'}
          name={name}
          value={formik.values[name]}
          onChange={handleChange}
          className={className}
          label={label}
          placeholder={placeholder}
          variant="filled"
          error={formik.touched[name] && !!formik.errors[name]}
          helperText={isHint && formik.touched[name] && formik.errors[name]}
          InputProps={
            prefix
              ? {
                  startAdornment: (
                    <InputAdornment position="start">{prefix}</InputAdornment>
                  ),
                  className: classes.root,
                  classes: { input: classes.input }
                }
              : formik.touched[name] && formik.errors[name]
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <ErrorIcon sx={{ color: '#E41E31' }}></ErrorIcon>
                    </InputAdornment>
                  ),
                  className: classes.root,
                  classes: { input: classes.input }
                }
              : { className: classes.root, classes: { input: classes.input } }
          }
          FormHelperTextProps={{ className: classes.helper }}
        />
      </FormGroup>
    </ThemeProvider>
  )
}

export default FormMobile
