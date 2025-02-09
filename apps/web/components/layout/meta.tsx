import Head from "next/head";

interface IMetaData {
  title: string;
  description: string;
  url: "/" | string;
}

interface MetaProps {
  metaData: IMetaData;
}

const Meta: React.FC<MetaProps> = ({ metaData }) => {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{metaData.title}</title>
      <meta name="title" content={metaData.title} />
      <meta name="description" content={metaData.description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaData.title} />
      <meta
        property="og:url"
        content={`https://mapleui.vercel.app${metaData.url}`}
      />
      <meta
        property="og:image"
        content="https://mapleui.vercel.app/cover.png"
      />
      <meta property="og:description" content={metaData.description} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:title" content={metaData.title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://mapleui.vercel.app${metaData.url}`}
      />
      <meta
        property="twitter:image"
        content="https://mapleui.vercel.app/cover.png"
      />
      <meta property="twitter:description" content={metaData.description} />
    </Head>
  );
};

export default Meta;
