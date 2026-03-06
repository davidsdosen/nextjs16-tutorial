import ExploreBtn from "@/components/ExploreBtn";

const events = [
    { image: '/images/event-1.png', title: 'Event 1' },
    { image: '/images/event-2.png', title: 'Event 2' },
]

const Page = () => {
    return (
        <section>
            <h1 className="text-center font-bold">The Hub for every Dev Event <br /> you can't miss!</h1>
            <p className={"text-center mt-10"}>Hackathons, Meetups, and Conferences, All in One Place</p>
        <ExploreBtn/>

        <div className={"mt-20 space-y-7"}>
            <h3>Featured events</h3>
            <ul className={"events list-none"}>
                {[1,2,3,4,5,6].map((event) => (
                    <li key={event}>Event {event}</li>
                ))}
            </ul>
        </div>


        </section>
    )
}
export default Page
