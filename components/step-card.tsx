import { Heart, Calendar, MapPin } from "lucide-react"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: string
}

export default function StepCard({ number, title, description, icon }: StepCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Heart":
        return <Heart className="h-6 w-6 text-rose-500" />
      case "Calendar":
        return <Calendar className="h-6 w-6 text-rose-500" />
      case "MapPin":
        return <MapPin className="h-6 w-6 text-rose-500" />
      default:
        return <Heart className="h-6 w-6 text-rose-500" />
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 mb-4">{getIcon()}</div>
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-500 text-white font-bold text-sm absolute -mt-16 ml-8">
        {number}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
