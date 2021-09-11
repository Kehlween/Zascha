import { GetStaticProps } from "next";
import Advantages from "@partials/index/_advantages";
import FrequentQuestions from "@partials/index/_frequent-questions";
import Presentation from "@partials/index/_presentation";
import About from "@partials/index/_about";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Início',
    },
  };
};

export default function Index() {
  return <div>
    <Presentation />
    <Advantages />
    <FrequentQuestions />
    <About />
  </div>;
}
