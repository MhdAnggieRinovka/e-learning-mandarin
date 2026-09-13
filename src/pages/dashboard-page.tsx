import { ArrowRight, Bot, BookOpen, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <section className="rounded-2xl bg-slate-950 p-6 text-white">
        <Badge className="mb-4 bg-white/10 text-white">
          Mandarin AI Tutor
        </Badge>

        <h1 className="max-w-2xl text-3xl font-bold">
          Belajar Mandarin dengan guru AI pribadi
        </h1>

        <p className="mt-2 max-w-xl text-sm text-slate-300">
          Latihan kosakata, percakapan, pengucapan, dan dapatkan
          koreksi secara langsung.
        </p>

        <Button
          className="mt-5"
          variant="secondary"
          onClick={() => navigate("/tutor")}
        >
          Mulai sesi AI
          <ArrowRight className="size-4" />
        </Button>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <BookOpen className="size-5 text-blue-600" />
            <CardDescription>Materi selesai</CardDescription>
            <CardTitle className="text-2xl">0 / 20</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <Flame className="size-5 text-orange-500" />
            <CardDescription>Rangkaian belajar</CardDescription>
            <CardTitle className="text-2xl">0 hari</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <Bot className="size-5 text-violet-600" />
            <CardDescription>Sesi bersama AI</CardDescription>
            <CardTitle className="text-2xl">0 sesi</CardTitle>
          </CardHeader>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Perkembangan belajar</CardTitle>
          <CardDescription>
            Progres keseluruhan materi Mandarin dasar.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <Progress value={0} />

          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Level pemula</span>
            <span>0%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}