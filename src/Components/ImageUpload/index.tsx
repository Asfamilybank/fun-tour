import { publicApi } from 'Api'
import { RadialProgress } from 'Components/Progress'
import Toast from 'Components/Toast'
import { IconMathPlus } from 'Icons'
import { useState } from 'react'

const ImageUpload = ({ accept, onChange }: { accept?: string; onChange?: (value: string) => void }) => {
  const [value, setValue] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const onError = (err: string) => {
      Toast.error(err)
      event.target.value = ''
      setLoading(false)
    }
    const fileList = event.target.files

    if (!fileList) {
      onError('文件上传失败')

      return
    }
    const formData = new FormData()

    formData.append('images', fileList[0])

    const result = await publicApi.uploadFileV2(formData, function (progress: number) {
      setProgress(progress)
    })

    if (!result.success) {
      onError('文件上传失败')

      return
    }
    event.target.value = ''
    setValue(result.data.images[0])
    onChange?.(result.data.images[0])
    setLoading(false)
  }

  return (
    <label
      className={`inline-block h-28 w-28 cursor-pointer rounded border border-dashed hover:transition-[border\\-color] ${
        loading ? 'cursor-wait' : 'hover:border-primary'
      }`}
    >
      <input type="file" className="hidden" accept={accept} onChange={onFileChange} disabled={loading} />
      <div className="flex h-full flex-col items-center justify-center text-sm">
        {value ? (
          <img src={value} className="" />
        ) : loading ? (
          <RadialProgress value={progress} />
        ) : (
          <>
            <IconMathPlus />
            点击上传
          </>
        )}
      </div>
    </label>
  )
}

export default ImageUpload
