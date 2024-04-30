import "../../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import Providers from "../provider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import SignInClientComponent from "@/components/shared/SignIn";

export const metadata: Metadata = {
  title: "청장년 [더한다] 프로젝트",
  description: "5월 가정의 달을 맞아 은혜로운 가정을 세우기 위해 [더한다] 사진촬영 빙고 프로젝트를 준비했습니다. 예배, 기도, 섬김, 조이, 허깅을 주제로 가족들끼리 기존보다 한번 [더한다]는 의미입니다. ",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient({ cookies })
  const { data : { session }} = await supabase.auth.getSession()

  return (
    <html lang="kr">
      <body>
        <Providers>
          {session ? (
            <div>
              {children}
            </div>
          ) : (
            <SignInClientComponent />
          )}
        </Providers>
      </body>
    </html>
  );
}
