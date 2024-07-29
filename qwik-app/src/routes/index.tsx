import { component$, useOnDocument,$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  useOnDocument(
    "resize",
    $(() => {
      console.log("RESIZE----");
    })
  );
  return (
    <>
      <div class={`video__block`}>
        <video autoplay loop muted playsInline>
          <source src={`./big-buck-bunny_trailer.webm`} type="video/webm" />
          <source src={`trailer_480p.mov`} type="video/mov" />
        </video>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
