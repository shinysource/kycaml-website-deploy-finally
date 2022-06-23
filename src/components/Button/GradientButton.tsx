interface IGradientButtonProps {
  link: string
  light: string
  dark: string
  alt: string
}

const GradientButton: React.FC<IGradientButtonProps> = ({
  link,
  light,
  dark,
  alt
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="svg-btn">
      <img src={light} className="svg-light-btn" alt={alt} />
      <img src={dark} alt={alt} className="svg-dark-btn" />
    </a>
  )
}

export default GradientButton
