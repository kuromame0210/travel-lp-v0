"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  image: string
  tag: string
}

export default function FeatureCard({ title, description, image, tag }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {tag}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Button
          variant="ghost"
          className="text-rose-500 hover:text-rose-600 p-0"
          onClick={() => window.open("https://v0-1r-nine.vercel.app/", "_blank")}
        >
          詳しく見る <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
