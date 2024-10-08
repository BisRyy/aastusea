"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const Comments = () => {
  const { theme } = useTheme();

  return (
    <>
      <Giscus
        repo="aastusea/aastusea"
        repoId="R_kgDOM3reLA"
        category="Blogs"
        categoryId="DIC_kwDOM3reLM4Ci-vt"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === "dark" ? "dark" : "light"}
        term="Welcome to @giscus/react component!"
        lang="en"
        loading="lazy"
        // crossorigin="anonymous"
        async
      />
    </>
  );
};

export default Comments;
