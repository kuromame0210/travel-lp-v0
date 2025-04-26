"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export default function TravelQuiz() {
  const [step, setStep] = useState(1)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // 最終ステップの場合は外部リンクへ
      window.open("https://v0-1r-nine.vercel.app/", "_blank")
    }
  }

  return (
    <div className="bg-rose-50 p-6 rounded-xl">
      <div className="flex justify-between mb-6">
        <div className={`h-2 w-1/3 rounded-full ${step >= 1 ? "bg-rose-500" : "bg-gray-200"} mr-1`}></div>
        <div className={`h-2 w-1/3 rounded-full ${step >= 2 ? "bg-rose-500" : "bg-gray-200"} mr-1`}></div>
        <div className={`h-2 w-1/3 rounded-full ${step >= 3 ? "bg-rose-500" : "bg-gray-200"}`}></div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg">どんな旅行がご希望ですか？</h3>
          <RadioGroup defaultValue="relax">
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="relax" id="relax" />
              <Label htmlFor="relax" className="flex-1 cursor-pointer">
                ゆっくりリラックスしたい
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="active" id="active" />
              <Label htmlFor="active" className="flex-1 cursor-pointer">
                アクティブに楽しみたい
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="gourmet" id="gourmet" />
              <Label htmlFor="gourmet" className="flex-1 cursor-pointer">
                グルメを楽しみたい
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="sightseeing" id="sightseeing" />
              <Label htmlFor="sightseeing" className="flex-1 cursor-pointer">
                観光スポットを巡りたい
              </Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg">ご希望の予算は？</h3>
          <RadioGroup defaultValue="medium">
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="low" id="low" />
              <Label htmlFor="low" className="flex-1 cursor-pointer">
                〜15,000円
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium" className="flex-1 cursor-pointer">
                15,000円〜25,000円
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="high" id="high" />
              <Label htmlFor="high" className="flex-1 cursor-pointer">
                25,000円〜
              </Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg">いつ頃の旅行をお考えですか？</h3>
          <RadioGroup defaultValue="weekend">
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="weekend" id="weekend" />
              <Label htmlFor="weekend" className="flex-1 cursor-pointer">
                今週末
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="nextweek" id="nextweek" />
              <Label htmlFor="nextweek" className="flex-1 cursor-pointer">
                来週末
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="nextmonth" id="nextmonth" />
              <Label htmlFor="nextmonth" className="flex-1 cursor-pointer">
                1ヶ月以内
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg">
              <RadioGroupItem value="undecided" id="undecided" />
              <Label htmlFor="undecided" className="flex-1 cursor-pointer">
                まだ決めていない
              </Label>
            </div>
          </RadioGroup>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <Button onClick={handleNext} className="bg-rose-500 hover:bg-rose-600">
          {step < 3 ? "次へ" : "プランを見る"} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
