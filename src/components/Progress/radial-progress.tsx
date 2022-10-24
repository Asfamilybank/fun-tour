const RadialProgress = ({ value = 0 }: { value?: number }) => {
  return (
    <div className="radial-progress" style={{ '--value': value }}>
      {value}%
    </div>
  )
}

export default RadialProgress
