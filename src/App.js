import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Loading from "./components/utils/Loading/Loading.jsx";
import "./tailwind.css";
import "react-elegant-timeline/dist/styles.css";
import "./timeline-override.css"
const Career = lazy(() => import("./components/Career/Career"));
const AboutTimeline = lazy(() =>
  import("./components/Timelines/AboutTimeline/AboutTimeline.jsx")
);
const ProjectsTimeline = lazy(() =>
  import("./components/Timelines/ProjectsTimeline/ProjectsTimeline.jsx")
);
const CareerTimeline = lazy(() =>
  import("./components/Timelines/CareerTimeline/CareerTimeline.jsx")
);
const Gallery = lazy(()=>import("./components/Gallery/Gallery.jsx"))
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="loading" element={<Loading />} />
          <Route path="" element={<LandingPage page={1} />} />
          <Route path="about">
            <Route path="" element={<LandingPage page={2} />} />
            <Route path="timeline" element={<AboutTimeline />} />
          </Route>
          <Route path="gallery" element={<Gallery />}/>
      

          <Route path="contact" element={<LandingPage page={3} />} />
          <Route path="projects">
            <Route path="" element={<LandingPage page={4} />} />
            <Route path="timeline" element={<ProjectsTimeline />} />
          </Route>
          <Route path="skills" element={<LandingPage page={5} />} />
          <Route path="career">
            <Route path="" element={<Career />} />
            <Route path="timeline" element={<CareerTimeline />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
