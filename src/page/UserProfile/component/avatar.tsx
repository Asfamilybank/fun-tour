import ImageUpload from 'components/ImageUpload'
import { useState } from 'react'

const Avatar = () => {
  const [value, setValue] = useState()

  return (
    <div className="">
      <ImageUpload accept=".jpg,.jpeg,.png" />
    </div>
  )
}

export default Avatar
