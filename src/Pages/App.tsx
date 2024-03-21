
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {CircleAlert} from 'lucide-react'
import { FinalCard } from "../components/ui/FinalCard"
import { useState } from "react"

const createUserFormSchema = z.object({
  firstName: z.string().nonempty('First Name carnet be empty').transform(name => {return name[0].toUpperCase().concat(name.substring(1))}),
  lastName: z.string().nonempty('Last Name cannot be empty').transform(name => {return name[0].toUpperCase().concat(name.substring(1))}),
  email: z.string().nonempty('email cannot be empty').email('Loots a De not an email'),
  password: z.string().nonempty('password cannot be empty').min(6,'Password cannot be empty')
})

type crateUserData = z.infer<typeof createUserFormSchema>

export function App() {
  const [isFinished , setIsFinished] = useState(false)
  const {register,handleSubmit, formState: { errors }} = useForm<crateUserData>({resolver: zodResolver(createUserFormSchema) })


  function CreteNewUser(data:any){
    console.log(data)
    
    setIsFinished(true)
  }

  return (
    <div className="w-full h-[100vh] max-w-[1440px] my-8 mx-auto flex items-center justify-center md:my-0">
      <div className="w-full flex flex-col gap-8 items-center justify-center lg:flex-row">
        <section className="w-full max-w-md flex flex-col text-center gap-10 lg:max-w-lg lg:text-left">
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">Learn to code by watching others</h1>
          <p className="text-white text-base font-normal">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </section>

        {isFinished ?
        <FinalCard /> 
          :
        <section className="w-full max-w-[535px] flex flex-col text-center">
            <a href="#" className="py-5 px-6 text-white font-medium rounded-lg bg-Blue shadow-md shadow-DarkBlue mb-6"><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter</a>
            <form onSubmit={handleSubmit(CreteNewUser)} className=" flex flex-col gap-4 bg-white p-10 rounded-lg">

              <div className="text-right">
                <div className="flex flex-col border border-Grayish rounded-lg text-DarkBlue relative">
                  <input 
                    type="text"
                    className="w-full py-4 px-6 border-none font-medium bg-transparent placeholder-DarkBlue" 
                    placeholder="First Name"
                    {...register('firstName')}
                  />
                  {errors.firstName && <CircleAlert className="absolute right-4 top-4 text-red-500" />}
                </div>
                  {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
              </div>


              <div className="text-right">
                <div className="flex flex-col border border-Grayish rounded-lg text-DarkBlue relative">
                    <input 
                      type="text"
                      className="w-full py-4 px-6 border-none font-medium bg-transparent placeholder-DarkBlue" 
                      placeholder="Last Name"
                      {...register('lastName')}
                    />
                      {errors.lastName && <CircleAlert className="absolute right-4 top-4 text-red-500" />}
                  </div>
                {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
              </div>


              <div className="text-right">
                  <div className="flex flex-col border border-Grayish rounded-lg text-DarkBlue relative">
                    <input
                      type="email"
                      className="w-full py-4 px-6 border-none font-medium bg-transparent placeholder-DarkBlue" 
                      placeholder={errors.email ? 'email@example/com' : "Email Andress"} 
                      {...register('email')}
                    />
                    {errors.email && <CircleAlert className="absolute right-4 top-4 text-red-500" />}
                    </div>
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>

              <div className="text-right">
                  <div className="flex flex-col border border-Grayish rounded-lg text-DarkBlue relative">
                    <input
                      type="password"
                      className="w-full py-4 px-6 border-none font-medium bg-transparent placeholder-DarkBlue" 
                      placeholder="Password"
                      {...register('password')}
                      />
                    {errors.password && <CircleAlert className="absolute right-4 top-4 text-red-500" />}
                    </div>
                {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
              </div>

              <button className="bg-Green py-4 px-6 rounded-lg text-base text-white font-semibold uppercase"> Claim your free trial </button>
              <span className="text-xs text-Grayish font-medium"> By clicking the button, you are agreeing to our <a href="" className="text-Salmon font-bold">Terms and Services</a></span>
            </form>
        </section> 
        }

      </div>
    </div> 
  )
}
