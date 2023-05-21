import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import Card from 'pages/card/Card';
import Home from 'pages/home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Card />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
