"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export default function Home() {
    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    return (
        <div>
            <div className="flex justify-center space-x-5 mt-20">
                <Button className="size-7"
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    {mounted && (theme === "dark" ? <Sun /> : <Moon />)}
                </Button>
                <p className="text-center align-middle">Hello world!</p>
            </div>
        </div>
    )
}
