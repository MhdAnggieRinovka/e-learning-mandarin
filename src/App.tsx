import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="mb-2">
            <Badge variant="secondary">Prototipe Lokal</Badge>
          </div>

          <CardTitle className="text-2xl">
            Mandarin AI Tutor
          </CardTitle>

          <CardDescription>
            Belajar bahasa Mandarin secara interaktif bersama guru AI.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Persiapan aplikasi
          </p>

          <Progress value={30} />
        </CardContent>

        <CardFooter>
          <Button className="w-full">
            Mulai Belajar
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default App;