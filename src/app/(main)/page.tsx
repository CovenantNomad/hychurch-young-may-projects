import Header from "@/components/bingo/Header";
import Label from "@/components/bingo/Label";
import PlayBox from "@/components/bingo/PlayBox";
import ResultBox from "@/components/bingo/ResultBox";
import GuideBody from "@/components/guide/GuideBody";
import GuideFooter from "@/components/guide/GuideFooter";
import GuideHeader from "@/components/guide/GuideHeader";
import InnerWrapper from "@/components/shared/InnerWrapper";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="py-16 xl:py-24 bg-primary">
        <InnerWrapper>
          <Header />
          <Label />
          <PlayBox />
          <ResultBox />
        </InnerWrapper>
      </section>
      <section className="py-[100px] xl:py-[100px] bg-beige">
        <InnerWrapper>
          <GuideHeader />
          <GuideBody />
          <GuideFooter />
        </InnerWrapper>
      </section>
    </main>
  );
}
