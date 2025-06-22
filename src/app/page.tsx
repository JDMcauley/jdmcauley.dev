"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col h-full p-6">
      <Card>
        <CardHeader>
          <CardTitle>Hello World!</CardTitle>
        </CardHeader>
        <CardDescription></CardDescription>
        <CardContent>
          <p className="">Welcome to my portfolio</p>
        </CardContent>
      </Card>
    </div>
  )
}
