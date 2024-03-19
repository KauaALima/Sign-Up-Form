import { BadgeCheck } from "lucide-react"

export function FinalCard(){
    return(
        <section className="w-full max-w-[535px] flex flex-col text-center">
            <div  className=" flex flex-col gap-4 bg-white p-10 rounded-lg items-center">

                <BadgeCheck size={59} color="green"/>

                <p>Thanks for confirming your subscription! We hope you have funusing our plataform.</p>
            </div>
        </section>
    )
}