import { Quicksand } from "next/font/google";
import React from "react";

const quick = Quicksand({ subsets: ["latin"] });

const Paragraph = () => {
  return (
    <div
      className={`${quick.className} my-10 text-2xl font-light bg-black/70 py-10 text-white`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis iure
      necessitatibus accusantium molestiae omnis ipsa voluptatibus aliquam nemo
      saepe maiores quae nam voluptatum quidem laborum, tenetur eligendi.
      Nostrum non nam praesentium nesciunt voluptatem! Quidem, voluptatem
      ducimus obcaecati nihil deleniti amet! Exercitationem quis nisi harum
      ullam recusandae soluta modi dolore natus. Laudantium quasi nam, neque
      illum atque rem tempore ipsam facere harum rerum iusto amet facilis totam
      necessitatibus, error ullam velit excepturi fugiat quidem pariatur
      obcaecati nisi? Doloremque fugiat temporibus, asperiores ipsum accusamus
      excepturi maxime unde modi delectus dolorem inventore natus pariatur
      necessitatibus, officiis eligendi provident ratione hic suscipit quis?
    </div>
  );
};

export default Paragraph;
