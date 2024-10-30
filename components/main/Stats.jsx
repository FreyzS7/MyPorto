 "use client"

 import CountUp from "react-countup"


 const stats = [
    {
        num: 2,
        text: "Years of Experience",
    },
    {
        num: 4,
        text: "Projects Completed",
    },
    {
        num: 55,
        text: "Happy Clients",
    },
    {
        num: 300,
        text: "Code Commits",
    },
 ]
const Stats = () => {
  return (
    <section className="pt-2 pb-5 xl:pt-0 xl:pb-0">
     <div className="container mx-auto">
        <div className=" flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
           {
            stats.map((stat, index) => {
                return (
                <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                      <CountUp 
                      start={0} 
                      end={stat.num} 
                      delay={2}
                      duration={5} 
                      className="text-4xl xl:text-6xl font-extrabold"
                      />
                      <p className={`${stat.text.length < 15 ? "max-w-[100px]" :"max-w-[150px]"} leading-snug text-white/80`}>
                        {stat.text}
                      </p>
                </div>
              )
              })}


        </div>
    </div>
    </section>
  )
}

export default Stats
