import { useEffect } from 'react';

export type DynamicHeaderContentsProps = {
  /** ページタイトル */
  title: string;
  /** ページ説明 */
  description: string;
  /** キーワード（SEO用） */
  keywords: string;
  /** CSS */
  css: string;
};

/**
 * headerの情報（メタタグなど）を動的にロードするコンポーネント。
 * @param props props
 * @returns コンポーネント
 */
export const DynamicHeaderContents = (props: DynamicHeaderContentsProps) => {
  const { css, title, description, keywords } = props;

  useEffect(() => {
    //スタイルを設定
    let styleElement: HTMLStyleElement;
    if (css) {
      styleElement = document.createElement('style');
      styleElement.textContent = css;
      document.head.appendChild(styleElement);
    }

    //タイトルを設定
    if (title) {
      document.title = title;
    }

    //descriptionを設定
    let descriptionMeta: HTMLMetaElement;
    if (description) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      descriptionMeta.content = description;
      document.head.appendChild(descriptionMeta);
    }

    //keywordsを設定
    let keywordsMeta: HTMLMetaElement;
    if (keywords) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = keywords;
      document.head.appendChild(keywordsMeta);
    }

    return () => {
      //アンマウント時に削除
      if (styleElement) document.head.removeChild(styleElement);
      if (descriptionMeta) document.head.removeChild(descriptionMeta);
      if (keywordsMeta) document.head.removeChild(keywordsMeta);
    };
  }, [props]);
  return <></>;
};
