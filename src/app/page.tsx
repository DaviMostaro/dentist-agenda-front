"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Page() {
    return (
        <div className="ml-4 mt-4">
            <div className="w-full flex flex-col mb-4">
                <h1 className="text-3xl font-bold">Welcome to Dentist Agenda</h1>
            </div>
            <Button onClick={() => redirect("/home")}>Ir para home</Button>
        </div>
    )
}