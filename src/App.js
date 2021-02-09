import { mount, route } from "navi";
import Matches from "./pages/Matches"
import Landing from "./pages/Landing"
import Players from "./pages/Players";
import Ones from "./pages/Ones";
import PostMatch from "./pages/PostMatch";

const App = mount({
    '/': route({
        title: "Home",
        view: <Landing />
    }),
    '/matches': route({
        title: 'Matches',
        view: <Matches />
    }),
    '/players': route({
        title: 'Players',
        view: <Players />
    }),
    '/ones': route({
        title: 'Ones',
        view: <Ones />
    }),
    '/post': route({
        title: 'Post',
        view: <PostMatch />
    }),
})

export default App;
