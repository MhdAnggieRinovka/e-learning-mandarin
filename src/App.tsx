import {
  BookOpen,
  Bot,
  LibraryBig,
  Settings,
} from "lucide-react";
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AppLayout } from "@/layouts/app-layout";
import { DashboardPage } from "@/pages/dashboard-page";
import { FeaturePage } from "@/pages/feature-page";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />

          <Route
            path="/practice"
            element={
              <FeaturePage
                title="Latihan Mandarin"
                description="Latihan soal dan koreksi jawaban pengguna."
                icon={BookOpen}
              />
            }
          />

          <Route
            path="/tutor"
            element={
              <FeaturePage
                title="Guru AI"
                description="Berinteraksi dan berdiskusi dengan guru Mandarin berbasis AI."
                icon={Bot}
              />
            }
          />

          <Route
            path="/vocabulary"
            element={
              <FeaturePage
                title="Kosakata"
                description="Pelajari kosakata Mandarin, pinyin, dan terjemahannya."
                icon={LibraryBig}
              />
            }
          />

          <Route
            path="/settings"
            element={
              <FeaturePage
                title="Pengaturan"
                description="Atur model AI, suara, dan konfigurasi aplikasi."
                icon={Settings}
              />
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;