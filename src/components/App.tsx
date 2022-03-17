import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePageContainer from "containers/HomePageContainer";
import ProfilePageContainer from "containers/ProfilePageContainer";
import NotFoundPage from "pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/profile" element={<ProfilePageContainer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
