import gsap from "gsap";

export const homeEnterTransition = (
  el: {
    querySelectorAll: (arg0: string) => any;
    querySelector: (arg0: string) => any;
  },
  done: () => void
) => {
  const tiles = el.querySelectorAll(".pf-tile");
  const background = el.querySelector(".pf-background");

  tiles.forEach((tile: { style: { pointerEvents: string } }) => {
    tile.style.pointerEvents = "none";
  });

  const tl = gsap.timeline({
    onComplete: () => {
      done();
      tiles.forEach((tile: { style: { pointerEvents: string } }) => {
        tile.style.pointerEvents = "all";
      });
    },
  });
  tl.fromTo(
    tiles,
    { autoAlpha: 0, y: 15 },
    { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.3 }
  ).fromTo(
    background,
    { autoAlpha: 0, y: 15 },
    { autoAlpha: 1, y: 0, duration: 0.3 },
    "-=0.3"
  );
};

export const homeLeaveTransition = (
  el: {
    querySelectorAll: (arg0: string) => any;
    querySelector: (arg0: string) => any;
  },
  done: () => void
) => {
  const tiles = el.querySelectorAll(".pf-tile");
  const clickedTile =
    el.querySelector(".pf-tile:focus") || el.querySelector(".pf-tile:hover");
  const clickedTileTitle = clickedTile.querySelector("h2");
  const otherTiles = [...tiles].filter((tile) => tile !== clickedTile);
  const background = el.querySelector(".pf-background");

  // get the clicked tile's position
  const clickedTileRect = clickedTile.getBoundingClientRect();
  const clickedTileX = clickedTileRect.left;
  const clickedTileY = clickedTileRect.top;
  const clickedTileWidth = clickedTileRect.width;
  const clickedTileHeight = clickedTileRect.height;

  const tl = gsap
    .timeline({
      onComplete: done,
      onStart: () => {
        tiles.forEach((tile: { style: { pointerEvents: string } }) => {
          tile.style.pointerEvents = "none";
        });
      },
    })
    .to(otherTiles, { autoAlpha: 0, duration: 0.3 })
    .to(background, { autoAlpha: 0, duration: 0.3 }, 0)
    .to(clickedTileTitle, { autoAlpha: 0, duration: 0.3 })
    .set(clickedTile, {
      position: "fixed",
      top: clickedTileY,
      left: clickedTileX,
      width: clickedTileWidth,
      height: clickedTileHeight,
    })
    .to(clickedTile, {
      top: 20,
      left: 20,
      width: "calc(100vw - 40px)",
      height: "calc(100vh - 40px)",
      duration: 0.5,
      backgroundColor: "#000",
    });
};
