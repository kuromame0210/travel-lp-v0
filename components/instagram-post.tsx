import Image from "next/image"
import { Heart, MessageCircle } from "lucide-react"

interface InstagramPostProps {
  image: string
  username: string
  likes: number
  caption: string
}

export default function InstagramPost({ image, username, likes, caption }: InstagramPostProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={caption} fill className="object-cover" />
      </div>
      <div className="p-3">
        <div className="flex items-center mb-2">
          <span className="font-medium text-sm">@{username}</span>
        </div>
        <div className="flex items-center mb-2">
          <Heart className="h-4 w-4 text-rose-500 mr-1" />
          <span className="text-xs text-gray-600 mr-3">{likes}</span>
          <MessageCircle className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-xs text-gray-600">12</span>
        </div>
        <p className="text-xs text-gray-700 line-clamp-2">{caption}</p>
      </div>
    </div>
  )
}
