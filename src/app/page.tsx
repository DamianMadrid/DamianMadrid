import AboutMe from './ui/aboutme'
import WhoAmI from './ui/whoami'

export default function Home() {
    return (
        <div className="px-6 py-10">
            <WhoAmI />
            <AboutMe />
        </div>
    )
}
