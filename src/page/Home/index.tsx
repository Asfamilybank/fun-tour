import { useForm } from 'react-hook-form'
import { publicApi } from 'api'

type IForm = {
  file: any
}

const Home = () => {
  const { register, handleSubmit } = useForm<IForm>()

  const onSubmit = async ({ file }: IForm) => {
    const fd = new FormData()
    file.forEach((item: string | Blob) => {
      fd.append('images', item)
    })
    const res = await publicApi.uploadFileV2(fd)
    console.log(res)
  }

  return (
    <div className="bg-base-100 h-full rounded-lg p-4 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Controller
        control={control}
        name="file"
        render={({ field }) => <input type="file" {...field} />}
      /> */}
        <input {...register('file')} type="file" />
        <button className="btn btn-primary" type="submit">
          上传
        </button>
      </form>
    </div>
  )
}

export default Home
