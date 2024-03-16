import { Input } from "../components/ui/Input"


export function App() {
  return (
    <div className="w-full h-[100vh] max-w-[1440px] my-0 mx-auto flex items-center justify-center">
      <div className="w-full flex gap-3 items-center justify-center">
        <section className="w-full max-w-lg flex flex-col gap-10">
          <h1 className="text-5xl font-bold text-white">Learn to code by watching others</h1>
          <p className="text-white text-base font-normal">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </section>

        <section className="w-full max-w-[535px] flex flex-col text-center">
            <a href="#" className="py-5 px-6 text-white font-medium rounded-lg bg-Blue shadow-md shadow-DarkBlue mb-6"><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter</a>
            <form className=" flex flex-col gap-4 bg-white p-10 rounded-lg">

              <Input type="text" placeholder="First Name"/>
              <Input type="text" placeholder="Last Name"/>
              <Input type="email" placeholder="Email Andress"/>
              <Input type="password" placeholder="Password"/>

              <button className="bg-Green py-4 px-6 rounded-lg text-base text-white font-semibold uppercase"> Claim your free trial </button>
              <span className="text-xs text-Grayish font-medium"> By clicking the button, you are agreeing to our <a href="" className="text-Salmon font-bold">Terms and Services</a></span>
            </form>
        </section>

      </div>
    </div> 
  )
}