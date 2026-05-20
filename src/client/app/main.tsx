import { StrictMode } from 'react';
import { Provider } from "react-redux";
import store from "@client/store/store.ts";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from '@client/pages/Index/Index';
import NotFound from "@client/pages/NotFound/NotFound";
import './main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);