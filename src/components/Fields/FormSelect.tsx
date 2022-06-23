import { FormControl, FormGroup, FormHelperText } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FormikValues } from 'formik'

const useStyles = makeStyles({
  select: {
    '&': {
      backgroundColor: '#1A1A1A'
    },
    '&:focus': {
      backgroundColor: '#1A1A1A'
    }
  },
  label: {
    fontFamily: 'Inter',
    fontSize: '14px',
    color: '#A6A6A6'
  }
})

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

interface Option {
  label: string
  value: string
}

interface FormSelectProps {
  name: string
  options: Option[]
  preferredOptions: Option[]
  className?: string
  id?: string
  label?: string
  placeholder?: string
  handleChange?: (evt: SelectChangeEvent) => void
  formik: FormikValues
  isHint?: boolean
}

const FormSelect = ({
  name,
  options,
  preferredOptions,
  className,
  label,
  placeholder,
  handleChange,
  formik,
  isHint
}: FormSelectProps) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <FormGroup className={className}>
        <FormControl
          variant="filled"
          error={formik.touched[name] && !!formik.errors[name]}
        >
          <InputLabel id="select">{label}</InputLabel>
          <Select
            labelId="select"
            name={name}
            value={formik.values[name]}
            className={classes.select}
            inputProps={{ className: classes.select }}
            onChange={handleChange}
          >
            <MenuItem disabled value="">
              <em>{placeholder}</em>
            </MenuItem>
            {preferredOptions.map((option: Option, index: number) => (
              <MenuItem value={option.label} key={index}>
                {option.label}
              </MenuItem>
            ))}
            <hr></hr>
            {options.map((option: Option, index: number) => (
              <MenuItem value={option.label} key={index}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {isHint && formik.touched[name] && formik.errors[name] && (
            <FormHelperText sx={{ marginLeft: 0 }}>
              {formik.errors[name]}
            </FormHelperText>
          )}
        </FormControl>
      </FormGroup>
    </ThemeProvider>
  )
}

export default FormSelect
