import { BrowserRouter, Routes, Route } from "react-router-dom";
import GsapTo from "./Pages/GsapTo";
import GsapFrom from "./Pages/GsapFrom";
import GsapFromTo from "./Pages/GsapFromTo";
import Index from "./Pages/Index";
import GsapTimeline from "./Pages/GsapTimeline";
import GsapText from "./Pages/GsapText";
import GsapStagger from "./Pages/GsapStagger";
import GsapScrollTrigger from "./Pages/GsapScrollTrigger";
import ScrollVideo from "./Pages/project/scrollVideo";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Routes with layout */}
        <Route element={<Layout navbar={true} />}>
          <Route index element={<Index />} />
          <Route path="gsapto" element={<GsapTo />} />
          <Route path="gsapfrom" element={<GsapFrom />} />
          <Route path="gsapfromto" element={<GsapFromTo />} />
          <Route path="gsaptimeline" element={<GsapTimeline />} />
          <Route path="gsapstagger" element={<GsapStagger />} />
          <Route path="gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="gsaptext" element={<GsapText />} />
          {/* ❌ Remove this line ⬇️ */}
          {/* <Route path="scrollvideo" element={<ScrollVideo />} /> */}
        </Route>

        {/* ✅ Route without layout */}
        <Route path="/scrollvideo" element={<ScrollVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
