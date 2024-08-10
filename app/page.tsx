import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum
        cum maxime cumque facere, ullam consequuntur maiores perspiciatis hic,
        odio ea ex culpa, non aut impedit! Deleniti voluptates ad aliquid?
      </h1>
      <Button variant={"default"} size={"icon"}>
        <Mail className="h-4 w-4" />
      </Button>
      <Button variant={"destructive"}>Click me</Button>
      <Button variant={"ghost"}>Click me</Button>
      <Button variant={"link"}>Click me</Button>
      <Button variant={"outline"}>Click me</Button>
      <Button variant={"secondary"}>Click me</Button>
    </>
  );
}
