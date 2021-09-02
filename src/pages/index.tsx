import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
        title: 'Início',
    },
  };
};

export default function Index() {
  return    <div></div>;
}
