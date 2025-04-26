import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  age: string
  comment: string
  image: string
  rating: number
}

export default function TestimonialCard({ name, age, comment, image, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="rounded-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">{age}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-700 text-sm">{comment}</p>
    </div>
  )
}
