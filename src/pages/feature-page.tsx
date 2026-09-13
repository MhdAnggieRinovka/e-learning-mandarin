import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeaturePageProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeaturePage({
  title,
  description,
  icon: Icon,
}: FeaturePageProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <Card>
        <CardHeader>
          <div className="mb-3 grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Icon className="size-5" />
          </div>

          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <Badge variant="secondary">
            Akan dibangun pada tahap berikutnya
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
}