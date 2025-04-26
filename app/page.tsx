"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Star, Instagram, ChevronRight, Sparkles } from "lucide-react"
import TravelQuiz from "@/components/travel-quiz"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"
import InstagramPost from "@/components/instagram-post"
import StepCard from "@/components/step-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-rose-400" />
            <span className="text-xl font-medium">週末リトリート特集</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-rose-500 transition-colors">
              特集プラン
            </Link>
            <Link href="#popular" className="text-sm font-medium hover:text-rose-500 transition-colors">
              人気プラン
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-rose-500 transition-colors">
              利用者の声
            </Link>
            <Link href="#quiz" className="text-sm font-medium hover:text-rose-500 transition-colors">
              旅行診断
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* ファーストビュー */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/serene-ryokan-onsen.png"
              alt="リラックスできる温泉旅館"
              fill
              priority
              className="object-cover brightness-[0.85]"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-40">
            <div className="max-w-xl space-y-6 bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                心も体もふわっと軽くなる、
                <br />
                <span className="text-rose-500">週末リトリート</span>へ。
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                忙しいあなたに、ぴったりの"ごほうび旅"を。
                <br />
                たった3分で、あなた好みの旅行プランをご提案します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full"
                  onClick={() => window.open("https://v0-1r-nine.vercel.app/", "_blank")}
                >
                  今すぐプランを探す <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-full"
                  onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}
                >
                  簡単3分診断をする
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-20"></div>
        </section>

        {/* サービス説明エリア */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                たった3ステップで、あなたにぴったりの旅行が見つかる
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                忙しい日常の合間に、スマホでサクッと探せる。
                <br />
                あなたの「今」の気分に合わせた旅行プランをご提案します。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <StepCard
                number={1}
                title="気分や目的を選ぶ"
                description="リラックスしたい？アクティブに過ごしたい？あなたの今の気分をお聞かせください。"
                icon="Heart"
              />
              <StepCard
                number={2}
                title="日程と予算を設定"
                description="今週末でも大丈夫。直前予約OKのプランも多数ご用意しています。"
                icon="Calendar"
              />
              <StepCard
                number={3}
                title="ぴったりのプランを予約"
                description="スマホで完結。面倒な手続きなしで、すぐに予約確定します。"
                icon="MapPin"
              />
            </div>

            <div className="mt-12 text-center">
              <Image
                src="/travel-booking-cafe.png"
                alt="スマホで簡単予約"
                width={800}
                height={400}
                className="rounded-xl mx-auto shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 特集・カテゴリ別ナビエリア */}
        <section id="features" className="py-16 bg-rose-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              あなたにぴったりの旅行スタイル
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                title="今週末行ける特集"
                description="急な休みでも大丈夫。直前予約OKの厳選プラン"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/weekend-getaway-FQ1fUCNLKH51CKxxhsedA3SWl8yk9m.png"
                tag="直前予約OK"
              />
              <FeatureCard
                title="癒しが欲しいあなたへ"
                description="温泉、スパ、マッサージ付きの癒しプラン"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/onsen-retreat-i9jOR6IDzoTihtcKKOxnkfWR5acuEr.png"
                tag="癒し特集"
              />
              <FeatureCard
                title="女子旅におすすめ"
                description="インスタ映え抜群の宿＆観光スポット"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/girls-trip-hrDPSUWMrsfFJPDxekzjcPn7YJYYdt.png"
                tag="SNS映え"
              />
              <FeatureCard
                title="コスパ重視プラン"
                description="予算内で最高の体験ができる厳選プラン"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/value-plan-D87JL1NyXMklrZiB8OVLoTrKSkOlbf.png"
                tag="コスパ◎"
              />
            </div>

            <div id="popular" className="mt-16">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="text-yellow-400 mr-2 h-6 w-6" />
                人気プランランキング
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hakone-onsen-Vn7pBw50XLHSVDHTPigkFFfqTHSnep.png"
                      alt="箱根の高級温泉"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      1位
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-1">箱根・露天風呂付き客室プラン</h4>
                    <p className="text-sm text-gray-600 mb-2">1泊2食付き・駅から送迎あり</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-rose-500">¥15,800〜</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-rose-500 hover:text-rose-600 p-0"
                        onClick={() => window.open("https://v0-1r-nine.vercel.app/", "_blank")}
                      >
                        詳細を見る <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/kamakura-beach-WWYNZZgboOw1B3p5sQhNROcDq6feVr.png"
                      alt="鎌倉のビーチリゾート"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      2位
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-1">鎌倉・海が見えるホテルステイ</h4>
                    <p className="text-sm text-gray-600 mb-2">朝食付き・ビーチまで徒歩5分</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-rose-500">¥12,500〜</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-rose-500 hover:text-rose-600 p-0"
                        onClick={() => window.open("https://v0-1r-nine.vercel.app/", "_blank")}
                      >
                        詳細を見る <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/karuizawa-cabin-serenity.png"
                      alt="軽井沢の森の中の隠れ家"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      3位
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-1">軽井沢・森の中の隠れ家コテージ</h4>
                    <p className="text-sm text-gray-600 mb-2">素泊まり・BBQセット貸出あり</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-rose-500">¥18,000〜</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-rose-500 hover:text-rose-600 p-0"
                        onClick={() => window.open("https://v0-1r-nine.vercel.app/", "_blank")}
                      >
                        詳細を見る <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ユーザーの声・SNSシェア例 */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">利用者の声</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <TestimonialCard
                name="佐藤 美咲"
                age="34歳"
                comment="忙しい中でも簡単に予約できて助かりました。提案されたプランが私の好みにぴったりで大満足！"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/weekend-getaway-FQ1fUCNLKH51CKxxhsedA3SWl8yk9m.png"
                rating={5}
              />
              <TestimonialCard
                name="田中 由美"
                age="29歳"
                comment="直前予約でも素敵な宿が見つかって感動。友達と行った温泉旅行は最高のリフレッシュになりました。"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/kamakura-beach-WWYNZZgboOw1B3p5sQhNROcDq6feVr.png"
                rating={5}
              />
              <TestimonialCard
                name="山田 恵子"
                age="31歳"
                comment="コスパ重視で探していましたが、期待以上の体験ができました。次回も利用します！"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hakone-onsen-Vn7pBw50XLHSVDHTPigkFFfqTHSnep.png"
                rating={4}
              />
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Instagram className="text-rose-400 mr-2 h-6 w-6" />
                みんなの#週末リトリート体験
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <InstagramPost
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hakone-onsen-Vn7pBw50XLHSVDHTPigkFFfqTHSnep.png"
                  username="ami_travel"
                  likes={124}
                  caption="週末に訪れた温泉で最高のリラックスタイム♨️ #週末リトリート #温泉女子旅"
                />
                <InstagramPost
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/value-plan-D87JL1NyXMklrZiB8OVLoTrKSkOlbf.png"
                  username="yumi_gourmet"
                  likes={98}
                  caption="朝から豪華な朝食！旅館の朝ごはんって最高…✨ #週末リトリート #旅館の朝ごはん"
                />
                <InstagramPost
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/girls-trip-hrDPSUWMrsfFJPDxekzjcPn7YJYYdt.png"
                  username="travel_junkie"
                  likes={156}
                  caption="部屋から見える絶景に感動！また来たい😍 #週末リトリート #絶景ホテル"
                />
                <InstagramPost
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/weekend-getaway-FQ1fUCNLKH51CKxxhsedA3SWl8yk9m.png"
                  username="tokyo_girls"
                  likes={203}
                  caption="友達と乾杯🍹久しぶりの女子旅最高！ #週末リトリート #女子旅"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTAエリア */}
        <section id="quiz" className="py-16 bg-gradient-to-r from-rose-100 to-rose-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                  あなたにぴったりの旅行プランを見つけましょう
                </h2>
                <p className="text-center text-gray-600 mb-8">
                  簡単な質問に答えるだけで、あなたの好みに合ったプランをご提案します。
                </p>

                <TravelQuiz />

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500 mb-2">または</p>
                  <Button
                    className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full"
                    onClick={() => window.open("https://v0-1r-nine.vercel.app/", "_blank")}
                  >
                    人気プランを今すぐチェック <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ニュースレター登録 */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-4">お得な情報をお届けします</h3>
              <p className="text-gray-600 mb-6">限定プランや特別割引情報をいち早くお届けします。</p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input type="email" placeholder="メールアドレスを入力" className="flex-1" />
                <Button className="bg-rose-500 hover:bg-rose-600">登録する</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-rose-400" />
                <span className="text-lg font-medium">週末リトリート</span>
              </Link>
              <p className="text-sm text-gray-600">
                忙しい30代女性のための
                <br />
                週末旅行提案サービス
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">サービスについて</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    ご利用ガイド
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    会社概要
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">旅行カテゴリ</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    温泉旅行
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    グルメ旅
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    アクティビティ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    女子旅特集
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} 週末リトリート All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="text-xs text-gray-500 hover:text-rose-500">
                  プライバシーポリシー
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-rose-500">
                  利用規約
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-rose-500">
                  特定商取引法に基づく表記
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
