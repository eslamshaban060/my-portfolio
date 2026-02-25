import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { ProjectType } from "@/constants/types";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "../Link/Link";
export const CardImage: React.FC<ProjectType> = (data) => {
  return (
    <Card className="relative mx-auto card-glass hover:border-primary/40  w-full max-w-full pt-0">
      <div className="absolute h-50 w-full inset-0 z-30 aspect-video rounded-2xl bg-black/35" />
      <Image
        src={data.image}
        alt="Event cover"
        className="relative h-50 z-20 aspect-video w-full object-cover  rounded-t-2xl"
        width={300}
        height={300}
      />
      <CardHeader>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-color">
          {data.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm font-body leading-relaxed">
          {data.description}
        </CardDescription>
      </CardHeader>
      <div className="flex px-5 flex-wrap gap-2">
        {data.tech.map((t: string, id: number) => (
          <CardAction
            className=" px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            key={id}
          >
            <Badge variant="secondary">{t}</Badge>
          </CardAction>
        ))}
      </div>

      <CardFooter>
        <div className="flex gap-3 ">
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="View code"
          >
            <Github size={18} />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="View live"
          >
            <ExternalLink size={18} />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
